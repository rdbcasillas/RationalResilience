<!-- views/WorkshopsPage.vue -->
<template>
  <div>
    <PageIntro>
      <h1 class="page-title">Rationality workshops</h1>
      <p class="lead mb-5">
        Interactive workshops on how to think well: planning, weighing
        evidence, disagreeing and making decisions.
      </p>
      <p class="mb-5">
        Most of our schooling focuses on subjects and facts, but rarely on how
        to think well. These sessions are 90 minutes of discussion and
        exercises, built around practising a skill instead of just hearing
        about it.
      </p>
      <p class="text-muted">
        Earlier workshops in this series were free to attend, supported by a
        grant from the Effective Altruism Infrastructure Fund.
      </p>
    </PageIntro>

    <!-- The three to lead with -->
    <section class="page pb-16">
      <h2 class="eyebrow">Workshops I'm offering now</h2>
      <ul class="rule wide">
        <li
          v-for="workshop in WORKSHOPS"
          :key="workshop.slug"
          class="border-b border-line py-9 md:grid md:grid-cols-[minmax(0,46rem)_minmax(0,280px)] md:gap-12 md:items-center"
        >
          <div>
            <h3 class="text-[1.7rem] leading-snug mb-1">{{ workshop.title }}</h3>
            <p class="text-muted mb-4">{{ workshop.subtitle }}</p>
            <p class="mb-4">{{ workshop.goal }}</p>
            <p class="text-[17px] text-muted mb-4">
              Covers: {{ workshop.ideas.join(", ") }}.
            </p>
            <p class="text-[17px] text-muted">
              {{ workshop.held }}.
              <a
                :href="workshop.slides"
                target="_blank"
                rel="noopener noreferrer"
                class="link"
                >See the slides</a
              >
            </p>
          </div>
          <HandSketch
            :name="workshop.slug"
            :pace="0.3"
            class="w-full max-w-[280px] h-auto mt-6 md:mt-0"
          />
        </li>
      </ul>
      <p class="mt-6 text-muted">
        The full series has twelve topics. The catalogue, past dates and
        materials are at
        <a
          :href="WORKSHOPS_SITE_URL"
          target="_blank"
          rel="noopener noreferrer"
          class="link"
          >rationalityworkshops.com</a
        >.
      </p>
    </section>

    <!-- Two routes -->
    <section class="page">
      <div class="grid md:grid-cols-2 gap-6">
        <div class="card flex flex-col">
          <h2 class="text-[1.7rem] leading-snug mb-3">Attend a public workshop</h2>
          <p class="text-muted mb-6 flex-1">
            There are no public dates scheduled right now. Email me and I'll
            let you know when the next one is announced.
          </p>
          <a :href="mailto('Public workshop dates')" class="btn-quiet text-center"
            >Ask about the next date</a
          >
        </div>
        <div class="card flex flex-col">
          <h2 class="text-[1.7rem] leading-snug mb-3">For your team or community</h2>
          <p class="text-muted mb-6 flex-1">
            I can run any of these for a group. Tell me who it's for, roughly
            how many people, and which topic interests you. It's fine if you
            don't know yet.
          </p>
          <a :href="mailto('Workshop for a group')" class="btn text-center"
            >Ask about a workshop</a
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import HandSketch from "@/components/HandSketch.vue";
import PageIntro from "@/components/PageIntro.vue";
import { WORKSHOPS, WORKSHOPS_SITE_URL, mailto } from "@/config/site";
</script>
