<!-- views/ContactPage.vue -->
<template>
  <div class="pt-16 pb-16 min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 relative overflow-hidden">
    <!-- Organic background blobs -->
    <svg class="absolute top-20 right-10 w-96 h-96 opacity-20" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path fill="#C4B5FD" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.8C64.8,56.4,53.8,69,39.8,76.8C25.8,84.6,8.8,87.6,-7.5,85.1C-23.8,82.6,-39.4,74.6,-53.2,64.2C-67,53.8,-79,41,-85.8,25.8C-92.6,10.6,-94.2,-7,-88.9,-21.8C-83.6,-36.6,-71.4,-48.6,-57.8,-55.9C-44.2,-63.2,-29.2,-65.8,-14.7,-67.3C-0.2,-68.8,13.8,-69.2,27.1,-66.1C40.4,-63,53,-56.4,44.7,-76.4Z" transform="translate(100 100)" />
    </svg>
    <svg class="absolute bottom-20 left-10 w-80 h-80 opacity-15" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path fill="#93C5FD" d="M39.5,-65.6C51.4,-58.1,61.3,-47.5,68.5,-35.1C75.7,-22.7,80.2,-8.5,79.8,5.5C79.4,19.5,74.1,33.3,65.6,44.8C57.1,56.3,45.4,65.5,32.2,71.3C19,77.1,4.3,79.5,-10.2,77.9C-24.7,76.3,-39,70.7,-51.8,62.2C-64.6,53.7,-75.9,42.3,-82.4,28.2C-88.9,14.1,-90.6,-2.7,-86.5,-17.9C-82.4,-33.1,-72.5,-46.7,-59.8,-53.9C-47.1,-61.1,-31.6,-61.9,-17.6,-64.3C-3.6,-66.7,8.9,-70.7,39.5,-65.6Z" transform="translate(100 100)" />
    </svg>

    <div class="max-w-5xl mx-auto px-6 relative z-10">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Image with torn paper effect -->
        <div class="overflow-hidden shadow-2xl border-4 border-purple-200 hover:scale-105 transition-transform duration-300 transform rotate-2"
             style="clip-path: polygon(0 5%, 3% 2%, 7% 4%, 10% 1%, 15% 3%, 18% 1%, 22% 4%, 25% 2%, 30% 5%, 35% 2%, 40% 4%, 45% 1%, 50% 3%, 55% 1%, 60% 4%, 65% 2%, 70% 5%, 75% 2%, 80% 4%, 85% 1%, 90% 3%, 95% 1%, 100% 4%, 100% 95%, 97% 98%, 93% 96%, 88% 99%, 85% 97%, 80% 96%, 75% 98%, 70% 95%, 65% 98%, 60% 96%, 55% 99%, 50% 97%, 45% 96%, 40% 99%, 35% 97%, 30% 95%, 25% 98%, 20% 96%, 15% 99%, 10% 97%, 5% 95%, 0 98%)">
          <img
            src="@/assets/images/contactme.png"
            alt="Contact"
            class="w-full h-full object-cover"
          />
        </div>

        <div class="text-center md:text-left">
          <h1 class="text-5xl font-bold mb-2 text-gray-900">
            <span class="handwritten-alt inline-block transform -rotate-1">Get in</span>
            <span class="text-purple-600 handwritten-text inline-block transform rotate-2">Touch</span>
          </h1>
          <!-- Hand-drawn underline -->
          <svg class="mb-8 md:mx-0 mx-auto" width="180" height="15" viewBox="0 0 180 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 10 Q 45 5, 90 8 T 175 7" stroke="#8B5CF6" stroke-width="3" fill="none" stroke-linecap="round"/>
          </svg>

          <p class="text-xl text-gray-700 mb-10 leading-relaxed">
            Questions about working together? Feel free to reach out through any
            of these channels:
          </p>

          <div class="space-y-5">
            <a
              href="mailto:mehra.vatsal@gmail.com"
              class="group flex items-center md:justify-start justify-center space-x-3 bg-white/80 backdrop-blur-sm p-5 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-rotate-1"
              style="clip-path: polygon(0 10%, 2% 0, 5% 8%, 8% 2%, 12% 10%, 15% 0, 18% 8%, 22% 2%, 25% 10%, 28% 0, 32% 8%, 35% 2%, 38% 10%, 42% 0, 45% 8%, 48% 2%, 52% 10%, 55% 0, 58% 8%, 62% 2%, 65% 10%, 68% 0, 72% 8%, 75% 2%, 78% 10%, 82% 0, 85% 8%, 88% 2%, 92% 10%, 95% 0, 98% 8%, 100% 2%, 100% 100%, 0 100%)"
            >
              <Mail class="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" />
              <span class="text-gray-900 font-medium group-hover:text-blue-600">
                mehra.vatsal@gmail.com
              </span>
            </a>

            <a
              href="https://t.me/zerotimer"
              target="_blank"
              rel="noopener noreferrer"
              class="group flex items-center md:justify-start justify-center space-x-3 bg-white/80 backdrop-blur-sm p-5 shadow-md hover:shadow-xl transition-all duration-300 transform hover:rotate-1"
              style="clip-path: polygon(0 8%, 3% 0, 6% 10%, 10% 2%, 13% 8%, 17% 0, 20% 10%, 24% 2%, 27% 8%, 31% 0, 34% 10%, 38% 2%, 41% 8%, 45% 0, 48% 10%, 52% 2%, 55% 8%, 59% 0, 62% 10%, 66% 2%, 69% 8%, 73% 0, 76% 10%, 80% 2%, 83% 8%, 87% 0, 90% 10%, 94% 2%, 97% 8%, 100% 0, 100% 100%, 0 100%)"
            >
              <Send class="w-6 h-6 text-purple-600 group-hover:scale-110 transition-transform" />
              <span class="text-gray-900 font-medium group-hover:text-purple-600">
                Telegram
              </span>
            </a>

            <a
              href="https://signal.me/#eu/LcnHg1Pc4iibfEwutJo9u3ZiBCZC0Kng9bGGHkWj6p9eVepYygBI7o8yL0q2i53D"
              target="_blank"
              rel="noopener noreferrer"
              class="group flex items-center md:justify-start justify-center space-x-3 bg-white/80 backdrop-blur-sm p-5 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-rotate-1"
              style="clip-path: polygon(0 6%, 4% 0, 7% 8%, 11% 2%, 14% 6%, 18% 0, 21% 8%, 25% 2%, 28% 6%, 32% 0, 35% 8%, 39% 2%, 42% 6%, 46% 0, 49% 8%, 53% 2%, 56% 6%, 60% 0, 63% 8%, 67% 2%, 70% 6%, 74% 0, 77% 8%, 81% 2%, 84% 6%, 88% 0, 91% 8%, 95% 2%, 98% 6%, 100% 0, 100% 100%, 0 100%)"
            >
              <MessageSquare class="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" />
              <span class="text-gray-900 font-medium group-hover:text-blue-600">
                Signal
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Mail, MessageSquare, Send } from "lucide-vue-next";
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Kalam:wght@400;700&display=swap');

.handwritten-text {
  font-family: 'Caveat', cursive;
  font-weight: 700;
  letter-spacing: 0.5px;
}

.handwritten-alt {
  font-family: 'Kalam', cursive;
  font-weight: 700;
  letter-spacing: 0.5px;
}
</style>
