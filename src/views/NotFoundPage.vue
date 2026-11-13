<!-- views/NotFoundPage.vue -->
<template>
  <div class="page pt-16 md:pt-24">
    <h1 class="page-title">That page doesn't exist</h1>
    <p class="lead mb-8">
      The link may be old or mistyped. These are the pages that do exist:
    </p>
    <ul class="space-y-2 mb-10">
      <li><router-link to="/" class="link">Home</router-link></li>
      <li><router-link to="/sessions" class="link">Coaching</router-link></li>
      <li><router-link to="/workshops" class="link">Workshops</router-link></li>
      <li><router-link to="/about" class="link">About</router-link></li>
      <li><router-link to="/contact" class="link">Contact</router-link></li>
    </ul>
  </div>
</template>
