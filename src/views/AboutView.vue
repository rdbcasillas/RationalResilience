<!-- views/AboutView.vue -->
<template>
  <div>
    <PageIntro>
      <h1 class="page-title">About</h1>
      <p class="lead">
        I'm Vatsal Mehra. I help people think clearly about hard things, stay
        in contact with what they feel, and act on both.
      </p>
    </PageIntro>

    <div class="page">

    <img
      src="@/assets/images/vatsal-talk.jpg"
      alt="Vatsal Mehra speaking at a podium"
      class="rounded-lg w-full aspect-[3/2] object-cover mb-12"
    />

    <section class="mb-12">
      <h2 class="section-title">How I got here</h2>
      <div class="space-y-5">
        <p>
          I spent over a decade
          <a
            :href="PORTFOLIO_URL"
            target="_blank"
            rel="noopener noreferrer"
            class="link"
            >building software and solving genomics problems</a
          >. Somewhere in there I noticed that the technical puzzles were not
          the part that held me. Helping people untangle their own lives was.
        </p>
        <p>
          I started with rationality and critical thinking, and spent years on
          the question of how people make better decisions. Working with people
          one-to-one showed me where that runs out. If you're frightened,
          exhausted or torn between two things, a clean analysis doesn't help
          much on its own. The thinking and the feeling need dealing with
          together, and that's what I try to do.
        </p>
        <p>
          Today I coach individuals, founders and leaders. I've also designed
          and facilitated
          <router-link to="/workshops" class="link"
            >interactive workshops</router-link
          >
          on subjects such as the planning fallacy, cognitive biases,
          self-deception, decision-making, and turning intentions into habits.
        </p>
      </div>
    </section>

    <section class="mb-12">
      <h2 class="section-title">What a session is like</h2>
      <div class="space-y-5">
        <p>
          Individual sessions are an hour, online. We might start from
          something you bring, continue from last time, or pick up something I
          think needs discussing. Sometimes I ask questions, sometimes I suggest a
          framework or offer a perspective, and sometimes we design a small
          experiment for you to try. I also use parts work, authentic relating
          practices, or simply staying with something uncomfortable for long
          enough to understand it.
        </p>
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

    <section class="mb-12">
      <h2 class="section-title">The rest of what I do</h2>
      <p>
        Coaching is one strand. My personal site has the rest: the projects I'm
        building, a timeline across engineering, bioinformatics, teaching and
        community work, and my education and résumé. It's at
        <a
          :href="PORTFOLIO_URL"
          target="_blank"
          rel="noopener noreferrer"
          class="link"
          >vatsalmehra.com</a
        >.
      </p>
    </section>

    <section class="rule pt-12">
      <h2 class="section-title">Want to talk?</h2>
      <p class="mb-6">The first call is free and there's nothing to commit to.</p>
      <div class="flex flex-wrap items-center gap-x-6 gap-y-4">
        <a
          :href="CAL_INTRO_URL"
          target="_blank"
          rel="noopener noreferrer"
          class="btn"
          >Book a free intro call</a
        >
        <router-link to="/sessions" class="link">See coaching and prices</router-link>
      </div>
    </section>
    </div>
  </div>
</template>

<script setup>
import PageIntro from "@/components/PageIntro.vue";
import { CAL_INTRO_URL, PORTFOLIO_URL } from "@/config/site";
</script>
