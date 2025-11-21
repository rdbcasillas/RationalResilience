<!-- views/AboutPage.vue -->
<template>
  <div class="pt-16 pb-16 bg-gradient-to-br from-amber-50 via-white to-blue-50 relative overflow-hidden">
    <!-- Organic background blobs -->
    <svg class="absolute top-20 right-10 w-96 h-96 opacity-20" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path fill="#93C5FD" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.8C64.8,56.4,53.8,69,39.8,76.8C25.8,84.6,8.8,87.6,-7.5,85.1C-23.8,82.6,-39.4,74.6,-53.2,64.2C-67,53.8,-79,41,-85.8,25.8C-92.6,10.6,-94.2,-7,-88.9,-21.8C-83.6,-36.6,-71.4,-48.6,-57.8,-55.9C-44.2,-63.2,-29.2,-65.8,-14.7,-67.3C-0.2,-68.8,13.8,-69.2,27.1,-66.1C40.4,-63,53,-56.4,44.7,-76.4Z" transform="translate(100 100)" />
    </svg>
    <svg class="absolute bottom-40 left-0 w-80 h-80 opacity-15" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path fill="#FCD34D" d="M41.3,-71.7C54.4,-63.5,66.3,-54.2,74.1,-41.8C81.9,-29.4,85.6,-14.7,85.2,-0.3C84.8,14.1,80.3,28.2,72.4,40.3C64.5,52.4,53.2,62.5,40.2,69.3C27.2,76.1,12.6,79.6,-2.3,83.5C-17.2,87.4,-34.4,91.7,-48.3,86.2C-62.2,80.7,-72.8,65.4,-79.9,48.9C-87,32.4,-90.6,14.7,-89.1,-2.3C-87.6,-19.3,-81,-35.6,-71.2,-49.1C-61.4,-62.6,-48.4,-73.3,-34.1,-81C-19.8,-88.7,-4.2,-93.4,8.9,-88.8C22,-84.2,28.2,-79.9,41.3,-71.7Z" transform="translate(100 100)" />
    </svg>

    <!-- Hero Section -->
    <div class="max-w-4xl mx-auto px-6 relative z-10">
      <div class="grid md:grid-cols-2 gap-12 items-center mb-16">
        <!-- Photo Section -->
        <div class="flex justify-center md:order-1 order-2">
          <div
            class="w-72 h-72 overflow-hidden border-4 border-blue-200 shadow-2xl hover:scale-105 transition-transform duration-300 transform rotate-2"
            style="clip-path: polygon(0 5%, 3% 2%, 7% 4%, 10% 1%, 15% 3%, 18% 1%, 22% 4%, 25% 2%, 30% 5%, 35% 2%, 40% 4%, 45% 1%, 50% 3%, 55% 1%, 60% 4%, 65% 2%, 70% 5%, 75% 2%, 80% 4%, 85% 1%, 90% 3%, 95% 1%, 100% 4%, 100% 95%, 97% 98%, 93% 96%, 88% 99%, 85% 97%, 80% 96%, 75% 98%, 70% 95%, 65% 98%, 60% 96%, 55% 99%, 50% 97%, 45% 96%, 40% 99%, 35% 97%, 30% 95%, 25% 98%, 20% 96%, 15% 99%, 10% 97%, 5% 95%, 0 98%)"
          >
            <img
              src="@/assets/images/mypic.jpeg"
              alt="Your Name"
              class="w-full h-full object-cover"
            />
          </div>
        </div>

        <!-- Intro Text -->
        <div class="md:order-2 order-1">
          <h1 class="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            <span class="handwritten-alt inline-block transform -rotate-1">Find clarity.</span> <br/>
            <span class="text-blue-600 handwritten-text inline-block transform rotate-2">Feel grounded.</span>
          </h1>
          <!-- Hand-drawn underline -->
          <svg class="mb-6 -mt-2" width="180" height="15" viewBox="0 0 180 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 10 Q 45 5, 90 8 T 175 7" stroke="#3B82F6" stroke-width="2.5" fill="none" stroke-linecap="round"/>
          </svg>
          <p class="text-xl text-gray-700 leading-relaxed">
            I guide people to find clarity and inner wisdom so they can take
            action, create a life they love and make a positive impact.
          </p>
        </div>
      </div>
    </div>

    <!-- Wavy divider -->
    <svg class="w-full h-20 mb-8" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M0,50 C200,80 400,20 600,50 C800,80 1000,20 1200,50 L1200,0 L0,0 Z" fill="#FEF3C7" opacity="0.4"/>
      <path d="M0,70 C200,100 400,40 600,70 C800,100 1000,40 1200,70 L1200,0 L0,0 Z" fill="#DBEAFE" opacity="0.3"/>
    </svg>

    <!-- Story Section -->
    <div class="max-w-3xl mx-auto px-6 mt-16 relative">
      <div class="bg-white/90 backdrop-blur-sm p-8 md:p-12 shadow-lg border border-gray-200 mb-8 transform -rotate-1 hover:rotate-0 transition-transform duration-300 relative"
           style="clip-path: polygon(0 3%, 2% 0, 5% 2%, 8% 0, 12% 3%, 15% 1%, 18% 2%, 22% 0, 25% 2%, 28% 1%, 32% 3%, 35% 0, 38% 2%, 42% 1%, 45% 3%, 48% 0, 52% 2%, 55% 1%, 58% 3%, 62% 0, 65% 2%, 68% 1%, 72% 3%, 75% 0, 78% 2%, 82% 1%, 85% 3%, 88% 0, 92% 2%, 95% 1%, 98% 3%, 100% 0, 100% 100%, 0 100%)">
        <h2 class="text-3xl font-bold mb-2 text-gray-900 handwritten-alt">My Journey</h2>
        <!-- Hand-drawn underline -->
        <svg class="mb-6" width="150" height="12" viewBox="0 0 150 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 8 Q 40 4, 75 7 T 145 6" stroke="#8B5CF6" stroke-width="2" fill="none" stroke-linecap="round"/>
        </svg>
        <div class="prose prose-lg text-gray-700 space-y-6 text-justify">
          <p>
            While I spent over a decade building expertise in
            <a
              href="https://vatsalmehra.com"
              class="text-blue-600 hover:text-blue-700 font-medium underline decoration-2 underline-offset-2"
              target="_blank"
              >building software & solving genomics puzzles</a
            >, I discovered that what really lit me up wasn't solving technical
            puzzles, but helping people untangle the complexities of their lives.
          </p>
          <p>
            My path to coaching began over a decade ago with a deep dive into
            rationality and critical thinking. As someone fascinated by how we
            make better decisions, I spent years exploring the tools of clear
            thinking. But through working with individuals and building
            communities, I discovered something crucial: addressing our current
            challenges – both personal and global – requires more than just
            rational analysis. We need to integrate sharp thinking with emotional
            depth and wisdom.
          </p>
          <p>
            Working one-on-one with people helps me understand the human
            dimensions of our collective challenges, while exploring
            <a
              href="https://www.realitystudies.co/p/explaining-polycrisis-and-metacrisis"
              class="text-blue-600 hover:text-blue-700 font-medium underline decoration-2 underline-offset-2"
              target="_blank"
              >metacrises</a
            >
            gives me new ways to think about how personal struggles connect to
            broader systemic patterns.
          </p>
        </div>
      </div>

      <!-- Approach Section -->
      <div class="bg-white/90 backdrop-blur-sm p-8 md:p-12 shadow-lg border border-gray-200 mb-8 transform rotate-1 hover:rotate-0 transition-transform duration-300 relative"
           style="clip-path: polygon(0 2%, 3% 0, 6% 3%, 10% 1%, 13% 2%, 17% 0, 20% 3%, 24% 1%, 27% 2%, 31% 0, 34% 3%, 38% 1%, 41% 2%, 45% 0, 48% 3%, 52% 1%, 55% 2%, 59% 0, 62% 3%, 66% 1%, 69% 2%, 73% 0, 76% 3%, 80% 1%, 83% 2%, 87% 0, 90% 3%, 94% 1%, 97% 2%, 100% 0, 100% 100%, 0 100%)">
        <h2 class="text-3xl font-bold mb-2 text-gray-900 handwritten-alt">My Approach</h2>
        <!-- Hand-drawn underline -->
        <svg class="mb-6" width="160" height="12" viewBox="0 0 160 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 8 Q 42 5, 80 7 T 155 7" stroke="#3B82F6" stroke-width="2" fill="none" stroke-linecap="round"/>
        </svg>
        <div class="prose prose-lg text-gray-700 space-y-6 text-justify">
          <p>
            What makes my approach unique is the weaving together of
            evidence-based tools for clear thinking with deep emotional work. I
            create a supportive container where you can explore both the logical
            and emotional dimensions of your challenges. This might involve parts
            work, authentic relating practices or rational decision-making
            frameworks – always tailored to what works for you.
          </p>
          <p>
            I believe that personal growth and collective flourishing reinforce
            each other. When we develop better ways of thinking and feeling, we
            become better equipped to address both our individual challenges and
            contribute to larger positive change. This isn't about quick fixes or
            creating dependency – it's about developing real capabilities in
            seeing both your inner and outer world more clearly.
          </p>
        </div>
      </div>

      <!-- Vision Section -->
      <div class="bg-white/90 backdrop-blur-sm p-8 md:p-12 shadow-lg border border-gray-200 mb-12 transform -rotate-1 hover:rotate-0 transition-transform duration-300 relative"
           style="clip-path: polygon(0 1%, 4% 0, 7% 2%, 11% 1%, 14% 3%, 18% 0, 21% 2%, 25% 1%, 28% 3%, 32% 0, 35% 2%, 39% 1%, 42% 3%, 46% 0, 49% 2%, 53% 1%, 56% 3%, 60% 0, 63% 2%, 67% 1%, 70% 3%, 74% 0, 77% 2%, 81% 1%, 84% 3%, 88% 0, 91% 2%, 95% 1%, 98% 3%, 100% 0, 100% 100%, 0 100%)">
        <h2 class="text-3xl font-bold mb-2 text-gray-900 handwritten-alt">Vision & Impact</h2>
        <!-- Hand-drawn underline -->
        <svg class="mb-6" width="180" height="12" viewBox="0 0 180 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 8 Q 47 4, 90 7 T 175 6" stroke="#8B5CF6" stroke-width="2" fill="none" stroke-linecap="round"/>
        </svg>
        <div class="prose prose-lg text-gray-700 space-y-6 text-justify">
          <p>
            What brings me the most joy in this work is seeing people become
            calmer, clearer, and more purposeful in their lives. I see individual
            coaching as part of a larger mission to explore meaningful ways to
            address the metacrises. Along with my work at
            <a
              href="https://enterportal.netlify.app"
              class="text-blue-600 hover:text-blue-700 font-medium underline decoration-2 underline-offset-2"
              target="_blank"
              >Portal</a
            >, each coaching relationship helps me understand how personal growth
            and systemic change can support each other.
          </p>
          <p>
            Whether you're working through personal challenges, career decisions,
            or seeking deeper meaning, we'll work together to find your path
            forward. No judgment, no pushing – just curious exploration and
            practical steps toward both personal growth and meaningful
            contribution to the world.
          </p>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center bg-gradient-to-r from-blue-600 to-purple-600 p-12 shadow-xl relative overflow-hidden transform rotate-1"
           style="clip-path: polygon(0 3%, 5% 1%, 10% 2%, 15% 0, 20% 2%, 25% 1%, 30% 3%, 35% 0, 40% 2%, 45% 1%, 50% 3%, 55% 0, 60% 2%, 65% 1%, 70% 3%, 75% 0, 80% 2%, 85% 1%, 90% 3%, 95% 0, 100% 2%, 100% 97%, 95% 99%, 90% 98%, 85% 100%, 80% 98%, 75% 99%, 70% 97%, 65% 100%, 60% 98%, 55% 99%, 50% 97%, 45% 100%, 40% 98%, 35% 99%, 30% 97%, 25% 100%, 20% 98%, 15% 99%, 10% 97%, 5% 100%, 0 98%)">
        <!-- Organic blob decoration -->
        <svg class="absolute top-0 right-0 w-48 h-48 opacity-10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FFFFFF" d="M43.3,-76.2C56.9,-69.3,69.7,-59.4,77.8,-46.2C85.9,-33,89.3,-16.5,88.1,-0.7C86.9,15.1,81.1,30.2,72.8,43.5C64.5,56.8,53.7,68.3,40.3,75.4C26.9,82.5,11,85.2,-4.7,83.9C-20.4,82.6,-35.8,77.3,-48.9,69.1C-62,60.9,-72.8,49.8,-79.8,36.4C-86.8,23,-90,7.3,-88.3,-7.9C-86.6,-23.1,-80,-37.8,-70.5,-49.8C-61,-61.8,-48.6,-71.1,-35.1,-78.3C-21.6,-85.5,-7,-90.6,5.9,-89.4C18.8,-88.2,29.7,-83.1,43.3,-76.2Z" transform="translate(100 100)" />
        </svg>

        <h2 class="text-3xl font-bold mb-4 text-white handwritten-text relative z-10">Ready to Begin?</h2>
        <p class="text-white/95 mb-8 text-lg relative z-10">
          Let's explore how we might work together.
        </p>
        <div class="flex justify-center gap-4 flex-wrap relative z-10">
          <router-link
            to="/sessions"
            class="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-colors shadow-lg"
          >
            View Sessions
          </router-link>
          <router-link
            to="/contact"
            class="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all"
          >
            Get in Touch
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

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
