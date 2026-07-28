<!-- views/HomeView.vue -->
<template>
  <div>
    <!-- Hero -->
    <header class="relative py-20 overflow-hidden">
      <svg
        class="absolute top-10 right-10 w-64 h-64 opacity-30 pointer-events-none"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#93C5FD"
          d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.8C64.8,56.4,53.8,69,39.8,76.8C25.8,84.6,8.8,87.6,-7.5,85.1C-23.8,82.6,-39.4,74.6,-53.2,64.2C-67,53.8,-79,41,-85.8,25.8C-92.6,10.6,-94.2,-7,-88.9,-21.8C-83.6,-36.6,-71.4,-48.6,-57.8,-55.9C-44.2,-63.2,-29.2,-65.8,-14.7,-67.3C-0.2,-68.8,13.8,-69.2,27.1,-66.1C40.4,-63,53,-56.4,44.7,-76.4Z"
          transform="translate(100 100)"
        />
      </svg>
      <svg
        class="absolute bottom-0 left-0 w-80 h-80 opacity-20 pointer-events-none"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#C4B5FD"
          d="M39.5,-65.6C51.4,-58.1,61.3,-47.5,68.5,-35.1C75.7,-22.7,80.2,-8.5,79.8,5.5C79.4,19.5,74.1,33.3,65.6,44.8C57.1,56.3,45.4,65.5,32.2,71.3C19,77.1,4.3,79.5,-10.2,77.9C-24.7,76.3,-39,70.7,-51.8,62.2C-64.6,53.7,-75.9,42.3,-82.4,28.2C-88.9,14.1,-90.6,-2.7,-86.5,-17.9C-82.4,-33.1,-72.5,-46.7,-59.8,-53.9C-47.1,-61.1,-31.6,-61.9,-17.6,-64.3C-3.6,-66.7,8.9,-70.7,39.5,-65.6Z"
          transform="translate(100 100)"
        />
      </svg>

      <div class="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          <span class="handwritten-alt inline-block transform rotate-1"
            >Think Deeply,</span
          >
          <br class="hidden sm:inline" />
          <span class="text-blue-600 handwritten-text inline-block"
            >Feel Fully</span
          >
          <span class="handwritten-alt"> &amp; </span>
          <br class="hidden sm:inline" />
          <span class="text-purple-600 handwritten-text inline-block"
            >Navigate Wisely</span
          >
        </h1>
        <p class="text-xl text-gray-700 mb-4 leading-relaxed max-w-2xl mx-auto">
          Being rational doesn't mean ignoring your feelings, and being resilient
          doesn't mean doing it alone.
        </p>
        <p class="text-lg text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
          I'm Vatsal. I coach people through decisions, stuck patterns and
          overloaded lives — using tools from rationality and systems thinking
          alongside real emotional work. Sessions are an hour, online.
        </p>
        <div class="flex justify-center gap-4 flex-wrap">
          <a :href="CAL_INTRO_URL" target="_blank" rel="noopener noreferrer">
            <button
              class="bg-blue-600 text-white px-8 py-4 rounded-full font-medium hover:bg-blue-700 hover:-translate-y-0.5 transition-all shadow-lg hover:shadow-xl"
            >
              Book a free 30-min call
            </button>
          </a>
          <router-link
            to="/sessions"
            class="border-2 border-gray-800 text-gray-800 px-8 py-4 rounded-full font-medium hover:bg-gray-800 hover:text-white transition-all inline-block"
          >
            See sessions &amp; pricing
          </router-link>
        </div>
      </div>
    </header>

    <!-- Who this is for -->
    <section class="py-16 relative">
      <div class="max-w-5xl mx-auto px-6">
        <h2 class="text-3xl md:text-4xl font-bold mb-3 text-center font-serif">
          Who I work with
        </h2>
        <svg
          class="mx-auto mb-12"
          width="200"
          height="20"
          viewBox="0 0 200 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 15 Q 50 10, 100 12 T 195 10"
            stroke="#8B5CF6"
            stroke-width="3"
            fill="none"
            stroke-linecap="round"
          />
        </svg>

        <div class="grid md:grid-cols-3 gap-6">
          <div
            v-for="audience in audiences"
            :key="audience.title"
            class="card card-hover p-7"
          >
            <component
              :is="audience.icon"
              class="w-7 h-7 mb-4"
              :class="audience.color"
            />
            <h3 class="font-bold text-lg mb-2 text-gray-900">
              {{ audience.title }}
            </h3>
            <p class="text-gray-600 leading-relaxed">
              {{ audience.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Approach -->
    <section class="py-16 relative">
      <div class="max-w-5xl mx-auto px-6">
        <h2 class="text-3xl md:text-4xl font-bold mb-3 text-center font-serif">
          How we'll work together
        </h2>
        <div
          class="w-32 h-1 bg-blue-600 mx-auto mb-4 rounded-full transform -rotate-1"
        ></div>
        <p class="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
          Most sessions move through all three. Where we start depends on what
          you bring.
        </p>

        <div class="grid md:grid-cols-3 gap-8">
          <div
            v-for="approach in approaches"
            :key="approach.title"
            class="group card card-hover overflow-hidden"
          >
            <div class="aspect-video w-full overflow-hidden">
              <img
                :src="approach.image"
                :alt="approach.title"
                loading="lazy"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div class="p-6">
              <h3 class="font-bold text-xl mb-3 text-gray-900 handwritten-text">
                {{ approach.title }}
              </h3>
              <p class="text-gray-600 leading-relaxed">
                {{ approach.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section
      class="py-16 bg-gradient-to-b from-white/40 to-purple-50/40 relative overflow-hidden"
    >
      <svg
        class="absolute top-20 right-10 w-96 h-96 opacity-20 pointer-events-none"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#FCD34D"
          d="M41.3,-71.7C54.4,-63.5,66.3,-54.2,74.1,-41.8C81.9,-29.4,85.6,-14.7,85.2,-0.3C84.8,14.1,80.3,28.2,72.4,40.3C64.5,52.4,53.2,62.5,40.2,69.3C27.2,76.1,12.6,79.6,-2.3,83.5C-17.2,87.4,-34.4,91.7,-48.3,86.2C-62.2,80.7,-72.8,65.4,-79.9,48.9C-87,32.4,-90.6,14.7,-89.1,-2.3C-87.6,-19.3,-81,-35.6,-71.2,-49.1C-61.4,-62.6,-48.4,-73.3,-34.1,-81C-19.8,-88.7,-4.2,-93.4,8.9,-88.8C22,-84.2,28.2,-79.9,41.3,-71.7Z"
          transform="translate(100 100)"
        />
      </svg>

      <div class="max-w-4xl mx-auto px-6 relative z-10">
        <h2 class="text-3xl md:text-4xl font-bold mb-3 text-center font-serif">
          What people say
        </h2>
        <svg
          class="mx-auto mb-12"
          width="200"
          height="20"
          viewBox="0 0 200 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 15 Q 50 10, 100 12 T 195 10"
            stroke="#8B5CF6"
            stroke-width="3"
            fill="none"
            stroke-linecap="round"
          />
        </svg>

        <div class="space-y-8">
          <!-- Torn-paper edge kept here only: the handmade feel suits a quote card -->
          <figure
            v-for="(testimonial, index) in testimonials"
            :key="testimonial.author"
            class="bg-white/90 backdrop-blur-sm p-8 pt-10 shadow-md hover:shadow-xl transition-shadow duration-300 relative torn-top"
            :class="index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'"
          >
            <div
              class="absolute top-0 left-0 right-0 h-1.5"
              :class="accentBar[index % accentBar.length]"
            ></div>
            <blockquote class="text-gray-700 text-lg mb-4 leading-relaxed italic">
              "{{ testimonial.text }}"
            </blockquote>
            <figcaption class="font-semibold text-gray-900 handwritten-text text-xl">
              — {{ testimonial.author }}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    <!-- Call to action -->
    <section class="py-16 relative overflow-hidden">
      <div class="max-w-4xl mx-auto px-6">
        <div
          class="text-center bg-gradient-to-r from-blue-600 to-purple-600 p-12 rounded-3xl shadow-xl relative overflow-hidden"
        >
          <svg
            class="absolute top-0 right-0 w-48 h-48 opacity-10 pointer-events-none"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#FFFFFF"
              d="M43.3,-76.2C56.9,-69.3,69.7,-59.4,77.8,-46.2C85.9,-33,89.3,-16.5,88.1,-0.7C86.9,15.1,81.1,30.2,72.8,43.5C64.5,56.8,53.7,68.3,40.3,75.4C26.9,82.5,11,85.2,-4.7,83.9C-20.4,82.6,-35.8,77.3,-48.9,69.1C-62,60.9,-72.8,49.8,-79.8,36.4C-86.8,23,-90,7.3,-88.3,-7.9C-86.6,-23.1,-80,-37.8,-70.5,-49.8C-61,-61.8,-48.6,-71.1,-35.1,-78.3C-21.6,-85.5,-7,-90.6,5.9,-89.4C18.8,-88.2,29.7,-83.1,43.3,-76.2Z"
              transform="translate(100 100)"
            />
          </svg>

          <h2
            class="text-3xl md:text-4xl font-bold mb-4 text-white handwritten-text relative z-10"
          >
            Ready to start?
          </h2>
          <p class="text-white/95 mb-8 text-lg relative z-10 max-w-xl mx-auto">
            Book a free 30-minute call. Tell me what is going on, and we'll work
            out whether I'm the right person to help with it.
          </p>
          <a
            :href="CAL_INTRO_URL"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-colors shadow-lg inline-block relative z-10"
          >
            Schedule the free call
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Compass, Briefcase, Sprout } from "lucide-vue-next";
import phoenix from "@/assets/images/phoenix.jpg";
import neuralConstellation from "@/assets/images/manmeditating.jpg";
import seeingMind from "@/assets/images/seeingmind.jpg";
import { CAL_INTRO_URL } from "@/config/site";

const audiences = [
  {
    title: "People at a crossroads",
    description:
      "A career move, a relationship, a decision you keep circling without landing. We slow it down and look at what is actually being weighed.",
    icon: Compass,
    color: "text-blue-600",
  },
  {
    title: "Leaders carrying a lot",
    description:
      "Senior professionals working on workload, decisions under pressure, and the boundaries that keep a demanding role sustainable.",
    icon: Briefcase,
    color: "text-amber-500",
  },
  {
    title: "People in a hard stretch",
    description:
      "Stuck, flat, or turning the same thing over and over. Somewhere to think out loud without being judged or hurried.",
    icon: Sprout,
    color: "text-purple-600",
  },
];

const approaches = [
  {
    title: "Clear Thinking",
    description:
      "Tools from rationality and systems thinking to see a situation from angles you haven't tried. We question the assumptions underneath it and untangle what is actually tangled.",
    image: seeingMind,
  },
  {
    title: "Inner Harmony",
    description:
      "Practices like IFS and Focusing to make room for the parts of you that disagree with each other — listening to them with curiosity instead of trying to override them.",
    image: neuralConstellation,
  },
  {
    title: "Embodied Growth",
    description:
      "Insight that stays in your head doesn't change much. We turn it into small experiments, see what the world says back, and adjust from there.",
    image: phoenix,
  },
];

const accentBar = ["bg-blue-400", "bg-purple-400", "bg-amber-400"];

const testimonials = [
  {
    text: "Getting in touch with Vatsal wasn't premeditated but I am thankful that it did happen. I was at a point in life where it felt like nothing was ever going to be okay. Like I was going to be in that state forever. Vatsal provided a genuinely judgement-free and safe space. Every issue was, and still is, first acknowledged, then understood from a place of empathy, and then logical and practical solutions are worked out through continuous deliberation. A little bit of kindness, tangible assistance and a new perspective really pulled me out of that dark pit.",
    author: "Isabelle",
  },
  {
    text: "When I felt confused, scared and lost, Vatsal was there to guide me through it all, offering unwavering support and clarity. His guidance not only helped me overcome my struggles but also led me to understand who I truly am. I am deeply grateful for his help and for this place, which has been a life-changing source of comfort and growth for me.",
    author: "Mano",
  },
  {
    text: "Vatsal helped me extremely in tough moments when I had no one else to talk to. He helped me tackle big challenges from new angles and gain perspective in moments when I could not think clearly. I am very grateful for all the support he has offered, and he contributed to some of my pivotal moments in the past in a very positive way.",
    author: "Jaime",
  },
];
</script>
