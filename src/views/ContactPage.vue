<!-- views/ContactPage.vue -->
<template>
  <div>
    <PageIntro>
    <h1 class="page-title">Contact</h1>
    <p class="lead">
      Write to me and I'll reply myself. If you'd rather talk, the
      <a
        :href="CAL_INTRO_URL"
        target="_blank"
        rel="noopener noreferrer"
        class="link"
        >free 30-minute intro call</a
      >
      is the quickest way.
    </p>
    </PageIntro>

    <div class="page">

    <h2 class="eyebrow">Email me about</h2>
    <ul class="rule mb-6">
      <li v-for="topic in topics" :key="topic.label" class="border-b border-line">
        <a :href="mailto(topic.subject)" class="group block py-5">
          <span class="text-[1.7rem] leading-snug font-medium group-hover:text-accent transition-colors"
            >{{ topic.label }}
            <span aria-hidden="true" class="text-accent">→</span></span
          >
          <span class="block text-muted text-[17px]">{{ topic.hint }}</span>
        </a>
      </li>
    </ul>
    <p class="text-muted mb-12">
      Or copy the address:
      <span class="text-ink select-all break-all">{{ CONTACT.email }}</span>
    </p>

    <h2 class="eyebrow">Other ways</h2>
    <ul class="space-y-2">
      <li>
        <a :href="CONTACT.telegram" target="_blank" rel="noopener noreferrer" class="link"
          >Telegram</a
        >
      </li>
      <li>
        <a :href="CONTACT.signal" target="_blank" rel="noopener noreferrer" class="link"
          >Signal</a
        >
      </li>
    </ul>
    </div>
  </div>
</template>

<script setup>
import PageIntro from "@/components/PageIntro.vue";
import { CONTACT, CAL_INTRO_URL, mailto } from "@/config/site";

const topics = [
  {
    label: "Coaching",
    subject: "Coaching question",
    hint: "A question before you book, or whether this is the right kind of help.",
  },
  {
    label: "Coaching for founders and leaders",
    subject: "Leadership coaching",
    hint: "Tell me a little about your role and what you'd like to work on.",
  },
  {
    label: "A workshop",
    subject: "Workshop inquiry",
    hint: "For a public date, or a workshop for your team or community.",
  },
];
</script>
