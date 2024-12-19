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
    <div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
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
              <span>90-minute deep dive</span>
            </li>
            <li class="flex items-center">
              <CheckCircle class="w-5 h-5 text-green-500 mr-2" />
              <span>Discuss your goals and challenges</span>
            </li>
            <li class="flex items-center">
              <CheckCircle class="w-5 h-5 text-green-500 mr-2" />
              <span>Identify your strengths and resources</span>
            </li>

            <li class="flex items-center">
              <CheckCircle class="w-5 h-5 text-green-500 mr-2" />
              <span>Develop an action plan</span>
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
              <span>4 sessions per month</span>
            </li>
            <li class="flex items-center">
              <CheckCircle class="w-5 h-5 text-green-500 mr-2" />
              <span>Personalized roadmap for growth</span>
            </li>
            <li class="flex items-center">
              <CheckCircle class="w-5 h-5 text-green-500 mr-2" />
              <span>Ongoing support and accountability</span>
            </li>
            <li class="flex items-center">
              <CheckCircle class="w-5 h-5 text-green-500 mr-2" />
              <span>Progress Tracking to update ineffective solutions</span>
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

      <!-- Custom Package -->
      <div class="bg-white rounded-xl shadow-lg overflow-hidden">
        <div class="p-8">
          <h3 class="font-bold text-xl mb-4">Custom Package</h3>
          <div class="mb-2">
            <span class="text-xl">Let's design together</span>
          </div>
          <p class="text-gray-600 mb-6">
            Flexible support tailored to your specific needs and schedule.
          </p>
          <ul class="space-y-3 mb-8">
            <li class="flex items-center">
              <CheckCircle class="w-5 h-5 text-green-500 mr-2" />
              <span>Flexible session frequency</span>
            </li>
            <li class="flex items-center">
              <CheckCircle class="w-5 h-5 text-green-500 mr-2" />
              <span>Customized focus areas</span>
            </li>
            <li class="flex items-center">
              <CheckCircle class="w-5 h-5 text-green-500 mr-2" />
              <span>Adjustable support level</span>
            </li>
            <li class="flex items-center">
              <CheckCircle class="w-5 h-5 text-green-500 mr-2" />
              <span>Commitment flexibility</span>
            </li>
          </ul>
        </div>
        <div class="p-6 bg-gray-50">
          <button
            class="w-full border-2 border-blue-600 text-blue-600 rounded-lg py-3 px-4 hover:bg-blue-50 transition"
          >
            Let's Talk
          </button>
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
