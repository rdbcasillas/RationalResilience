<!-- components/PageIntro.vue -->
<!-- The top of a page: its title and opening lines on a pale panel that starts
     at the page column and runs off the right of the screen. -->
<template>
  <header class="relative overflow-x-clip mb-14 md:mb-16">
    <div class="page relative pt-14 sm:pt-20 pb-14 md:pb-16">
      <div
        aria-hidden="true"
        class="absolute top-8 bottom-0 left-0 -right-[50vw] bg-panel/60 -z-[5]"
      ></div>
      <slot />
    </div>
  </header>
</template>
