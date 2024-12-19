<!-- views/ContactPage.vue -->
<template>
  <div class="pt-16 pb-16">
    <div class="max-w-5xl mx-auto px-6">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class="rounded-xl overflow-hidden shadow-lg">
          <img
            src="@/assets/images/contactme.png"
            alt="Contact"
            class="w-full h-full object-cover"
          />
        </div>

        <div class="text-center md:text-left">
          <h1 class="text-4xl font-bold mb-8">Get in Touch</h1>

          <p class="text-gray-600 mb-8">
            Questions about working together? Feel free to reach out through any
            of these channels:
          </p>

          <div class="space-y-4">
            <div
              class="flex items-center md:justify-start justify-center space-x-2"
            >
              <Mail class="w-5 h-5 text-blue-600" />
              <a
                href="mailto:your.email@example.com"
                class="text-blue-600 hover:text-blue-800 hover:underline"
              >
                mehra.vatsal@gmail.com
              </a>
            </div>

            <div
              class="flex items-center md:justify-start justify-center space-x-2"
            >
              <Send class="w-5 h-5 text-blue-600" />
              <a
                href="https://t.me/zerotimer"
                target="_blank"
                rel="noopener noreferrer"
                class="text-blue-600 hover:text-blue-800 hover:underline"
              >
                Telegram
              </a>
            </div>

            <div
              class="flex items-center md:justify-start justify-center space-x-2"
            >
              <MessageSquare class="w-5 h-5 text-blue-600" />
              <!-- Signal icon -->
              <a
                href="https://signal.me/#eu/LcnHg1Pc4iibfEwutJo9u3ZiBCZC0Kng9bGGHkWj6p9eVepYygBI7o8yL0q2i53D"
                class="text-blue-600 hover:text-blue-800 hover:underline"
              >
                Signal
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Mail, MessageSquare, Send } from "lucide-vue-next";
</script>
