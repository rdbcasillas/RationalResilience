<!-- components/NavigationMenu.vue -->
<template>
  <nav aria-label="Main" class="border-b border-line">
    <div class="max-w-6xl mx-auto px-6 md:px-14">
      <div class="flex justify-between items-center py-4">
        <router-link to="/" class="flex items-center gap-2">
          <img
            src="@/assets/images/ratreslogo2.png"
            alt=""
            class="w-9 h-9"
          />
          <span class="font-medium text-[1.45rem] whitespace-nowrap"
            >Rational Resilience</span
          >
        </router-link>

        <!-- Desktop -->
        <div class="hidden md:flex items-center gap-7">
          <router-link
            v-for="item in navigationItems"
            :key="item.path"
            :to="item.path"
            class="text-[18px] text-muted hover:text-ink transition-colors"
            :class="{ 'text-ink font-medium': isCurrent(item.path) }"
            :aria-current="isCurrent(item.path) ? 'page' : undefined"
          >
            {{ item.name }}
          </router-link>
          <a
            :href="CAL_INTRO_URL"
            target="_blank"
            rel="noopener noreferrer"
            class="text-[18px] font-medium text-accent hover:text-accent-dark whitespace-nowrap"
          >
            Free intro call
          </a>
        </div>

        <!-- Mobile menu button -->
        <button
          type="button"
          class="md:hidden p-2 -mr-2 text-ink"
          :aria-label="isOpen ? 'Close navigation' : 'Open navigation'"
          :aria-expanded="isOpen"
          aria-controls="mobile-menu"
          @click="isOpen = !isOpen"
        >
          <Menu v-if="!isOpen" class="h-6 w-6" aria-hidden="true" />
          <X v-else class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      <!-- Mobile -->
      <div v-show="isOpen" id="mobile-menu" class="md:hidden pb-5">
        <ul class="space-y-1">
          <li v-for="item in navigationItems" :key="item.path">
            <router-link
              :to="item.path"
              class="block py-3 text-lg text-muted"
              :class="{ 'text-ink font-medium': isCurrent(item.path) }"
              :aria-current="isCurrent(item.path) ? 'page' : undefined"
            >
              {{ item.name }}
            </router-link>
          </li>
          <li>
            <a
              :href="CAL_INTRO_URL"
              target="_blank"
              rel="noopener noreferrer"
              class="block py-3 text-lg font-medium text-accent"
            >
              Free intro call
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { Menu, X } from "lucide-vue-next";
import { CAL_INTRO_URL } from "@/config/site";

const route = useRoute();
const isOpen = ref(false);

// Home is the logo.
const navigationItems = [
  { name: "Coaching", path: "/sessions" },
  { name: "Workshops", path: "/workshops" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const isCurrent = (path) => route.path === path;

// Close the menu on navigation and on Escape.
watch(() => route.path, () => (isOpen.value = false));
const onKeydown = (e) => {
  if (e.key === "Escape") isOpen.value = false;
};
onMounted(() => window.addEventListener("keydown", onKeydown));
onBeforeUnmount(() => window.removeEventListener("keydown", onKeydown));
</script>
