<!-- components/NavigationMenu.vue -->
<template>
  <nav class="bg-white fixed shadow-sm w-full z-50 top-0">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="flex justify-between items-center py-4">
        <!-- Logo and Brand Name -->
        <div class="flex items-center">
          <router-link to="/" class="flex items-center">
            <img
              src="@/assets/images/ratreslogo2.png"
              alt="Rational Resilience Logo"
              class="w-14 h-14"
            />
            <span
              class="font-bold text-xl bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 text-transparent bg-clip-text"
            >
              Rational Resilience
            </span>
          </router-link>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link
            v-for="item in navigationItems"
            :key="item.path"
            :to="item.path"
            class="text-gray-600 hover:text-blue-600 transition-colors px-3 py-2 rounded-md text-sm font-medium"
            :class="{ 'text-blue-600': isCurrentRoute(item.path) }"
          >
            {{ item.name }}
          </router-link>
          <router-link
            to="/sessions"
            class="group bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1"
          >
            Book Session
          </router-link>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            @click="isOpen = !isOpen"
            class="text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            <Menu v-if="!isOpen" class="h-6 w-6" />
            <X v-else class="h-6 w-6" />
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div v-if="isOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <router-link
            v-for="item in navigationItems"
            :key="item.path"
            :to="item.path"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
            :class="{ 'text-blue-600 bg-blue-50': isCurrentRoute(item.path) }"
            @click="isOpen = false"
          >
            {{ item.name }}
          </router-link>
          <router-link
            to="/sessions"
            class="group bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1"
          >
            Book Session
          </router-link>
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
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const isCurrentRoute = (path) => {
  return route.path === path;
};
</script>
