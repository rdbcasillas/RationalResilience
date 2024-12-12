<!-- views/BookingPage.vue -->
<template>
  <div class="pt-16 pb-16">
    <div class="max-w-4xl mx-auto px-6">
      <h1 class="text-3xl font-bold mb-6 text-center">Book a Single Session</h1>

      <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div class="flex justify-between items-baseline mb-4">
          <div>
            <span class="text-2xl font-bold">₹1,000</span>
            <span class="text-gray-500">/session</span>
          </div>
          <div class="text-sm text-gray-500">($12 USD)</div>
        </div>

        <ul class="space-y-3 mb-8">
          <li class="flex items-center">
            <CheckCircle class="w-5 h-5 text-green-500 mr-2" />
            <span>90-minute deep dive</span>
          </li>
          <li class="flex items-center">
            <CheckCircle class="w-5 h-5 text-green-500 mr-2" />
            <span>Action steps to take forward</span>
          </li>
          <li class="flex items-center">
            <CheckCircle class="w-5 h-5 text-green-500 mr-2" />
            <span>Follow-up email support</span>
          </li>
        </ul>
      </div>

      <!-- Cal.com Embed -->
      <div
        id="my-cal-inline"
        style="width: 100%; height: 100vh; overflow: scroll"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { CheckCircle } from "lucide-vue-next";
import { onMounted } from "vue";

onMounted(() => {
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
  Cal("init", "90min", { origin: "https://cal.com" });

  Cal.ns["90min"]("inline", {
    elementOrSelector: "#my-cal-inline",
    config: { layout: "month_view", theme: "light" },
    calLink: "vatsal-mehra-tblt4g/90min",
  });
  Cal.ns["90min"]("ui", {
    theme: "light",
    cssVarsPerTheme: { light: { "cal-brand": "#85bde2" } },
    hideEventTypeDetails: false,
    layout: "month_view",
  });
});
</script>
