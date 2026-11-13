<!-- views/PricingPage.vue — the Coaching page (/sessions) -->
<template>
  <div>
    <PageIntro>
      <h1 class="page-title">Coaching</h1>
      <p class="lead mb-5">
        I work with individuals on career uncertainty, major decisions,
        motivation, habits, relationships and other life challenges.
      </p>
      <p class="mb-5">
        Sessions are conversational and tailored, with a mix of listening,
        reframing, exercises and practical follow-through. The aim is for
        you to think more clearly, not for me to do your thinking for you. Each
        session is an hour long and online, wherever you are.
      </p>
      <p>
        If you'd like to talk before deciding, there's a
        <a
          :href="CAL_INTRO_URL"
          target="_blank"
          rel="noopener noreferrer"
          class="link"
          >free 30-minute intro call</a
        >. It's optional. You can also book a session directly.
      </p>
    </PageIntro>

    <!-- Individual options -->
    <section class="page pb-16">
      <div class="grid md:grid-cols-2 gap-6">
        <div
          v-for="option in options"
          :key="option.title"
          class="card flex flex-col"
        >
          <h2 class="text-[1.7rem] leading-snug mb-1">{{ option.title }}</h2>
          <p class="mb-4">
            <span class="text-2xl font-medium">{{ option.price.amount }}</span>
            <span class="text-muted">{{ option.price.unit }}</span>
          </p>
          <p class="text-muted mb-5">{{ option.tier.blurb }}</p>
          <ul class="space-y-2 mb-8 flex-1 text-[18px]">
            <li
              v-for="feature in option.tier.features"
              :key="feature"
              class="flex gap-3"
            >
              <span aria-hidden="true" class="text-accent">•</span>
              <span>{{ feature }}</span>
            </li>
          </ul>
          <router-link :to="option.to" class="btn-quiet text-center">
            {{ option.action }}
          </router-link>
        </div>
      </div>
    </section>

    <!-- Leaders -->
    <section id="leaders" class="page pb-16 scroll-mt-8">
      <div class="rule pt-12">
        <h2 class="section-title">Coaching for founders and leaders</h2>
        <p class="mb-4">
          I also coach people leading teams or organisations. The work covers
          both personal questions and the demands of leadership.
        </p>
        <p class="mb-6">
          Sessions are usually {{ LEADERSHIP.cadence }} and
          {{ LEADERSHIP.sessionLength }}. The scope and the rate depend on what
          you need, so we agree them after a conversation.
        </p>
        <div class="flex flex-wrap items-center gap-x-6 gap-y-4">
          <a
            :href="CAL_INTRO_URL"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-quiet"
            >Book a free intro call</a
          >
          <a :href="mailto('Leadership coaching')" class="link"
            >or email me about it</a
          >
        </div>
      </div>
    </section>

    <!-- Practical -->
    <section class="page">
      <div class="rule pt-12">
        <h2 class="section-title">Practical details</h2>
        <dl class="space-y-6">
          <div v-for="note in practicalNotes" :key="note.title">
            <dt class="font-medium mb-1">{{ note.title }}</dt>
            <dd class="text-muted">{{ note.body }}</dd>
          </div>
        </dl>
      </div>
    </section>
  </div>
</template>

<script setup>
import PageIntro from "@/components/PageIntro.vue";
import {
  PRICING,
  LEADERSHIP,
  CAL_INTRO_URL,
  displayPrice,
  mailto,
} from "@/config/site";

const options = [
  {
    title: "Single session",
    tier: PRICING.single,
    price: displayPrice(PRICING.single),
    to: "/book-session",
    action: "Book a single session",
  },
  {
    title: "Monthly",
    tier: PRICING.monthly,
    price: displayPrice(PRICING.monthly),
    to: "/book-monthly",
    action: "Start monthly coaching",
  },
];

const practicalNotes = [
  {
    title: "Paying",
    body: "Nothing goes through this website and nothing is due to book. We sort out payment between us once we've spoken.",
  },
  {
    title: "Coaching is not therapy",
    body: "If what you're dealing with needs clinical care, I'll tell you and help you find it.",
  },
  {
    title: "Not sure which to pick?",
    body: "Take the free intro call. We can work out what fits once I know what's going on.",
  },
];
</script>
