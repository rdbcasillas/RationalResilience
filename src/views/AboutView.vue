<!-- views/AboutView.vue -->
<template>
  <div class="pt-16 pb-16 relative overflow-hidden">
    <!-- Organic background blobs -->
    <svg
      class="absolute top-20 right-10 w-96 h-96 opacity-20 pointer-events-none"
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
      class="absolute bottom-40 left-0 w-80 h-80 opacity-15 pointer-events-none"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#FCD34D"
        d="M41.3,-71.7C54.4,-63.5,66.3,-54.2,74.1,-41.8C81.9,-29.4,85.6,-14.7,85.2,-0.3C84.8,14.1,80.3,28.2,72.4,40.3C64.5,52.4,53.2,62.5,40.2,69.3C27.2,76.1,12.6,79.6,-2.3,83.5C-17.2,87.4,-34.4,91.7,-48.3,86.2C-62.2,80.7,-72.8,65.4,-79.9,48.9C-87,32.4,-90.6,14.7,-89.1,-2.3C-87.6,-19.3,-81,-35.6,-71.2,-49.1C-61.4,-62.6,-48.4,-73.3,-34.1,-81C-19.8,-88.7,-4.2,-93.4,8.9,-88.8C22,-84.2,28.2,-79.9,41.3,-71.7Z"
        transform="translate(100 100)"
      />
    </svg>

    <!-- Intro -->
    <div class="max-w-4xl mx-auto px-6 relative z-10">
      <div class="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div class="flex justify-center md:order-1 order-2">
          <div
            class="w-full max-w-md aspect-[3/2] rounded-3xl overflow-hidden border-4 border-blue-200 shadow-2xl hover:scale-105 transition-transform duration-300 transform rotate-2"
          >
            <img
              src="@/assets/images/vatsal-talk.jpg"
              alt="Vatsal Mehra speaking at a podium"
              class="w-full h-full object-cover"
            />
          </div>
        </div>

        <div class="md:order-2 order-1">
          <h1 class="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            <span class="handwritten-alt inline-block transform -rotate-1"
              >Find clarity.</span
            >
            <br />
            <span class="text-blue-600 handwritten-text inline-block"
              >Feel grounded.</span
            >
          </h1>
          <svg
            class="mb-6 -mt-2"
            width="180"
            height="15"
            viewBox="0 0 180 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 10 Q 45 5, 90 8 T 175 7"
              stroke="#3B82F6"
              stroke-width="2.5"
              fill="none"
              stroke-linecap="round"
            />
          </svg>
          <p class="text-xl text-gray-700 leading-relaxed">
            I'm Vatsal Mehra. I help people think clearly about hard things, stay
            in contact with what they actually feel, and act on both.
          </p>
        </div>
      </div>
    </div>

    <!-- Story -->
    <div class="max-w-3xl mx-auto px-6 mt-8 relative z-10">
      <section class="card p-8 md:p-12 mb-8">
        <h2 class="text-3xl font-bold mb-2 text-gray-900 handwritten-alt">
          How I got here
        </h2>
        <svg
          class="mb-6"
          width="150"
          height="12"
          viewBox="0 0 150 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 8 Q 40 4, 75 7 T 145 6"
            stroke="#8B5CF6"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
          />
        </svg>
        <div class="prose prose-lg text-gray-700 space-y-6">
          <p>
            I spent over a decade
            <a
              :href="PORTFOLIO_URL"
              class="text-blue-600 hover:text-blue-700 font-medium underline decoration-2 underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
              >building software and solving genomics problems</a
            >. Somewhere in there I noticed that the technical puzzles were not
            the part that held me — helping people untangle their own lives was.
          </p>
          <p>
            The path started with rationality and critical thinking: years spent
            on the question of how anyone makes better decisions. But working
            one-on-one with people taught me the limit of that. Clear analysis
            alone does not move someone who is frightened, exhausted, or pulled
            in two directions at once. Sharp thinking has to sit alongside
            emotional depth, or it just becomes another way to argue with
            yourself.
          </p>
          <p>
            So that is what I do now. I coach individuals — people at a
            crossroads, people in a hard stretch, and senior professionals
            working out how to carry a demanding role without it costing them
            everything else.
          </p>
        </div>
      </section>

      <!-- Approach -->
      <section class="card p-8 md:p-12 mb-8">
        <h2 class="text-3xl font-bold mb-2 text-gray-900 handwritten-alt">
          What a session is actually like
        </h2>
        <svg
          class="mb-6"
          width="160"
          height="12"
          viewBox="0 0 160 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 8 Q 42 5, 80 7 T 155 7"
            stroke="#3B82F6"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
          />
        </svg>
        <div class="prose prose-lg text-gray-700 space-y-6">
          <p>
            Ninety minutes, online, no script. You bring the situation. I ask
            questions, and we go at it from whichever direction seems most
            useful: a decision-making framework, parts work, an authentic
            relating practice, or simply staying with something uncomfortable
            long enough to see what it is made of.
          </p>
          <p>
            You will not get advice dressed up as insight, and I am not trying to
            make you dependent on a weekly call. The point is that you leave
            better able to do this for yourself — which occasionally means I tell
            you that one session was enough.
          </p>
          <p class="text-gray-600">
            One thing worth saying plainly: this is coaching, not therapy. If
            what you are dealing with needs clinical care, I will say so and help
            you find it.
          </p>
        </div>
      </section>

      <!-- Vision -->
      <section class="card p-8 md:p-12 mb-12">
        <h2 class="text-3xl font-bold mb-2 text-gray-900 handwritten-alt">
          Why this work
        </h2>
        <svg
          class="mb-6"
          width="180"
          height="12"
          viewBox="0 0 180 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 8 Q 47 4, 90 7 T 175 6"
            stroke="#8B5CF6"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
          />
        </svg>
        <div class="prose prose-lg text-gray-700 space-y-6">
          <p>
            What I enjoy most is watching someone get calmer, clearer and more
            deliberate about their own life. I also think it matters beyond the
            individual. Alongside my work at
            <a
              href="https://enterportal.netlify.app"
              class="text-blue-600 hover:text-blue-700 font-medium underline decoration-2 underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
              >Portal</a
            >
            and my interest in the
            <a
              href="https://www.realitystudies.co/p/explaining-polycrisis-and-metacrisis"
              class="text-blue-600 hover:text-blue-700 font-medium underline decoration-2 underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
              >metacrisis</a
            >, coaching keeps showing me how personal patterns and systemic ones
            rhyme. People who can think and feel clearly make better calls, and
            those calls add up.
          </p>
        </div>
      </section>

      <!-- Portfolio -->
      <a
        :href="PORTFOLIO_URL"
        target="_blank"
        rel="noopener noreferrer"
        class="card card-hover group flex items-start gap-5 p-8 md:p-10 mb-12 border-l-4 border-l-blue-400"
      >
        <ExternalLink
          class="w-7 h-7 text-blue-600 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform"
        />
        <div>
          <h2 class="text-2xl font-bold mb-2 text-gray-900 handwritten-alt">
            The rest of what I do
          </h2>
          <p class="text-gray-700 text-lg leading-relaxed">
            Coaching is one strand. My personal site has the whole picture — the
            projects I am building, a timeline of twenty years across
            engineering, bioinformatics, teaching and community work, and my
            education and résumé.
          </p>
          <span
            class="inline-block mt-3 text-blue-600 font-medium group-hover:underline underline-offset-4"
          >
            vatsalmehra.com →
          </span>
        </div>
      </a>

      <!-- Call to action -->
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
          class="text-3xl font-bold mb-4 text-white handwritten-text relative z-10"
        >
          Want to talk?
        </h2>
        <p class="text-white/95 mb-8 text-lg relative z-10">
          The first call is free and there is nothing to commit to.
        </p>
        <div class="flex justify-center gap-4 flex-wrap relative z-10">
          <a
            :href="CAL_INTRO_URL"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-colors shadow-lg"
          >
            Book a free call
          </a>
          <router-link
            to="/sessions"
            class="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all"
          >
            See sessions
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ExternalLink } from "lucide-vue-next";
import { CAL_INTRO_URL, PORTFOLIO_URL } from "@/config/site";
</script>
