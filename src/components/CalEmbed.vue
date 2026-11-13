<!-- components/CalEmbed.vue -->
<!-- Inline Cal.com booking calendar. Shared by both booking pages. -->
<template>
  <div>
    <!-- Always visible, so nobody is stuck if the embed is slow or fails. -->
    <p class="text-[17px] text-muted mb-4">
      Calendar not showing?
      <a :href="directUrl" target="_blank" rel="noopener noreferrer" class="link"
        >Book directly on cal.com</a
      >
      or
      <a :href="`mailto:${CONTACT.email}`" class="link">email me</a>.
    </p>

    <p v-if="status === 'loading'" class="py-8 text-muted" role="status">
      Loading the calendar…
    </p>

    <div v-if="status === 'failed'" class="py-8" role="alert">
      <p class="mb-4">The calendar did not load.</p>
      <button type="button" class="btn-quiet" @click="start">Try again</button>
    </div>

    <div ref="container" class="w-full min-h-[70vh]"></div>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { CONTACT } from "@/config/site";

const props = defineProps({
  calLink: { type: String, required: true },
});

const directUrl = computed(() => `https://cal.com/${props.calLink}`);

const container = ref(null);
const status = ref("loading"); // loading | ready | failed
let timer = null;
let observer = null;

// Each mount gets its own Cal namespace, so a calendar never inherits queued
// instructions that point at an element from a page the visitor has left.
let mounts = 0;

// Cal.com's official embed snippet, apart from formatting. Keep the
// "initNamespace" line when updating it.
const loadCalScript = () => {
  (function (C, A, L) {
    let p = function (a, ar) {
      a.q.push(ar);
    };
    let d = C.document;
    C.Cal =
      C.Cal ||
      function () {
        let cal = C.Cal;
        let ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api = function () {
            p(api, arguments);
          };
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            // Tells an already-loaded embed script that this namespace exists.
            // Without it, only calendars created before the script finished
            // loading ever render.
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
  })(window, "https://app.cal.com/embed/embed.js", "init");
};

const stopWatching = () => {
  clearTimeout(timer);
  observer?.disconnect();
  observer = null;
};

const start = () => {
  stopWatching();
  status.value = "loading";
  const el = container.value;
  if (!el) return;
  el.innerHTML = "";

  try {
    loadCalScript();
    mounts += 1;
    const ns = `booking-${Date.now()}-${mounts}`;
    window.Cal("init", ns, { origin: "https://cal.com" });
    window.Cal.ns[ns]("inline", {
      elementOrSelector: el,
      config: { layout: "month_view", theme: "light" },
      calLink: props.calLink,
    });
    window.Cal.ns[ns]("ui", {
      theme: "light",
      cssVarsPerTheme: { light: { "cal-brand": "#3A4A9F" } },
      hideEventTypeDetails: false,
      layout: "month_view",
    });

    // Ready as soon as Cal inserts its iframe; give up after 12 seconds.
    const check = () => {
      if (el.querySelector("iframe")) {
        status.value = "ready";
        stopWatching();
      }
    };
    observer = new MutationObserver(check);
    observer.observe(el, { childList: true, subtree: true });
    check(); // once the script is loaded, Cal inserts the iframe synchronously
    timer = setTimeout(() => {
      check();
      if (status.value !== "ready") {
        status.value = "failed";
        stopWatching();
      }
    }, 12000);
  } catch (error) {
    console.error("Calendar initialization failed:", error);
    status.value = "failed";
  }
};

onMounted(start);
onBeforeUnmount(stopWatching);
</script>
