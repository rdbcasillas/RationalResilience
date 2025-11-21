<!-- CoachingHome.vue -->
<template>
  <div class="min-h-screen bg-gradient-to-br from-amber-50 via-white to-blue-50">
    <!-- Hero Section -->
    <header class="relative py-20 overflow-hidden">
      <!-- Organic decorative blobs -->
      <svg class="absolute top-10 right-10 w-64 h-64 opacity-30" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#93C5FD" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.8C64.8,56.4,53.8,69,39.8,76.8C25.8,84.6,8.8,87.6,-7.5,85.1C-23.8,82.6,-39.4,74.6,-53.2,64.2C-67,53.8,-79,41,-85.8,25.8C-92.6,10.6,-94.2,-7,-88.9,-21.8C-83.6,-36.6,-71.4,-48.6,-57.8,-55.9C-44.2,-63.2,-29.2,-65.8,-14.7,-67.3C-0.2,-68.8,13.8,-69.2,27.1,-66.1C40.4,-63,53,-56.4,44.7,-76.4Z" transform="translate(100 100)" />
      </svg>
      <svg class="absolute bottom-0 left-0 w-80 h-80 opacity-20" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#C4B5FD" d="M39.5,-65.6C51.4,-58.1,61.3,-47.5,68.5,-35.1C75.7,-22.7,80.2,-8.5,79.8,5.5C79.4,19.5,74.1,33.3,65.6,44.8C57.1,56.3,45.4,65.5,32.2,71.3C19,77.1,4.3,79.5,-10.2,77.9C-24.7,76.3,-39,70.7,-51.8,62.2C-64.6,53.7,-75.9,42.3,-82.4,28.2C-88.9,14.1,-90.6,-2.7,-86.5,-17.9C-82.4,-33.1,-72.5,-46.7,-59.8,-53.9C-47.1,-61.1,-31.6,-61.9,-17.6,-64.3C-3.6,-66.7,8.9,-70.7,39.5,-65.6Z" transform="translate(100 100)" />
      </svg>

      <div class="max-w-4xl mx-auto px-6 relative z-10">
        <div class="text-center">
          <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span class="handwritten-alt inline-block transform rotate-1">Think Deeply,</span> <br class="hidden sm:inline"/>
            <span class="text-blue-600 handwritten-text inline-block transform -rotate-2">Feel Fully</span>
            <span class="handwritten-alt"> & </span><br class="hidden sm:inline"/>
            <span class="text-purple-600 handwritten-text inline-block transform rotate-1">Navigate Wisely</span>
          </h1>
          <p class="text-xl text-gray-700 mb-10 leading-relaxed max-w-2xl mx-auto">
            Being rational doesn't mean ignoring your feelings and being
            resilient doesn't mean doing it alone.
          </p>
          <div class="flex justify-center gap-4 flex-wrap">
            <a href="https://cal.com/vatsal-mehra-tblt4g/30min" target="_blank">
              <button
                class="bg-blue-600 text-white px-8 py-4 rounded-full font-medium hover:bg-blue-700 hover:scale-105 hover:rotate-1 transition-all shadow-lg hover:shadow-xl"
              >
                Book a Free Session
              </button>
            </a>
            <router-link
              to="/about"
              class="border-2 border-gray-800 text-gray-800 px-8 py-4 rounded-full font-medium hover:bg-gray-800 hover:text-white hover:-rotate-1 transition-all inline-block"
            >
              Learn More
            </router-link>
          </div>
        </div>
      </div>
    </header>

    <!-- Wavy divider -->
    <svg class="w-full h-16" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M0,0 C300,60 600,60 900,30 L900,0 L1200,0 L1200,120 L0,120 Z" fill="#F9FAFB" opacity="0.5"/>
      <path d="M0,20 C300,80 600,80 900,50 C1050,35 1125,27.5 1200,20 L1200,120 L0,120 Z" fill="#FEF3C7" opacity="0.3"/>
    </svg>

    <!-- Approach Section -->
    <section class="py-16 relative">
      <div class="max-w-5xl mx-auto px-6">
        <h2 class="text-4xl font-bold mb-4 text-center font-serif">
          How We'll Work Together
        </h2>
        <div class="w-32 h-1 bg-blue-600 mx-auto mb-12 rounded-full transform -rotate-1"></div>

        <!-- Asymmetric grid -->
        <div class="grid md:grid-cols-3 gap-8">
          <div
            v-for="(approach, index) in approaches"
            :key="index"
            class="group bg-white border-2 border-gray-200 overflow-hidden hover:border-blue-400 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2"
            :class="[
              index === 0 ? 'rounded-tl-3xl rounded-br-3xl md:mt-8 rotate-1' : '',
              index === 1 ? 'rounded-tr-3xl rounded-bl-3xl -rotate-1' : '',
              index === 2 ? 'rounded-tl-3xl rounded-br-3xl md:mt-8 rotate-1' : ''
            ]"
            :style="index === 1 ? 'clip-path: polygon(0 0, 100% 2%, 100% 98%, 0 100%)' : ''"
          >
            <!-- Image container with 16:9 aspect ratio -->
            <div class="aspect-video w-full overflow-hidden relative">
              <img
                :src="approach.image"
                :alt="approach.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <!-- Paper texture overlay -->
              <div class="absolute inset-0 bg-gradient-to-b from-transparent to-white/10 pointer-events-none"></div>
            </div>
            <!-- Content section -->
            <div class="p-6 relative">
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
    <section class="py-16 bg-gradient-to-b from-white to-purple-50/30 relative overflow-hidden">
      <!-- Organic blob instead of circle -->
      <svg class="absolute top-20 right-10 w-96 h-96 opacity-20" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#FCD34D" d="M41.3,-71.7C54.4,-63.5,66.3,-54.2,74.1,-41.8C81.9,-29.4,85.6,-14.7,85.2,-0.3C84.8,14.1,80.3,28.2,72.4,40.3C64.5,52.4,53.2,62.5,40.2,69.3C27.2,76.1,12.6,79.6,-2.3,83.5C-17.2,87.4,-34.4,91.7,-48.3,86.2C-62.2,80.7,-72.8,65.4,-79.9,48.9C-87,32.4,-90.6,14.7,-89.1,-2.3C-87.6,-19.3,-81,-35.6,-71.2,-49.1C-61.4,-62.6,-48.4,-73.3,-34.1,-81C-19.8,-88.7,-4.2,-93.4,8.9,-88.8C22,-84.2,28.2,-79.9,41.3,-71.7Z" transform="translate(100 100)" />
      </svg>

      <div class="max-w-4xl mx-auto px-6 relative z-10">
        <h2 class="text-4xl font-bold mb-4 text-center font-serif">
          What People Say
        </h2>
        <!-- Hand-drawn underline SVG -->
        <svg class="mx-auto mb-12" width="200" height="20" viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 15 Q 50 10, 100 12 T 195 10" stroke="#8B5CF6" stroke-width="3" fill="none" stroke-linecap="round"/>
        </svg>

        <div class="space-y-8">
          <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="bg-white/90 backdrop-blur-sm p-8 shadow-md hover:shadow-xl transition-all duration-300 relative transform hover:-rotate-1"
            :class="[
              index === 0 ? 'ml-0 md:ml-8 rotate-1' : '',
              index === 1 ? 'mr-0 md:mr-8 -rotate-1' : '',
              index === 2 ? 'ml-0 md:ml-4 rotate-1' : ''
            ]"
            :style="getTestimonialStyle(index)"
          >
            <!-- Torn paper top edge -->
            <div class="absolute top-0 left-0 right-0 h-3 bg-repeat-x opacity-30"
                 :style="`background-image: url('data:image/svg+xml,<svg width=\\'20\\' height=\\'10\\' viewBox=\\'0 0 20 10\\' xmlns=\\'http://www.w3.org/2000/svg\\'><path d=\\'M0 10 L5 0 L10 10 L15 0 L20 10\\' fill=\\'%23${index === 0 ? '60A5FA' : index === 1 ? 'A78BFA' : 'FBBF24'}\\' /></svg>');`">
            </div>

            <p class="text-gray-700 text-lg mb-4 leading-relaxed italic pt-4">
              "{{ testimonial.text }}"
            </p>
            <p class="font-semibold text-gray-900 handwritten-text text-xl">
              {{ testimonial.author }}
            </p>

            <!-- Color accent blob in corner -->
            <div class="absolute -bottom-2 -right-2 w-16 h-16 opacity-20 rounded-full"
                 :class="[
                   index === 0 ? 'bg-blue-400' : '',
                   index === 1 ? 'bg-purple-400' : '',
                   index === 2 ? 'bg-amber-400' : ''
                 ]"
            ></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Wavy divider before CTA -->
    <svg class="w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M0,50 C200,80 400,20 600,50 C800,80 1000,20 1200,50 L1200,120 L0,120 Z" fill="#FEF3C7" opacity="0.5"/>
      <path d="M0,70 C200,100 400,40 600,70 C800,100 1000,40 1200,70 L1200,120 L0,120 Z" fill="#FDE68A" opacity="0.3"/>
    </svg>

    <!-- Call to Action -->
    <section class="py-16 relative overflow-hidden">
      <div class="max-w-4xl mx-auto px-6">
        <div class="text-center bg-gradient-to-r from-blue-600 to-purple-600 p-12 shadow-xl relative overflow-hidden transform -rotate-1"
             style="clip-path: polygon(0 3%, 5% 1%, 10% 2%, 15% 0, 20% 2%, 25% 1%, 30% 3%, 35% 0, 40% 2%, 45% 1%, 50% 3%, 55% 0, 60% 2%, 65% 1%, 70% 3%, 75% 0, 80% 2%, 85% 1%, 90% 3%, 95% 0, 100% 2%, 100% 97%, 95% 99%, 90% 98%, 85% 100%, 80% 98%, 75% 99%, 70% 97%, 65% 100%, 60% 98%, 55% 99%, 50% 97%, 45% 100%, 40% 98%, 35% 99%, 30% 97%, 25% 100%, 20% 98%, 15% 99%, 10% 97%, 5% 100%, 0 98%)">
          <!-- Organic blob decoration -->
          <svg class="absolute top-0 right-0 w-48 h-48 opacity-10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FFFFFF" d="M43.3,-76.2C56.9,-69.3,69.7,-59.4,77.8,-46.2C85.9,-33,89.3,-16.5,88.1,-0.7C86.9,15.1,81.1,30.2,72.8,43.5C64.5,56.8,53.7,68.3,40.3,75.4C26.9,82.5,11,85.2,-4.7,83.9C-20.4,82.6,-35.8,77.3,-48.9,69.1C-62,60.9,-72.8,49.8,-79.8,36.4C-86.8,23,-90,7.3,-88.3,-7.9C-86.6,-23.1,-80,-37.8,-70.5,-49.8C-61,-61.8,-48.6,-71.1,-35.1,-78.3C-21.6,-85.5,-7,-90.6,5.9,-89.4C18.8,-88.2,29.7,-83.1,43.3,-76.2Z" transform="translate(100 100)" />
          </svg>
          <svg class="absolute bottom-0 left-0 w-40 h-40 opacity-10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FFFFFF" d="M39.5,-65.6C51.4,-58.1,61.3,-47.5,68.5,-35.1C75.7,-22.7,80.2,-8.5,79.8,5.5C79.4,19.5,74.1,33.3,65.6,44.8C57.1,56.3,45.4,65.5,32.2,71.3C19,77.1,4.3,79.5,-10.2,77.9C-24.7,76.3,-39,70.7,-51.8,62.2C-64.6,53.7,-75.9,42.3,-82.4,28.2C-88.9,14.1,-90.6,-2.7,-86.5,-17.9C-82.4,-33.1,-72.5,-46.7,-59.8,-53.9C-47.1,-61.1,-31.6,-61.9,-17.6,-64.3C-3.6,-66.7,8.9,-70.7,39.5,-65.6Z" transform="translate(100 100)" />
          </svg>

          <h2 class="text-3xl md:text-4xl font-bold mb-4 text-white handwritten-text relative z-10">Ready to Start?</h2>
          <p class="text-white/95 mb-8 text-lg relative z-10">
            Book a free session to discuss your challenges and explore how we can
            work together.
          </p>
          <a
            href="https://cal.com/vatsal-mehra-tblt4g/30min"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-colors shadow-lg inline-block relative z-10"
          >
            Schedule a Free Consultation
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import meditationSpace from "@/assets/images/meditation-space.png";
import phoenix from "@/assets/images/phoenix.png";
import neuralConstellation from "@/assets/images/manmeditating.png";
import seeingMind from "@/assets/images/seeingmind.png";

const approaches = ref([
  {
    title: "Clear Thinking",
    description:
      "Learn to use tools from rationality and systems thinking to see situations from fresh angles. Question assumptions and untangle messy problems.",
    image: seeingMind,
  },
  {
    title: "Inner Harmony",
    description:
      "Create space for all parts of yourself through practices like IFS and Focusing. Learn to listen to your inner world with curiosity instead of judgment.",
    image: neuralConstellation,
  },
  {
    title: "Embodied Growth",
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
  {
    text: "Vatsal helped me extremely in tough moments when I had no one else to talk to. He helped me tackle big challenges from new angles and gain perspective in moments when I could not think clearly. I am very grateful for all the support he has offered, and he contributed to some of my pivotal moments in the past in a very positive way.",
    author: "- Jaime",
  },
]);

// Create torn paper effect with clip-path
const getTestimonialStyle = (index) => {
  const clipPaths = [
    'polygon(0 3%, 2% 0, 5% 2%, 8% 0, 12% 3%, 15% 1%, 18% 2%, 22% 0, 25% 2%, 28% 1%, 32% 3%, 35% 0, 38% 2%, 42% 1%, 45% 3%, 48% 0, 52% 2%, 55% 1%, 58% 3%, 62% 0, 65% 2%, 68% 1%, 72% 3%, 75% 0, 78% 2%, 82% 1%, 85% 3%, 88% 0, 92% 2%, 95% 1%, 98% 3%, 100% 0, 100% 100%, 0 100%)',
    'polygon(0 2%, 3% 0, 6% 3%, 10% 1%, 13% 2%, 17% 0, 20% 3%, 24% 1%, 27% 2%, 31% 0, 34% 3%, 38% 1%, 41% 2%, 45% 0, 48% 3%, 52% 1%, 55% 2%, 59% 0, 62% 3%, 66% 1%, 69% 2%, 73% 0, 76% 3%, 80% 1%, 83% 2%, 87% 0, 90% 3%, 94% 1%, 97% 2%, 100% 0, 100% 100%, 0 100%)',
    'polygon(0 1%, 4% 0, 7% 2%, 11% 1%, 14% 3%, 18% 0, 21% 2%, 25% 1%, 28% 3%, 32% 0, 35% 2%, 39% 1%, 42% 3%, 46% 0, 49% 2%, 53% 1%, 56% 3%, 60% 0, 63% 2%, 67% 1%, 70% 3%, 74% 0, 77% 2%, 81% 1%, 84% 3%, 88% 0, 91% 2%, 95% 1%, 98% 3%, 100% 0, 100% 100%, 0 100%)'
  ];
  return {
    clipPath: clipPaths[index % 3]
  };
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Kalam:wght@400;700&family=Merriweather:ital,wght@0,400;0,700;1,400&display=swap');

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

.font-serif {
  font-family: 'Merriweather', serif;
}
</style>
