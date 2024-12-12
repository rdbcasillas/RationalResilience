<template>
  <div class="app-wrapper">
    <NavigationMenu />
    <div class="bg-gradient-to-br from-gray-50 to-blue-50 relative min-h-screen">
    <!-- Geometric pattern overlay -->
    <div class="absolute inset-0 opacity-[0.15]" 

    </div>
    <!-- Content -->
    <div class="relative mt-6">
      <router-view></router-view>
    </div>
  </div>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavigationMenu from "./components/NavigationMenu.vue";
</script>

<style>
</style>
