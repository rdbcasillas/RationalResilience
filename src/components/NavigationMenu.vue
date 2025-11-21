<!-- components/NavigationMenu.vue -->
<template>
  <nav class="bg-white/95 backdrop-blur-sm fixed w-full z-50 top-0 border-b border-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="flex justify-between items-center py-3">
        <!-- Logo and Brand Name -->
        <div class="flex items-center">
          <router-link to="/" class="flex items-center group">
            <img
              src="@/assets/images/ratreslogo2.png"
              alt="Rational Resilience Logo"
              class="w-12 h-12 group-hover:rotate-6 transition-transform duration-300"
            />
            <span class="handwritten-alt text-2xl text-gray-800 ml-1">
              Rational <span class="handwritten-text text-purple-600">Resilience</span>
            </span>
          </router-link>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-2">
          <router-link
            v-for="item in navigationItems"
            :key="item.path"
            :to="item.path"
            class="nav-link text-gray-600 hover:text-purple-600 transition-all px-4 py-2 text-sm font-medium relative group"
            :class="{ 'text-purple-600': isCurrentRoute(item.path) }"
          >
            {{ item.name }}
            <!-- Hand-drawn underline on hover/active -->
            <svg
              class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-12 h-2 opacity-0 group-hover:opacity-100 transition-opacity"
              :class="{ 'opacity-100': isCurrentRoute(item.path) }"
              viewBox="0 0 50 8"
              fill="none"
            >
              <path d="M2 5 Q 12 3, 25 5 T 48 4" stroke="#8B5CF6" stroke-width="2" fill="none" stroke-linecap="round"/>
            </svg>
          </router-link>
          <router-link
            to="/sessions"
            class="ml-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            Book Session
          </router-link>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            @click="isOpen = !isOpen"
            class="text-gray-600 hover:text-purple-600 focus:outline-none p-2 rounded-full hover:bg-purple-50 transition-colors"
          >
            <Menu v-if="!isOpen" class="h-6 w-6" />
            <X v-else class="h-6 w-6" />
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div v-if="isOpen" class="md:hidden pb-4">
        <div class="space-y-2">
          <router-link
            v-for="item in navigationItems"
            :key="item.path"
            :to="item.path"
            class="block px-4 py-3 text-base font-medium text-gray-600 hover:text-purple-600 hover:bg-purple-50/50 transition-all rounded-xl"
            :class="{ 'text-purple-600 bg-purple-50/50': isCurrentRoute(item.path) }"
            @click="isOpen = false"
          >
            {{ item.name }}
          </router-link>
          <div class="pt-3 px-2">
            <router-link
              to="/sessions"
              class="block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-full font-medium hover:shadow-lg transition-all"
              @click="isOpen = false"
            >
              Book Session
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <!-- Spacer to prevent content from hiding under fixed nav -->
  <div class="h-16"></div>
</template>

<script setup>
console.log("NavigationMenu component loaded");
import { ref } from "vue";
import { useRoute } from "vue-router";
import { Brain, Menu, X } from "lucide-vue-next";

const route = useRoute();
const isOpen = ref(false);

const navigationItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  //{ name: "Services", path: "/services" },
  //{ name: "Testimonials", path: "/testimonials" },
  //{ name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const isCurrentRoute = (path) => {
  return route.path === path;
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Kalam:wght@400;700&display=swap');

.handwritten-text {
  font-family: 'Caveat', cursive;
  font-weight: 700;
}

.handwritten-alt {
  font-family: 'Kalam', cursive;
  font-weight: 700;
}
</style>
