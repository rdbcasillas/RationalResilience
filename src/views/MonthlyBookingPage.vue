<!-- views/MonthlyBookingPage.vue -->
<template>
  <div class="pt-16 pb-16">
    <div class="max-w-4xl mx-auto px-6">
      <h1 class="text-3xl font-bold mb-6 text-center">Start Monthly Journey</h1>
      <h3 class="text-xl mb-6 text-justify">
        Please book your first session below. After booking, you'll receive
        instructions to set up the remaining three sessions for optimal spacing
        throughout the month.
      </h3>

      <!-- Package Details -->
      <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div class="flex justify-between items-baseline mb-4">
          <div>
            <span class="text-2xl font-bold">₹4000</span>
            <span class="text-gray-500">/month</span>
          </div>
          <div class="text-sm text-gray-500">($48 USD)</div>
        </div>

        <!-- Package Features -->
        <ul class="space-y-3 mb-8">
          <li class="flex items-center">
            <CheckCircle class="w-5 h-5 text-green-500 mr-2" />
            <span>Weekly 90-minute sessions to maintain momentum</span>
          </li>
          <li class="flex items-center">
            <CheckCircle class="w-5 h-5 text-green-500 mr-2" />
            <span>Custom growth plan that evolves with your progress</span>
          </li>
          <li class="flex items-center">
            <CheckCircle class="w-5 h-5 text-green-500 mr-2" />
            <span>Regular check-ins and support between sessions</span>
          </li>
          <li class="flex items-center">
            <CheckCircle class="w-5 h-5 text-green-500 mr-2" />
            <span>Ongoing refinement of strategies based on what works</span>
          </li>
          <!-- Other features -->
        </ul>

        <PaymentOptions />

        <!-- Scheduling Calendar -->
        <!-- Cal.com Embed with Loading States -->
        <div class="relative">
          <!-- Loading Message -->
          <div v-if="isLoading" class="text-center py-8">
            <p class="text-blue-600 text-lg animate-pulse">
              Fetching calendar...
            </p>
          </div>

          <!-- Error Message -->
          <div v-if="hasError" class="text-center py-8">
            <p class="text-red-600 text-lg mb-4">Unable to load calendar</p>
            <button
              @click="reloadCalendar"
              class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Refresh Page
            </button>
          </div>

          <div
            id="my-cal-inline"
            style="width: 100%; height: 100vh; overflow: scroll"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CheckCircle } from "lucide-vue-next";
import { ref, onMounted, watch } from "vue";
import PaymentOptions from "@/components/PaymentOptions.vue";

const isLoading = ref(true);
const hasError = ref(false);

const initializeCalendar = () => {
  try {
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

    // Set timeout to check if calendar loaded
    setTimeout(() => {
      const calendarElement = document.querySelector("#my-cal-inline iframe");
      if (!calendarElement) {
        hasError.value = true;
      }
      isLoading.value = false;
    }, 5000); // Check after 5 seconds
  } catch (error) {
    console.error("Calendar initialization failed:", error);
    hasError.value = true;
    isLoading.value = false;
  }
};

const reloadCalendar = () => {
  window.location.reload();
};

onMounted(() => {
  initializeCalendar();
});
</script>

<style>
.overflow-hidden {
  overflow: hidden;
}
</style>
