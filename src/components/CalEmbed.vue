<!-- components/CalEmbed.vue -->
<!-- Inline Cal.com booking calendar. Shared by both booking pages. -->
<template>
  <div class="relative">
    <div v-if="isLoading" class="text-center py-8">
      <p class="text-blue-600 text-lg animate-pulse">Fetching calendar…</p>
    </div>

    <div v-if="hasError" class="text-center py-8">
      <p class="text-red-600 text-lg mb-2">The calendar did not load.</p>
      <p class="text-gray-600 mb-4">
        You can also book directly on
        <a
          :href="`https://cal.com/${calLink}`"
          target="_blank"
          rel="noopener noreferrer"
          class="text-blue-600 underline underline-offset-2"
          >cal.com</a
        >, or just
        <a
          :href="`mailto:${CONTACT.email}`"
          class="text-blue-600 underline underline-offset-2"
          >email me</a
        >.
      </p>
      <button
        @click="reloadCalendar"
        class="bg-blue-600 text-white px-5 py-2.5 rounded-full hover:bg-blue-700 transition-colors"
      >
        Reload the page
      </button>
    </div>

    <div :id="elementId" class="w-full h-screen overflow-scroll"></div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { CONTACT } from "@/config/site";

const props = defineProps({
  calLink: { type: String, required: true },
  namespace: { type: String, default: "" },
});

// Default the Cal namespace to the event slug ("user/60min" -> "60min") so it
// can't drift out of sync when the session length changes.
const namespace = computed(
  () => props.namespace || props.calLink.split("/").pop(),
);

const elementId = "cal-inline-embed";
const isLoading = ref(true);
const hasError = ref(false);

// Cal.com's official embed snippet, verbatim apart from formatting.
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
          typeof namespace === "string"
            ? (cal.ns[namespace] = api) && p(api, ar)
            : p(cal, ar);
          return;
        }
        p(cal, ar);
      };
  })(window, "https://app.cal.com/embed/embed.js", "init");
};

const initializeCalendar = () => {
  try {
    loadCalScript();

    const ns = namespace.value;
    Cal("init", ns, { origin: "https://cal.com" });
    Cal.ns[ns]("inline", {
      elementOrSelector: `#${elementId}`,
      config: { layout: "month_view", theme: "light" },
      calLink: props.calLink,
    });
    Cal.ns[ns]("ui", {
      theme: "light",
      cssVarsPerTheme: { light: { "cal-brand": "#7C3AED" } },
      hideEventTypeDetails: false,
      layout: "month_view",
    });

    // If no iframe has appeared after 5s, assume it failed and offer a way out.
    setTimeout(() => {
      if (!document.querySelector(`#${elementId} iframe`)) {
        hasError.value = true;
      }
      isLoading.value = false;
    }, 5000);
  } catch (error) {
    console.error("Calendar initialization failed:", error);
    hasError.value = true;
    isLoading.value = false;
  }
};

const reloadCalendar = () => {
  window.location.reload();
};

onMounted(initializeCalendar);
</script>
