<!-- views/AboutPage.vue -->
<template>
  <div class="pt-16 pb-16">
    <!-- Hero Section -->
    <div class="max-w-4xl mx-auto px-6">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Photo Section -->
        <div class="flex justify-center">
          <div
            class="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-lg"
          >
            <img
              src="@/assets/images/mypic.jpeg"
              alt="Your Name"
              class="w-full h-full object-cover"
            />
          </div>
        </div>

        <!-- Intro Text -->
        <div>
          <h3 class="text-xl mb-4">
            Think clearly, feel deeply. I'm Vatsal, and that's what I help
            people do
          </h3>
          <p class="text-gray-600 mb-6">
            I help people navigate complexity by bringing together clear
            thinking and emotional wisdom, working towards both personal growth
            and collective flourishing.
          </p>
        </div>
      </div>
    </div>

    <!-- Story Section -->
    <div class="max-w-3xl mx-auto px-6 mt-16">
      <h2 class="text-2xl font-bold mb-6">My Journey</h2>
      <div class="prose prose-lg text-gray-600">
        <p class="mb-6">
          While I spent over a decade building expertise in
          <a
            href="https://vatsalmehra.com"
            class="text-blue-600 hover:text-blue-800 underline"
            target="_blank"
            >building software & solving genomics puzzles</a
          >, I discovered that what really lit me up wasn't solving technical
          puzzles, but helping people untangle the complexities of their lives.
        </p>
        <p class="mb-6">
          My path to coaching began over a decade ago with a deep dive into
          rationality and critical thinking. As someone fascinated by how we
          make better decisions, I spent years exploring the tools of clear
          thinking. But through working with individuals and building
          communities, I discovered something crucial: addressing our current
          challenges – both personal and global – requires more than just
          rational analysis. We need to integrate sharp thinking with emotional
          depth and wisdom.
        </p>
        <p class="mb-6">
          Working one-on-one with people helps me understand the human
          dimensions of our collective challenges, while exploring
          <a
            href="https://www.realitystudies.co/p/explaining-polycrisis-and-metacrisis"
            class="text-blue-600 hover:text-blue-800 underline"
            target="_blank"
            >metacrises</a
          >
          gives me new ways to think about how personal struggles connect to
          broader systemic patterns.
        </p>
      </div>

      <!-- Approach Section -->
      <h2 class="text-2xl font-bold mb-6 mt-12">My Approach</h2>
      <div class="prose prose-lg text-gray-600">
        <p class="mb-6">
          What makes my approach unique is the weaving together of
          evidence-based tools for clear thinking with deep emotional work. I
          create a supportive container where you can explore both the logical
          and emotional dimensions of your challenges. This might involve parts
          work, authentic relating practices, or rational decision-making
          frameworks – always tailored to what works for you.
        </p>
        <p class="mb-6">
          I believe that personal growth and collective flourishing reinforce
          each other. When we develop better ways of thinking and feeling, we
          become better equipped to address both our individual challenges and
          contribute to larger positive change. This isn't about quick fixes or
          creating dependency – it's about developing real capabilities in
          seeing both your inner and outer world more clearly.
        </p>
      </div>

      <!-- Vision Section -->
      <h2 class="text-2xl font-bold mb-6 mt-12">Vision & Impact</h2>
      <div class="prose prose-lg text-gray-600">
        <p class="mb-6">
          What brings me the most joy in this work is seeing people become
          calmer, clearer, and more purposeful in their lives. I see individual
          coaching as part of a larger mission to explore meaningful ways to
          address the metacrises. Along with my work at
          <a
            href="https://portal-website-url.com"
            class="text-blue-600 hover:text-blue-800 underline"
            target="_blank"
            >Portal</a
          >, each coaching relationship helps me understand how personal growth
          and systemic change can support each other.
        </p>
        <p class="mb-6">
          Whether you're working through personal challenges, career decisions,
          or seeking deeper meaning, we'll work together to find your path
          forward. No judgment, no pushing – just curious exploration and
          practical steps toward both personal growth and meaningful
          contribution to the world.
        </p>
      </div>

      <!-- Call to Action -->
      <div class="mt-16 text-center">
        <h2 class="text-2xl font-bold mb-4">Ready to Begin?</h2>
        <p class="text-gray-600 mb-8">
          Let's explore how we might work together.
        </p>
        <div class="flex justify-center gap-4">
          <router-link
            to="/sessions"
            class="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            View Sessions
          </router-link>
          <router-link
            to="/contact"
            class="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition"
          >
            Get in Touch
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
