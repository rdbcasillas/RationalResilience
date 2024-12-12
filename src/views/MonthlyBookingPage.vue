<!-- views/MonthlyBookingPage.vue -->
<template>
  <div class="pt-16 pb-16">
    <div class="max-w-4xl mx-auto px-6">
      <h1 class="text-3xl font-bold mb-6 text-center">Start Monthly Journey</h1>

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
            <span>4 sessions per month</span>
          </li>
          <!-- Other features -->
        </ul>

        <!-- Payment Options -->
        <div class="space-y-4 mb-8">
          <h3 class="font-semibold">Payment Options:</h3>
          <div class="grid grid-cols-2 gap-4">
            <button
              @click="showUPIModal = true"
              class="p-4 border rounded-lg hover:bg-gray-50"
            >
              UPI/GPay
            </button>
            <button
              @click="showPayPalModal = true"
              class="p-4 border rounded-lg hover:bg-gray-50"
            >
              International Payment
            </button>
          </div>
        </div>

        <!-- UPI Modal -->
        <div
          v-if="showUPIModal"
          class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          @click="showUPIModal = false"
        >
          <div class="bg-white p-6 rounded-lg max-w-xl w-full" @click.stop>
            <h3 class="text-lg font-bold mb-4">Pay via UPI</h3>
            <div class="text-center mb-4">
              <p class="mb-2 font-bold">mehra.vatsal@okhdfcbank</p>
              <img
                src="@/assets/images/myqrcode.png"
                alt="UPI QR Code"
                class="mx-auto"
              />
            </div>
            <button
              @click="showUPIModal = false"
              class="w-full bg-blue-600 text-white p-2 rounded"
            >
              Close
            </button>
          </div>
        </div>

        <!-- PayPal Modal -->
        <div
          v-if="showPayPalModal"
          class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          @click="showPayPalModal = false"
        >
          <div class="bg-white p-6 rounded-lg max-w-xl w-full" @click.stop>
            <h3 class="text-lg font-bold mb-4">Pay via PayPal</h3>
            <div class="text-center mb-4">
              <p class="mb-2 font-bold">mehra.vatsal@gmail.com</p>
              <img
                src="@/assets/images/mypaypal.jpeg"
                alt="Paypal QR Code"
                class="mx-auto w-100 h-100"
              />
            </div>
            <button
              @click="showPayPalModal = false"
              class="w-full bg-blue-600 text-white p-2 rounded"
            >
              Close
            </button>
          </div>
        </div>

        <!-- Scheduling Calendar -->
        <div
          id="my-cal-inline"
          class="z-0"
          style="width: 100%; height: 100vh; overflow: scroll"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CheckCircle } from "lucide-vue-next";
import { ref, onMounted, watch } from "vue";

const showUPIModal = ref(false);
const showPayPalModal = ref(false);

watch(showUPIModal, (newValue) => {
  if (newValue) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
});

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

<style>
.overflow-hidden {
  overflow: hidden;
}
</style>
