<!-- components/BackgroundArt.vue -->
<!--
  A few tangled threads in the page margins. Each one slowly unwinds into a
  calm line the first time it scrolls into view. Purely decorative: hidden
  from assistive technology, never intercepts clicks, and static for anyone
  who has asked their device to reduce motion.
-->
<template>
  <div
    ref="root"
    aria-hidden="true"
    class="pointer-events-none absolute inset-0 overflow-hidden -z-10"
  >
    <svg
      v-for="knot in placed"
      :key="knot.id"
      :ref="(el) => (knot.el = el)"
      :data-knot="knot.id"
      viewBox="0 0 280 560"
      class="absolute"
      :class="
        knot.big
          ? 'w-[980px] h-[1960px] opacity-[0.08] md:opacity-[0.13]'
          : 'w-[280px] h-[560px] opacity-[0.13] md:opacity-[0.26]'
      "
      :style="knot.style"
      fill="none"
    >
      <path
        :d="knot.d"
        :stroke="knot.color"
        stroke-width="1.4"
        vector-effect="non-scaling-stroke"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
</template>

<script setup>
import { nextTick, onBeforeUnmount, onMounted, reactive, ref, watch } from "vue";
import { useRoute } from "vue-router";

// Four different knots. `turns` and `ratio` set the shape of the tangle,
// `amp` its size. Colours are muted so none of them competes with the text.
const KNOTS = [
  { color: "#3A4A9F", turns: 44, ratio: 1.31, amp: 100, phase: 0.6 }, // blue
  { color: "#B07A2A", turns: 30, ratio: 2.0, amp: 82, phase: 0.2 }, // amber
  { color: "#A8506A", turns: 56, ratio: 0.77, amp: 72, phase: 1.1 }, // rose
  { color: "#2F7F79", turns: 36, ratio: 1.5, amp: 90, phase: 0.9 }, // teal
];

const SPACING = 1050; // px between knots down the page
const UNWIND_MS = 11000;
const TIGHT = 1; // fully tangled
const LOOSE = 0.14; // where it comes to rest: a line with a trace of curl

// The thread as an SVG path. `k` is how tangled it is, from 1 down to 0.
const threadPath = (knot, k) => {
  const N = 420;
  const turns = knot.turns * (0.25 + 0.75 * k);
  const amp = knot.amp * (0.15 + 0.85 * k);
  let d = "";
  for (let i = 0; i <= N; i++) {
    const t = i / N;
    const a = amp * (1 - t) ** 2;
    const th = turns * t ** 0.8;
    const x = 140 + a * Math.cos(th) * 1.15 + 16 * Math.sin(2.4 * Math.PI * t) * t;
    const y = 125 + 400 * t ** 1.5 + a * Math.sin(knot.ratio * th + knot.phase);
    d += `${i ? "L" : "M"}${x.toFixed(1)} ${y.toFixed(1)}`;
  }
  return d;
};

const root = ref(null);
const placed = reactive([]);
const route = useRoute();
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let resizeObserver = null;
let viewObserver = null;
let frame = null;

const easeInOut = (x) => (x < 0.5 ? 2 * x * x : 1 - (-2 * x + 2) ** 2 / 2);

// One animation loop for whichever knots are currently unwinding.
const tick = (now) => {
  let active = false;
  for (const knot of placed) {
    if (knot.startedAt === null || knot.done) continue;
    const progress = Math.min((now - knot.startedAt) / UNWIND_MS, 1);
    knot.d = threadPath(knot, TIGHT + (LOOSE - TIGHT) * easeInOut(progress));
    if (progress === 1) knot.done = true;
    else active = true;
  }
  frame = active ? requestAnimationFrame(tick) : null;
};

const startUnwinding = (knot) => {
  if (knot.startedAt !== null) return;
  knot.startedAt = performance.now();
  if (!frame) frame = requestAnimationFrame(tick);
};

// Place a knot every SPACING px, alternating margins, and none near the
// footer. Sits just outside the reading column, or at the screen edge on
// narrow screens where there is no margin.
const layout = () => {
  const height = root.value?.offsetHeight ?? 0;
  // The homepage has its own sketch beside the opening, so its margin knots
  // start one position further down.
  const first = route.path === "/" ? 1 : 0;
  const count = Math.max(
    first + 1,
    Math.min(KNOTS.length, Math.floor((height - 500) / SPACING) + 1),
  );
  if (count === placed.length + first && placed[0]?.page === route.path) return;

  viewObserver?.disconnect();
  placed.length = 0;
  for (let i = first; i < count; i++) {
    const side = i % 2 === 0 ? "left" : "right"; // CSS property used to position
    placed.push({
      ...KNOTS[i],
      page: route.path,
      id: `${route.path}-${i}`,
      el: null,
      startedAt: null,
      done: false,
      d: threadPath(KNOTS[i], reduceMotion ? 0.6 : TIGHT),
      style: {
        top: `${40 + i * SPACING}px`,
        [side]: "min(calc(50% + 23rem), calc(100% - 9rem))",
      },
    });
  }

  if (reduceMotion) return;
  // Wait for the elements to exist, then unwind each as it comes into view.
  requestAnimationFrame(() => {
    viewObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const knot = placed.find((k) => k.id === entry.target.dataset.knot);
          if (knot) startUnwinding(knot);
          viewObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );
    placed.forEach((knot) => knot.el && viewObserver.observe(knot.el));
  });
};

onMounted(() => {
  // Page height changes with every route, so re-place when it does.
  resizeObserver = new ResizeObserver(layout);
  resizeObserver.observe(root.value);
  layout();
});

// A new page gets its own set, tangled again.
watch(() => route.path, () => nextTick(layout));

onBeforeUnmount(() => {
  resizeObserver?.disconnect();
  viewObserver?.disconnect();
  if (frame) cancelAnimationFrame(frame);
});
</script>
