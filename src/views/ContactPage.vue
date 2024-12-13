<!-- views/ContactPage.vue -->
<template>
  <div class="pt-16 pb-16">
    <div class="max-w-4xl mx-auto px-6">
      <div class="mb-12 rounded-xl overflow-hidden shadow-lg">
        <img
          src="@/assets/images/contactme.png"
          alt="Contact"
          class="w-full h-auto object-cover"
        />
      </div>

      <div class="text-center max-w-2xl mx-auto">
        <h1 class="text-4xl font-bold mb-8">Get in Touch</h1>

        <p class="text-gray-600 mb-8">
          Questions about working together? Feel free to reach out through any
          of these channels:
        </p>

        <div class="space-y-4">
          <div class="flex items-center justify-center space-x-2">
            <Mail class="w-5 h-5 text-blue-600" />
            <a
              href="mailto:your.email@example.com"
              class="text-blue-600 hover:text-blue-800 hover:underline"
            >
              your.email@example.com
            </a>
          </div>

          <!-- <div class="flex items-center justify-center space-x-2">
              <Twitter class="w-5 h-5 text-blue-600" />
              <a 
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                class="text-blue-600 hover:text-blue-800 hover:underline"
              >
                @yourusername
              </a>
            </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Mail, Twitter, LinkedinIcon } from "lucide-vue-next";
</script>
