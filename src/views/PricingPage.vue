<!-- PricingPage.vue -->
<template>
  <div class="py-20 px-6 bg-gradient-to-br from-amber-50 via-white to-blue-50 relative overflow-hidden min-h-screen">
    <!-- Organic background blobs -->
    <svg class="absolute top-10 right-20 w-96 h-96 opacity-20" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path fill="#93C5FD" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.8C64.8,56.4,53.8,69,39.8,76.8C25.8,84.6,8.8,87.6,-7.5,85.1C-23.8,82.6,-39.4,74.6,-53.2,64.2C-67,53.8,-79,41,-85.8,25.8C-92.6,10.6,-94.2,-7,-88.9,-21.8C-83.6,-36.6,-71.4,-48.6,-57.8,-55.9C-44.2,-63.2,-29.2,-65.8,-14.7,-67.3C-0.2,-68.8,13.8,-69.2,27.1,-66.1C40.4,-63,53,-56.4,44.7,-76.4Z" transform="translate(100 100)" />
    </svg>
    <svg class="absolute bottom-20 left-10 w-80 h-80 opacity-15" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path fill="#C4B5FD" d="M39.5,-65.6C51.4,-58.1,61.3,-47.5,68.5,-35.1C75.7,-22.7,80.2,-8.5,79.8,5.5C79.4,19.5,74.1,33.3,65.6,44.8C57.1,56.3,45.4,65.5,32.2,71.3C19,77.1,4.3,79.5,-10.2,77.9C-24.7,76.3,-39,70.7,-51.8,62.2C-64.6,53.7,-75.9,42.3,-82.4,28.2C-88.9,14.1,-90.6,-2.7,-86.5,-17.9C-82.4,-33.1,-72.5,-46.7,-59.8,-53.9C-47.1,-61.1,-31.6,-61.9,-17.6,-64.3C-3.6,-66.7,8.9,-70.7,39.5,-65.6Z" transform="translate(100 100)" />
    </svg>

    <!-- Header Section -->
    <div class="text-center max-w-2xl mx-auto mb-16 relative z-10">
      <h2 class="text-4xl font-bold mb-4 handwritten-alt inline-block transform -rotate-1">Choose Your Journey</h2>
      <!-- Hand-drawn underline -->
      <svg class="mx-auto mb-6" width="220" height="15" viewBox="0 0 220 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 10 Q 55 5, 110 8 T 215 7" stroke="#8B5CF6" stroke-width="3" fill="none" stroke-linecap="round"/>
      </svg>
      <p class="text-gray-600 text-justify text-lg">
        Whether you're looking for ongoing long term support or focused
        problem-solving in a single session, I can help you choose an option
        that works best for you. I recommend starting with a free session to
        ensure we're a good fit. You can do that
        <a
          target="_blank"
          class="text-blue-600 hover:text-blue-800 transition-colors duration-200 underline-offset-2 hover:underline font-medium"
          href="https://cal.com/vatsal-mehra-tblt4g/30min"
          >here</a
        >.
      </p>
    </div>

    <!-- Session Types -->
    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 relative z-10">
      <!-- Single Session -->
      <div class="bg-white/95 shadow-xl overflow-hidden transform -rotate-1 hover:rotate-0 transition-all duration-300 relative"
           style="clip-path: polygon(0 3%, 2% 0, 5% 2%, 8% 0, 12% 3%, 15% 1%, 18% 2%, 22% 0, 25% 2%, 28% 1%, 32% 3%, 35% 0, 38% 2%, 42% 1%, 45% 3%, 48% 0, 52% 2%, 55% 1%, 58% 3%, 62% 0, 65% 2%, 68% 1%, 72% 3%, 75% 0, 78% 2%, 82% 1%, 85% 3%, 88% 0, 92% 2%, 95% 1%, 98% 3%, 100% 0, 100% 100%, 0 100%)">
        <div class="p-8 pt-10">
          <h3 class="font-bold text-2xl mb-2 handwritten-text text-blue-600">Single Session</h3>
          <!-- Hand-drawn underline -->
          <svg class="mb-4" width="140" height="10" viewBox="0 0 140 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 6 Q 35 4, 70 6 T 135 5" stroke="#3B82F6" stroke-width="2" fill="none" stroke-linecap="round"/>
          </svg>
          <div class="flex justify-between items-baseline mb-4">
            <div>
              <span class="text-3xl font-bold">₹1,000</span>
              <span class="text-gray-500">/session</span>
            </div>
            <div class="text-sm text-gray-500">($12 USD)</div>
          </div>
          <p class="text-gray-600 mb-6 text-lg">
            Perfect for focused problem-solving or exploring if we're a good fit
            for longer work.
          </p>
          <ul class="space-y-3 mb-8">
            <li class="flex items-start">
              <CheckCircle class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span>90-minute in-depth exploration of your situation</span>
            </li>
            <li class="flex items-start">
              <CheckCircle class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span>Tools and frameworks to see things with more clarity</span>
            </li>
            <li class="flex items-start">
              <CheckCircle class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span>Identify blocks and opportunities</span>
            </li>
            <li class="flex items-start">
              <CheckCircle class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span>Clear next steps to move forward</span>
            </li>
          </ul>
        </div>
        <div class="p-6 bg-blue-50/50 border-t-2 border-blue-200">
          <router-link
            to="/book-session"
            class="block text-center bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg"
          >
            Book Single Session
          </router-link>
        </div>
      </div>

      <!-- Monthly Package -->
      <div class="bg-white/95 shadow-xl overflow-hidden relative transform rotate-1 hover:rotate-0 transition-all duration-300"
           style="clip-path: polygon(0 2%, 3% 0, 6% 3%, 10% 1%, 13% 2%, 17% 0, 20% 3%, 24% 1%, 27% 2%, 31% 0, 34% 3%, 38% 1%, 41% 2%, 45% 0, 48% 3%, 52% 1%, 55% 2%, 59% 0, 62% 3%, 66% 1%, 69% 2%, 73% 0, 76% 3%, 80% 1%, 83% 2%, 87% 0, 90% 3%, 94% 1%, 97% 2%, 100% 0, 100% 100%, 0 100%)">
        <div class="p-8 pt-10">
          <h3 class="font-bold text-2xl mb-2 handwritten-text text-purple-600">Monthly Journey</h3>
          <!-- Hand-drawn underline -->
          <svg class="mb-4" width="160" height="10" viewBox="0 0 160 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 6 Q 40 4, 80 6 T 155 5" stroke="#8B5CF6" stroke-width="2" fill="none" stroke-linecap="round"/>
          </svg>
          <div class="flex justify-between items-baseline mb-4">
            <div>
              <span class="text-3xl font-bold">₹4000</span>
              <span class="text-gray-500">/month</span>
            </div>
            <div class="text-sm text-gray-500">($48 USD)</div>
          </div>
          <p class="text-gray-600 mb-6 text-lg">
            Weekly calls that build on each other. Best for deeper exploration
            and sustained growth.
          </p>
          <ul class="space-y-3 mb-8">
            <li class="flex items-start">
              <CheckCircle class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span>Weekly 90-minute sessions to maintain momentum</span>
            </li>
            <li class="flex items-start">
              <CheckCircle class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span>Custom growth plan that evolves with your progress</span>
            </li>
            <li class="flex items-start">
              <CheckCircle class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span>Regular check-ins and support between sessions</span>
            </li>
            <li class="flex items-start">
              <CheckCircle class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span>Ongoing refinement of strategies based on what works</span>
            </li>
          </ul>
        </div>
        <div class="p-6 bg-purple-50/50 border-t-2 border-purple-200">
          <router-link
            to="/book-monthly"
            class="block text-center bg-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-purple-700 transition-colors shadow-lg"
          >
            Start Monthly Journey
          </router-link>
        </div>
      </div>
    </div>

    <!-- Payment Options -->
    <!-- <div class="max-w-2xl mx-auto mt-16 text-center">
      <h3 class="font-semibold mb-6">Flexible Payment Options</h3>
      <div class="grid grid-cols-2 gap-8">
        <div>
          <h4 class="font-medium mb-4">India</h4>
          <div class="space-y-2 text-gray-600">
            <p>UPI</p>
            <p>Bank Transfer</p>
            <p>Razorpay</p>
          </div>
        </div>
        <div>
          <h4 class="font-medium mb-4">International</h4>
          <div class="space-y-2 text-gray-600">
            <p>PayPal</p>
            <p>Wise Transfer</p>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script setup>
import { CheckCircle } from "lucide-vue-next";
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
