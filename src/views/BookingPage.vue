<!-- views/BookingPage.vue -->
<template>
  <div class="pt-12 pb-16 px-6">
    <div class="max-w-4xl mx-auto">
      <router-link
        to="/sessions"
        class="inline-flex items-center gap-1 text-gray-500 hover:text-purple-600 transition-colors mb-6"
      >
        <ChevronLeft class="w-4 h-4" />
        All session options
      </router-link>

      <h1 class="text-4xl font-bold mb-2 handwritten-alt">
        Book a single session
      </h1>
      <p class="text-gray-600 text-lg mb-8">
        Pick a time below. Nothing to pay to book — we sort payment out between
        us once we have spoken.
      </p>

      <!-- Session summary -->
      <div class="card p-8 mb-8">
        <div class="mb-6">
          <span class="text-3xl font-bold">{{ price.amount }}</span>
          <span class="text-gray-500">{{ price.unit }}</span>
        </div>

        <ul class="space-y-3">
          <li
            v-for="feature in PRICING.single.features"
            :key="feature"
            class="flex items-start"
          >
            <CheckCircle
              class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
            />
            <span>{{ feature }}</span>
          </li>
        </ul>
      </div>

      <div class="card p-4 md:p-6">
        <CalEmbed :cal-link="CAL_SESSION_LINK" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { CheckCircle, ChevronLeft } from "lucide-vue-next";
import CalEmbed from "@/components/CalEmbed.vue";
import { PRICING, CAL_SESSION_LINK, displayPrice } from "@/config/site";

const price = displayPrice(PRICING.single);
</script>
