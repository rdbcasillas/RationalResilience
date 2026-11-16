<!-- views/HomeView.vue -->
<template>
  <div>
    <!-- Opening: text on a pale panel that sits offset to the right -->
    <!-- The panel starts at the left edge of the page column and runs off the
         right of the screen, so the text always sits inside it. -->
    <header class="relative overflow-x-clip">
      <div class="relative max-w-6xl mx-auto px-6 md:px-14 pt-14 sm:pt-20 md:pt-24 pb-28 md:pb-36">
        <div
          aria-hidden="true"
          class="absolute top-8 bottom-0 left-0 -right-[50vw] bg-panel/60 -z-[5]"
        ></div>
        <div class="xl:grid xl:grid-cols-[minmax(0,1fr)_370px] xl:gap-12 xl:items-start">
          <div>
            <h1 class="page-title max-w-3xl">
              Work through messy decisions, understand yourself better, and
              make progress on what matters to you.
            </h1>
            <p class="lead mb-5 max-w-xl">
              I'm
              <a :href="PORTFOLIO_URL" target="_blank" rel="noopener" class="link">Vatsal Mehra</a>. I offer one-to-one coaching and run rationality
              workshops. The goal is to help people think clearly, get unstuck
              and trust themselves to act.
            </p>
            <p class="mb-10 max-w-xl">
              I don't use a single fixed coaching formula. My approach draws on
              rationality, psychology, emotional exploration and practical
              experimentation.
            </p>
            <a
              :href="CAL_INTRO_URL"
              target="_blank"
              rel="noopener noreferrer"
              class="btn"
              >Book a free intro call</a
            >
          </div>
          <!-- The five steps of a typical session, as a notebook sketch -->
          <HandSketch name="hero" class="hidden xl:block -mt-6 w-full h-auto" />
        </div>
      </div>
    </header>

    <!-- Three routes, in a flat block that overlaps the opening -->
    <section id="ways" class="max-w-6xl mx-auto scroll-mt-8 pb-20">
      <div class="bg-stone -mt-14 md:-mt-20 relative px-6 md:px-14 py-10 md:py-14 md:mr-40">
        <h2 class="eyebrow">Ways to work with me</h2>
        <ul>
          <li
            v-for="(route, i) in routes"
            :key="route.title"
            :class="i ? 'border-t border-ink/10' : ''"
          >
            <router-link :to="route.to" class="group block py-6">
              <h3 class="text-[1.7rem] leading-snug mb-1 group-hover:text-accent transition-colors">
                {{ route.title }}
                <span aria-hidden="true" class="text-accent">→</span>
              </h3>
              <p class="text-ink/75 max-w-2xl">{{ route.body }}</p>
            </router-link>
          </li>
        </ul>
      </div>
    </section>

    <!-- What a session is like. The five steps are listed here only on
         screens too narrow to show the sketch beside the opening. -->
    <section class="page pb-16">
      <h2 class="section-title">What a session is like</h2>
      <div class="space-y-5">
        <p>
          Individual sessions are an hour, online. We might start from
          something you bring, continue from last time, or pick up something I
          think needs discussing. We take time to deeply understand your
          relationship with the problem, and on many occasions people discover
          along the way that the problem is actually a different one. Once we
          have a framing that fits better, we design a small experiment for
          you to run in your real life before we next meet. Then you report
          back, and we adjust based on what actually happened. I also use parts work, authentic relating
          practices, or simply staying with something uncomfortable for long
          enough to understand it.
        </p>
        <div class="xl:hidden">
          <p class="mb-4">Often the sequence looks like this:</p>
          <ol class="space-y-2">
            <li v-for="step in steps" :key="step.text" class="flex items-center gap-5">
              <HandSketch
                :name="step.sketch"
                :pace="0.2"
                :stroke-width="2"
                class="w-12 h-12 flex-shrink-0"
              />
              <span>{{ step.text }}</span>
            </li>
          </ol>
        </div>
        <p>
          I'm not trying to make you dependent on a weekly call. I want you
          to build trust in yourself, that you can come up with solutions on
          your own instead of depending on me.
        </p>
        <p class="text-muted">
          This is coaching, not therapy. If what you're dealing with needs
          clinical care, I'll tell you and help you find it.
        </p>
      </div>
    </section>

    <!-- About -->
    <section class="page pb-16">
      <div class="rule pt-12 grid sm:grid-cols-3 gap-8 items-start">
        <img
          src="@/assets/images/vatsal-talk.jpg"
          alt="Vatsal Mehra speaking at a workshop"
          class="rounded-lg w-full aspect-[3/2] object-cover sm:col-span-1"
        />
        <div class="sm:col-span-2">
          <h2 class="section-title">About me</h2>
          <p class="mb-4">
            I spent over a decade building software and working on genomics
            problems before coaching. I've also designed and facilitated
            workshops on planning, cognitive biases, self-deception and
            decision-making.
          </p>
          <router-link to="/about" class="link">More about me</router-link>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="page pb-16">
      <div class="rule pt-12">
        <h2 class="section-title">What coaching clients have said</h2>
        <div class="space-y-10 mt-8">
          <figure v-for="t in testimonials" :key="t.author">
            <blockquote class="border-l-2 border-accent/40 pl-5 text-ink/90">
              {{ t.text }}
            </blockquote>
            <figcaption class="pl-5 mt-3 text-muted text-[17px]">
              {{ t.author }}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    <!-- Closing -->
    <section class="page">
      <div class="rule pt-12">
        <h2 class="section-title">Start with a conversation</h2>
        <p class="mb-6 max-w-2xl">
          The intro call is free and 30 minutes. Tell me what's going on and
          we'll work out whether I can help. If you'd rather write first,
          <a :href="`mailto:${CONTACT.email}`" class="link">email me</a>.
        </p>
        <a
          :href="CAL_INTRO_URL"
          target="_blank"
          rel="noopener noreferrer"
          class="btn"
          >Book a free intro call</a
        >
      </div>
    </section>
  </div>
</template>

<script setup>
import HandSketch from "@/components/HandSketch.vue";
import { CAL_INTRO_URL, CONTACT, PORTFOLIO_URL } from "@/config/site";

const routes = [
  {
    title: "Individual coaching",
    to: "/sessions",
    body: "For career uncertainty, major decisions, motivation, habits, relationships and other life challenges. One-hour sessions, online.",
  },
  {
    title: "Coaching for founders and leaders",
    to: "/sessions#leaders",
    body: "For people leading teams or organisations, covering both personal questions and the demands of leadership.",
  },
  {
    title: "Rationality workshops",
    to: "/workshops",
    body: "Interactive workshops on planning, disagreement and thinking in probabilities, for the public and for teams.",
  },
];

// Each step carries the same small drawing as the sketch beside the opening.
const steps = [
  { text: "Understand the actual problem.", sketch: "step-problem" },
  { text: "Question an unhelpful framing.", sketch: "step-framing" },
  { text: "Identify a tractable next step.", sketch: "step-next" },
  { text: "Try something small.", sketch: "step-small" },
  { text: "Review what happens.", sketch: "step-review" },
];

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
