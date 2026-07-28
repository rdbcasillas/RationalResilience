<template>
  <div class="min-h-screen flex flex-col bg-gradient-to-br from-amber-50 via-white to-blue-50">
    <NavigationMenu />
    <main class="flex-1">
      <router-view></router-view>
    </main>
    <SiteFooter />
  </div>
</template>

<script setup>
import NavigationMenu from "./components/NavigationMenu.vue";
import SiteFooter from "./components/SiteFooter.vue";
</script>
