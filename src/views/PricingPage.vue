<!-- PricingPage.vue -->
<template>
  <div class="py-20 px-6">
    <!-- Header Section -->
    <div class="text-center max-w-2xl mx-auto mb-16">
      <h2 class="text-3xl font-bold mb-6">Choose Your Journey</h2>
      <p class="text-gray-600 text-justify">
        Whether you're looking for ongoing long term support or focused
        problem-solving in a single session, I can help you choose an option
        that works best for you. I recommend starting with a free session to
        ensure we're a good fit. You can do that
        <a
          target="_blank"
          class="text-blue-600 hover:text-blue-800 transition-colors duration-200 underline-offset-2 hover:underline"
          href="https://cal.com/vatsal-mehra-tblt4g/30min"
          >here</a
        >.
      </p>
    </div>

    <!-- Session Types -->
    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
      <!-- Single Session -->
      <div class="bg-white rounded-xl shadow-lg overflow-hidden">
        <div class="p-8">
          <h3 class="font-bold text-xl mb-4">Single Session</h3>
          <div class="flex justify-between items-baseline mb-4">
            <div>
              <span class="text-2xl font-bold">₹1,000</span>
              <span class="text-gray-500">/session</span>
            </div>
            <div class="text-sm text-gray-500">($12 USD)</div>
          </div>
          <p class="text-gray-600 mb-6">
            Perfect for focused problem-solving or exploring if we're a good fit
            for longer work.
          </p>
          <ul class="space-y-3 mb-8">
            <li class="flex items-center">
              <CheckCircle class="w-5 h-5 text-green-500 mr-2" />
              <span>90-minute in-depth exploration of your situation</span>
            </li>
            <li class="flex items-center">
              <CheckCircle class="w-5 h-5 text-green-500 mr-2" />
              <span>Tools and frameworks to see things with more clarity</span>
            </li>
            <li class="flex items-center">
              <CheckCircle class="w-5 h-5 text-green-500 mr-2" />
              <span>Identify blocks and opportunities</span>
            </li>

            <li class="flex items-center">
              <CheckCircle class="w-5 h-5 text-green-500 mr-2" />
              <span>Clear next steps to move forward</span>
            </li>
          </ul>
        </div>
        <div class="p-6 bg-gray-50">
          <router-link
            to="/book-session"
            class="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition"
          >
            Book Single Session
          </router-link>
        </div>
      </div>

      <!-- Monthly Package -->
      <div class="bg-white rounded-xl shadow-lg overflow-hidden relative">
        <div class="p-8">
          <h3 class="font-bold text-xl mb-4">Monthly Journey</h3>
          <div class="flex justify-between items-baseline mb-4">
            <div>
              <span class="text-2xl font-bold">₹4000</span>
              <span class="text-gray-500">/month</span>
            </div>
            <div class="text-sm text-gray-500">($48 USD)</div>
          </div>
          <p class="text-gray-600 mb-6">
            Weekly calls that build on each other. Best for deeper exploration
            and sustained growth.
          </p>
          <ul class="space-y-3 mb-8">
            <li class="flex items-center">
              <CheckCircle class="w-5 h-5 text-green-500 mr-2" />
              <span>Weekly 90-minute sessions to maintain momentum</span>
            </li>
            <li class="flex items-center">
              <CheckCircle class="w-5 h-5 text-green-500 mr-2" />
              <span>Custom growth plan that evolves with your progress</span>
            </li>
            <li class="flex items-center">
              <CheckCircle class="w-5 h-5 text-green-500 mr-2" />
              <span>Regular check-ins and support between sessions</span>
            </li>
            <li class="flex items-center">
              <CheckCircle class="w-5 h-5 text-green-500 mr-2" />
              <span>Ongoing refinement of strategies based on what works</span>
            </li>
          </ul>
        </div>
        <div class="p-6 bg-gray-50">
          <router-link
            to="/book-monthly"
            class="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition"
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
