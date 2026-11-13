<!-- components/SiteFooter.vue -->
<template>
  <footer class="mt-24 border-t border-line">
    <div class="max-w-6xl mx-auto px-6 md:px-14 py-12">
      <div class="grid gap-10 sm:grid-cols-3">
        <div>
          <p class="font-medium text-xl mb-2">Rational Resilience</p>
          <p class="text-muted text-[17px]">
            Coaching and rationality workshops with Vatsal Mehra. Online,
            worldwide.
          </p>
        </div>

        <nav aria-label="Footer">
          <ul class="space-y-2 text-[17px]">
            <li v-for="link in links" :key="link.path">
              <router-link :to="link.path" class="text-muted hover:text-ink">
                {{ link.name }}
              </router-link>
            </li>
          </ul>
        </nav>

        <ul class="space-y-2 text-[17px]">
          <li>
            <a :href="`mailto:${CONTACT.email}`" class="link break-all">{{
              CONTACT.email
            }}</a>
          </li>
          <li>
            <a
              :href="CAL_INTRO_URL"
              target="_blank"
              rel="noopener noreferrer"
              class="link"
              >Book a free intro call</a
            >
          </li>
          <li>
            <a
              :href="PORTFOLIO_URL"
              target="_blank"
              rel="noopener noreferrer"
              class="text-muted hover:text-ink"
              >vatsalmehra.com</a
            >
          </li>
        </ul>
      </div>

      <p class="mt-10 pt-6 border-t border-line text-base text-muted">
        © {{ year }} Rational Resilience. Coaching is not therapy or medical
        care.
      </p>
    </div>
  </footer>
</template>

<script setup>
import { CONTACT, CAL_INTRO_URL, PORTFOLIO_URL } from "@/config/site";

const year = new Date().getFullYear();

const links = [
  { name: "Home", path: "/" },
  { name: "Coaching", path: "/sessions" },
  { name: "Workshops", path: "/workshops" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];
</script>
