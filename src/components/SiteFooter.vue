<!-- components/SiteFooter.vue -->
<template>
  <footer class="mt-20 border-t border-gray-200/80 bg-white/70 backdrop-blur-sm">
    <div class="max-w-6xl mx-auto px-6 py-14">
      <div class="grid gap-10 md:grid-cols-3">
        <!-- Brand -->
        <div>
          <router-link to="/" class="flex items-center mb-4">
            <img
              src="@/assets/images/ratreslogo2.png"
              alt="Rational Resilience"
              class="w-10 h-10"
            />
            <span class="handwritten-alt text-xl text-gray-800 ml-1">
              Rational
              <span class="handwritten-text text-purple-600">Resilience</span>
            </span>
          </router-link>
          <p class="text-gray-600 leading-relaxed">
            Coaching that takes your thinking and your feelings equally
            seriously. Online, worldwide.
          </p>
        </div>

        <!-- Links -->
        <div>
          <h3 class="font-semibold text-gray-900 mb-4">Explore</h3>
          <ul class="space-y-2">
            <li v-for="link in links" :key="link.path">
              <router-link
                :to="link.path"
                class="text-gray-600 hover:text-purple-600 transition-colors"
              >
                {{ link.name }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Contact + CTA -->
        <div>
          <h3 class="font-semibold text-gray-900 mb-4">Get in touch</h3>
          <ul class="space-y-2 mb-6">
            <li>
              <a
                :href="`mailto:${CONTACT.email}`"
                class="text-gray-600 hover:text-blue-600 transition-colors break-all"
              >
                {{ CONTACT.email }}
              </a>
            </li>
            <li>
              <a
                :href="CONTACT.telegram"
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Telegram
              </a>
            </li>
            <li>
              <a
                :href="CONTACT.signal"
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Signal
              </a>
            </li>
            <li>
              <a
                :href="PORTFOLIO_URL"
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-600 hover:text-blue-600 transition-colors"
              >
                vatsalmehra.com
              </a>
            </li>
          </ul>
          <a
            :href="CAL_INTRO_URL"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all"
          >
            Book a free intro call
          </a>
        </div>
      </div>

      <div
        class="mt-12 pt-6 border-t border-gray-200/80 flex flex-col sm:flex-row justify-between gap-2 text-sm text-gray-500"
      >
        <p>© {{ year }} Rational Resilience</p>
        <p>
          Coaching, not therapy or medical care.
          <a
            :href="`mailto:${CONTACT.email}`"
            class="hover:text-purple-600 transition-colors underline underline-offset-2"
            >Ask me anything before you book.</a
          >
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { CONTACT, CAL_INTRO_URL, PORTFOLIO_URL } from "@/config/site";

const year = new Date().getFullYear();

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Sessions & pricing", path: "/sessions" },
  { name: "Contact", path: "/contact" },
];
</script>
