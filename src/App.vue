<template>
  <div class="min-h-screen flex flex-col relative isolate">
    <BackgroundArt />
    <a
      href="#main"
      class="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:bg-white focus:px-4 focus:py-2 focus:rounded-md focus:border focus:border-line"
    >
      Skip to content
    </a>
    <NavigationMenu />
    <main id="main" class="flex-1">
      <router-view></router-view>
    </main>
    <SiteFooter />
  </div>
</template>

<script setup>
import BackgroundArt from "./components/BackgroundArt.vue";
import NavigationMenu from "./components/NavigationMenu.vue";
import SiteFooter from "./components/SiteFooter.vue";

</script>
