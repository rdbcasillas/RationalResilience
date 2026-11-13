<!-- views/MonthlyBookingPage.vue -->
<template>
  <div class="page pt-12">
    <router-link to="/sessions" class="link text-[17px]">← Coaching</router-link>

    <h1 class="page-title mt-6">Start monthly coaching</h1>
    <p class="mb-2">
      <span class="text-2xl font-medium">{{ price.amount }}</span>
      <span class="text-muted">{{ price.unit }}</span>
      <span class="text-muted"> · four one-hour sessions, online</span>
    </p>
    <p class="text-muted mb-4">
      Book your first session below. Once it's booked I'll send you
      instructions for setting up the other three, spaced across the month.
      You don't pay anything to book.
    </p>
    <p class="card !p-4 text-[17px] mb-10">
      The calendar below describes a single 60-minute session. That's
      expected: you're booking the first of your four, and the monthly price
      above is the one that applies.
    </p>

    <CalEmbed :cal-link="CAL_MONTHLY_LINK" />
  </div>
</template>

<script setup>
import CalEmbed from "@/components/CalEmbed.vue";
import { PRICING, CAL_MONTHLY_LINK, displayPrice } from "@/config/site";

const price = displayPrice(PRICING.monthly);
</script>
