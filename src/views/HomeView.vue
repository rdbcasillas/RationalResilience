<!-- CoachingHome.vue -->
<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
    <!-- Hero Section with Geometric Background -->
    <header class="relative overflow-hidden py-20 bg-white">
      <div class="absolute inset-0 bg-blue-50 opacity-50">
        <div
          class="absolute transform rotate-45 -right-20 -top-20 w-64 h-64 bg-blue-100 rounded-3xl"
        ></div>
        <div
          class="absolute transform -rotate-12 -left-16 top-40 w-48 h-48 bg-blue-200 rounded-full opacity-50"
        ></div>
      </div>
      <div class="max-w-4xl mx-auto px-6 relative z-10">
        <div class="text-center">
          <h1
            class="text-3xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Think Deeply, Feel Fully & Navigate Wisely
          </h1>
          <p
            class="text-xl text-gray-500 mb-12 leading-relaxed max-w-2xl mx-auto"
          >
            Being rational doesn't mean ignoring your feelings and being
            resilient doesn't mean doing it alone.
          </p>
          <div class="flex justify-center gap-6">
            <a href="https://cal.com/vatsal-mehra-tblt4g/30min" target="_blank">
              <button
                class="group bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1"
              >
                Book a Free Session
                <ArrowRight
                  class="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                /></button
            ></a>
            <router-link
              to="/about"
              class="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-all duration-300 inline-block"
            >
              Learn More
            </router-link>
          </div>
        </div>
      </div>
    </header>

    <!-- Approach Section with Cards -->
    <!-- Approach Section with Cards -->
    <section class="py-20">
      <div class="max-w-5xl mx-auto px-6">
        <h2 class="text-4xl font-bold text-center mb-16 relative">
          My Approach
        </h2>
        <div class="grid md:grid-cols-3 gap-12">
          <div
            v-for="(approach, index) in approaches"
            :key="index"
            class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 overflow-hidden"
          >
            <!-- Image container with 16:9 aspect ratio -->
            <div class="aspect-video w-full">
              <img
                :src="approach.image"
                :alt="approach.title"
                class="w-full h-full object-cover"
              />
            </div>
            <!-- Content section -->
            <div class="p-8">
              <h3 class="font-semibold text-xl mb-4 text-center">
                {{ approach.title }}
              </h3>
              <p class="text-gray-600 text-center leading-relaxed text-justify">
                {{ approach.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials with Modern Cards -->
    <section class="py-20 bg-white">
      <div class="max-w-5xl mx-auto px-6">
        <h2 class="text-4xl font-bold text-center mb-16 relative">
          Client Experiences
        </h2>
        <div class="grid md:grid-cols-2 gap-12">
          <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl shadow-lg relative"
          >
            <div
              class="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 text-white flex items-center justify-center rounded-full"
            >
              <Quote class="w-4 h-4" />
            </div>
            <p class="text-gray-600 mb-6 leading-relaxed italic">
              {{ testimonial.text }}
            </p>
            <p class="font-medium text-right text-blue-600">
              {{ testimonial.author }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action with Gradient -->
    <section
      class="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white"
    >
      <div class="max-w-4xl mx-auto px-6 text-center">
        <h2 class="text-4xl font-bold mb-8">Ready to Start Your Journey?</h2>
        <p class="mb-12 text-xl opacity-90 max-w-2xl mx-auto">
          Let's have a conversation about your goals and how we can work
          together to achieve them.
        </p>
        <a
          href="https://cal.com/vatsal-mehra-tblt4g/30min"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-white text-blue-600 px-10 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 shadow-lg inline-block"
        >
          Schedule a Free Consultation
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Brain, Heart, Target, ArrowRight, Quote } from "lucide-vue-next";
import meditationSpace from "@/assets/images/meditation-space.png";
import phoenix from "@/assets/images/phoenix.png";
import neuralConstellation from "@/assets/images/manmeditating.png";
import seeingMind from "@/assets/images/seeingmind.png";

const approaches = ref([
  {
    icon: Brain,
    title: "Clear Seeing",
    description:
      "Learn to use tools from rationality and systems thinking to see situations from fresh angles. Question assumptions and untangle messy problems.",
    image: seeingMind,
  },
  {
    icon: Heart,
    title: "Inner Wisdom",
    description:
      "Create space for all parts of yourself through practices like IFS and Focusing. Learn to listen to your inner world with curiosity instead of judgment.",
    image: neuralConstellation,
  },
  {
    icon: Target,
    title: "Active Growth",
    description:
      "Turn insights into real experiments. Test ideas in the real world, learn from feedback, and find ways forward that feel genuine and meaningful.",
    image: phoenix,
  },
]);

const testimonials = ref([
  {
    text: "Getting in touch with Vatsal wasn't premeditated but I am thankful that it did happen. I was at a point in life, being where it felt like nothing was ever going to be okay. Like I was going to be in that state forever. Vatsal provided a genuinely judgement-free and safe space. Every issue was (and still is) first acknowledged, then understood from a place of empathy and best interest towards well being and growth, and then logical and practical solutions are being worked out through continuous deliberation.     I am so grateful for that. It was the first session then and it is Dec, 2024, now, I can attest that I am out of the state that I initially was in. A lil bit of kindness, tangible assitance and a new perspective really pulled me out of that dark pit.",
    author: "- Isabelle",
  },
  {
    text: "When I felt confused, scared and lost, Vatsal was there to guide me through it all, offering unwavering support and clarity. His guidance not only helped me overcome my struggles but also led me to understand who I truly am. I am deeply grateful for his help and for this place, which has been a life-changing source of comfort and growth for me.",
    author: "- Mano",
  },
]);
</script>
