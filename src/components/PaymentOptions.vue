<!-- components/PaymentOptions.vue -->
<template>
  <div>
    <!-- Payment Options -->
    <div class="space-y-4 mb-8">
      <h3 class="font-semibold">Payment Options:</h3>
      <div class="grid grid-cols-2 gap-4">
        <button
          @click="showUPIModal = true"
          class="p-4 border rounded-lg hover:bg-gray-200"
        >
          UPI/GPay
        </button>
        <button
          @click="showPayPalModal = true"
          class="p-4 border rounded-lg hover:bg-gray-200"
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
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const showUPIModal = ref(false);
const showPayPalModal = ref(false);

watch(showUPIModal, (newValue) => {
  if (newValue) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
});

watch(showPayPalModal, (newValue) => {
  if (newValue) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
});
</script>
