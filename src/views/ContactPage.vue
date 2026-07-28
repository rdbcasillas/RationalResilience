<!-- views/ContactPage.vue -->
<template>
  <div class="pt-16 pb-16 relative overflow-hidden">
    <!-- Organic background blobs -->
    <svg
      class="absolute top-20 right-10 w-96 h-96 opacity-20 pointer-events-none"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#C4B5FD"
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
        fill="#93C5FD"
        d="M39.5,-65.6C51.4,-58.1,61.3,-47.5,68.5,-35.1C75.7,-22.7,80.2,-8.5,79.8,5.5C79.4,19.5,74.1,33.3,65.6,44.8C57.1,56.3,45.4,65.5,32.2,71.3C19,77.1,4.3,79.5,-10.2,77.9C-24.7,76.3,-39,70.7,-51.8,62.2C-64.6,53.7,-75.9,42.3,-82.4,28.2C-88.9,14.1,-90.6,-2.7,-86.5,-17.9C-82.4,-33.1,-72.5,-46.7,-59.8,-53.9C-47.1,-61.1,-31.6,-61.9,-17.6,-64.3C-3.6,-66.7,8.9,-70.7,39.5,-65.6Z"
        transform="translate(100 100)"
      />
    </svg>

    <div class="max-w-5xl mx-auto px-6 relative z-10">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div
          class="rounded-3xl overflow-hidden shadow-2xl border-4 border-purple-200 hover:scale-105 transition-transform duration-300 transform rotate-2"
        >
          <img
            src="@/assets/images/contactme.jpg"
            alt=""
            class="w-full h-full object-cover"
          />
        </div>

        <div class="text-center md:text-left">
          <h1 class="text-5xl font-bold mb-2 text-gray-900">
            <span class="handwritten-alt inline-block transform -rotate-1"
              >Get in</span
            >
            {{ " " }}
            <span class="text-purple-600 handwritten-text inline-block"
              >Touch</span
            >
          </h1>
          <svg
            class="mb-8 md:mx-0 mx-auto"
            width="180"
            height="15"
            viewBox="0 0 180 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 10 Q 45 5, 90 8 T 175 7"
              stroke="#8B5CF6"
              stroke-width="3"
              fill="none"
              stroke-linecap="round"
            />
          </svg>

          <p class="text-xl text-gray-700 mb-4 leading-relaxed">
            Questions before you book? Not sure whether this is the right kind of
            help? Write to me — a real reply, not a funnel.
          </p>
          <p class="text-gray-600 mb-8">
            If you would rather just talk, the
            <a
              :href="CAL_INTRO_URL"
              target="_blank"
              rel="noopener noreferrer"
              class="text-purple-600 font-medium underline underline-offset-2"
              >free 30-minute call</a
            >
            is the fastest way.
          </p>

          <div class="space-y-4">
            <a
              v-for="channel in channels"
              :key="channel.label"
              :href="channel.href"
              :target="channel.external ? '_blank' : undefined"
              :rel="channel.external ? 'noopener noreferrer' : undefined"
              class="group flex items-center md:justify-start justify-center gap-3 bg-white/80 backdrop-blur-sm p-5 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-lg hover:border-purple-300 transition-all duration-300"
            >
              <component
                :is="channel.icon"
                class="w-6 h-6 flex-shrink-0 group-hover:scale-110 transition-transform"
                :class="channel.color"
              />
              <span class="text-gray-900 font-medium break-all">
                {{ channel.label }}
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Mail, MessageSquare, Send } from "lucide-vue-next";
import { CONTACT, CAL_INTRO_URL } from "@/config/site";

const channels = [
  {
    label: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    icon: Mail,
    color: "text-blue-600",
    external: false,
  },
  {
    label: "Telegram",
    href: CONTACT.telegram,
    icon: Send,
    color: "text-purple-600",
    external: true,
  },
  {
    label: "Signal",
    href: CONTACT.signal,
    icon: MessageSquare,
    color: "text-blue-600",
    external: true,
  },
];
</script>
