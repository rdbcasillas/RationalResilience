<!-- views/BookingPage.vue -->
<template>
  <div class="page pt-12">
    <router-link to="/sessions" class="link text-[17px]">← Coaching</router-link>

    <h1 class="page-title mt-6">Book a single session</h1>
    <p class="mb-2">
      <span class="text-2xl font-medium">{{ price.amount }}</span>
      <span class="text-muted">{{ price.unit }}</span>
      <span class="text-muted"> · one hour, online</span>
    </p>
    <p class="text-muted mb-10">
      Pick a time below. You don't pay anything to book. We sort out payment
      between us once we've spoken.
    </p>

    <CalEmbed :cal-link="CAL_SESSION_LINK" />
  </div>
</template>

<script setup>
import CalEmbed from "@/components/CalEmbed.vue";
import { PRICING, CAL_SESSION_LINK, displayPrice } from "@/config/site";

const price = displayPrice(PRICING.single);
</script>
