<!-- components/HandSketch.vue -->
<!--
  Renders one of the hand-drawn sketches from src/config/sketches.js, drawing
  its lines in one after another the first time it scrolls into view.
  Decorative by default (hidden from assistive technology); pass `label` when
  the sketch says something the surrounding text does not.
-->
<template>
  <svg
    ref="el"
    :viewBox="sketch.viewBox"
    :role="label ? 'img' : undefined"
    :aria-label="label || undefined"
    :aria-hidden="label ? undefined : 'true'"
    fill="none"
    :stroke-width="strokeWidth"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="sketch"
    :class="{ 'is-in': visible }"
  >
    <path
      v-for="(path, i) in sketch.paths"
      :key="i"
      class="draw"
      pathLength="1"
      :d="path.d"
      :stroke="path.tone === 'accent' ? '#3A4A9F' : '#1C1917'"
      :stroke-opacity="path.tone === 'accent' ? 0.75 : 0.5"
      :style="{ animationDelay: `${i * pace}s` }"
    />
    <text
      v-for="(note, i) in sketch.labels"
      :key="note.text + i"
      class="note"
      :x="note.x"
      :y="note.y"
      :style="{ animationDelay: `${0.4 + (i / sketch.labels.length) * sketch.paths.length * pace}s` }"
    >
      {{ note.text }}
    </text>
  </svg>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { SKETCHES } from "@/config/sketches";

const props = defineProps({
  name: { type: String, required: true },
  label: { type: String, default: "" },
  // Seconds between one line starting and the next.
  pace: { type: Number, default: 0.38 },
  strokeWidth: { type: Number, default: 1.5 },
});

const sketch = computed(() => SKETCHES[props.name]);
const el = ref(null);
const visible = ref(false);
let observer = null;

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) return;
      visible.value = true;
      observer.disconnect();
    },
    { threshold: 0.4 },
  );
  observer.observe(el.value);
});

onBeforeUnmount(() => observer?.disconnect());
</script>

<style scoped>
.note {
  font-family: "Caveat", cursive;
  font-size: 21px;
  fill: #1c1917;
  fill-opacity: 0.72;
  stroke: none;
  opacity: 0;
}

.draw {
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
}

.is-in .draw {
  animation: draw-in 1.3s ease forwards;
}

.is-in .note {
  animation: note-in 0.9s ease forwards;
}

@keyframes draw-in {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes note-in {
  to {
    opacity: 1;
  }
}

@media (prefers-reduced-motion: reduce) {
  .draw,
  .note {
    animation: none !important;
    stroke-dashoffset: 0;
    opacity: 1;
  }
}
</style>
