<!-- views/PricingPage.vue -->
<template>
  <div class="py-20 px-6 relative overflow-hidden">
    <!-- Organic background blobs -->
    <svg
      class="absolute top-10 right-20 w-96 h-96 opacity-20 pointer-events-none"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#93C5FD"
        d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.8C64.8,56.4,53.8,69,39.8,76.8C25.8,84.6,8.8,87.6,-7.5,85.1C-23.8,82.6,-39.4,74.6,-53.2,64.2C-67,53.8,-79,41,-85.8,25.8C-92.6,10.6,-94.2,-7,-88.9,-21.8C-83.6,-36.6,-71.4,-48.6,-57.8,-55.9C-44.2,-63.2,-29.2,-65.8,-14.7,-67.3C-0.2,-68.8,13.8,-69.2,27.1,-66.1C40.4,-63,53,-56.4,44.7,-76.4Z"
        transform="translate(100 100)"
      />
    </svg>
    <svg
      class="absolute bottom-20 left-10 w-80 h-80 opacity-15 pointer-events-none"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#C4B5FD"
        d="M39.5,-65.6C51.4,-58.1,61.3,-47.5,68.5,-35.1C75.7,-22.7,80.2,-8.5,79.8,5.5C79.4,19.5,74.1,33.3,65.6,44.8C57.1,56.3,45.4,65.5,32.2,71.3C19,77.1,4.3,79.5,-10.2,77.9C-24.7,76.3,-39,70.7,-51.8,62.2C-64.6,53.7,-75.9,42.3,-82.4,28.2C-88.9,14.1,-90.6,-2.7,-86.5,-17.9C-82.4,-33.1,-72.5,-46.7,-59.8,-53.9C-47.1,-61.1,-31.6,-61.9,-17.6,-64.3C-3.6,-66.7,8.9,-70.7,39.5,-65.6Z"
        transform="translate(100 100)"
      />
    </svg>

    <!-- Header -->
    <div class="text-center max-w-2xl mx-auto mb-16 relative z-10">
      <h1
        class="text-4xl md:text-5xl font-bold mb-3 handwritten-alt inline-block transform -rotate-1"
      >
        Ways to work together
      </h1>
      <svg
        class="mx-auto mb-6"
        width="220"
        height="15"
        viewBox="0 0 220 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 10 Q 55 5, 110 8 T 215 7"
          stroke="#8B5CF6"
          stroke-width="3"
          fill="none"
          stroke-linecap="round"
        />
      </svg>
      <p class="text-gray-700 text-lg leading-relaxed">
        Every option starts the same way: a free 30-minute call where you tell me
        what is going on, and we work out together whether I am the right person
        for it. Nothing to commit to on that call.
      </p>
      <a
        :href="CAL_INTRO_URL"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-block mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:-translate-y-0.5 transition-all shadow-lg"
      >
        Book the free call
      </a>
    </div>

    <!-- Two main tiers -->
    <div class="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 relative z-10">
      <!-- Single Session -->
      <div class="card card-hover flex flex-col overflow-hidden">
        <div class="p-8 flex-1">
          <h2 class="font-bold text-2xl mb-1 handwritten-text text-blue-600">
            Single Session
          </h2>
          <svg
            class="mb-4"
            width="140"
            height="10"
            viewBox="0 0 140 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 6 Q 35 4, 70 6 T 135 5"
              stroke="#3B82F6"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
            />
          </svg>
          <div class="mb-4">
            <span class="text-3xl font-bold">{{ singlePrice.amount }}</span>
            <span class="text-gray-500">{{ singlePrice.unit }}</span>
          </div>
          <p class="text-gray-600 mb-6 text-lg leading-relaxed">
            {{ PRICING.single.blurb }}
          </p>
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
        <div class="p-6 bg-blue-50/60 border-t border-blue-100">
          <router-link
            to="/book-session"
            class="block text-center bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-md"
          >
            Book a single session
          </router-link>
        </div>
      </div>

      <!-- Monthly Package -->
      <div class="card card-hover flex flex-col overflow-hidden relative">
        <div
          class="absolute top-6 right-6 bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full"
        >
          For ongoing work
        </div>
        <div class="p-8 flex-1">
          <h2 class="font-bold text-2xl mb-1 handwritten-text text-purple-600">
            Monthly Journey
          </h2>
          <svg
            class="mb-4"
            width="160"
            height="10"
            viewBox="0 0 160 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 6 Q 40 4, 80 6 T 155 5"
              stroke="#8B5CF6"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
            />
          </svg>
          <div class="mb-4">
            <span class="text-3xl font-bold">{{ monthlyPrice.amount }}</span>
            <span class="text-gray-500">{{ monthlyPrice.unit }}</span>
          </div>
          <p class="text-gray-600 mb-6 text-lg leading-relaxed">
            {{ PRICING.monthly.blurb }}
          </p>
          <ul class="space-y-3">
            <li
              v-for="feature in PRICING.monthly.features"
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
        <div class="p-6 bg-purple-50/60 border-t border-purple-100">
          <router-link
            to="/book-monthly"
            class="block text-center bg-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-purple-700 transition-colors shadow-md"
          >
            Start the monthly journey
          </router-link>
        </div>
      </div>
    </div>

    <!-- Executive coaching -->
    <div class="max-w-5xl mx-auto mt-8 relative z-10">
      <div class="card card-hover overflow-hidden border-l-4 border-l-amber-400">
        <div class="p-8 md:p-10 grid md:grid-cols-3 gap-8 items-start">
          <div class="md:col-span-2">
            <div class="flex items-center gap-3 mb-1">
              <Briefcase class="w-6 h-6 text-amber-500 flex-shrink-0" />
              <h2 class="font-bold text-2xl handwritten-text text-amber-600">
                Executive &amp; Leadership Coaching
              </h2>
            </div>
            <svg
              class="mb-4"
              width="200"
              height="10"
              viewBox="0 0 200 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 6 Q 50 4, 100 6 T 195 5"
                stroke="#F59E0B"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
              />
            </svg>
            <p class="text-gray-600 mb-6 text-lg leading-relaxed">
              {{ PRICING.executive.blurb }}
            </p>
            <ul class="grid sm:grid-cols-2 gap-3">
              <li
                v-for="feature in PRICING.executive.features"
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

          <div class="bg-amber-50/70 rounded-xl p-6 text-center">
            <p class="text-2xl font-bold mb-1">{{ PRICING.executive.inr }}</p>
            <p class="text-sm text-gray-500 mb-6">{{ PRICING.executive.usd }}</p>
            <a
              :href="CAL_INTRO_URL"
              target="_blank"
              rel="noopener noreferrer"
              class="block bg-amber-500 text-white px-6 py-4 rounded-full font-semibold hover:bg-amber-600 transition-colors shadow-md"
            >
              Talk it through first
            </a>
            <p class="text-xs text-gray-500 mt-4">
              We scope it on the intro call, then I send you a rate.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Practical notes -->
    <div class="max-w-5xl mx-auto mt-16 relative z-10">
      <div class="grid md:grid-cols-3 gap-6">
        <div
          v-for="note in practicalNotes"
          :key="note.title"
          class="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/80"
        >
          <h3 class="font-semibold text-gray-900 mb-2">{{ note.title }}</h3>
          <p class="text-gray-600 leading-relaxed">{{ note.body }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CheckCircle, Briefcase } from "lucide-vue-next";
import { PRICING, CAL_INTRO_URL, displayPrice } from "@/config/site";

const singlePrice = displayPrice(PRICING.single);
const monthlyPrice = displayPrice(PRICING.monthly);

const practicalNotes = [
  {
    title: "How sessions run",
    body: "Online video call, one hour, wherever in the world you are.",
  },
  {
    title: "Paying",
    body: "Nothing goes through this website and nothing is due to book. We work it out between us once we have spoken.",
  },
  {
    title: "Not sure which to pick?",
    body: "Take the free call. We can work out which one fits once I know what is going on.",
  },
];
</script>
