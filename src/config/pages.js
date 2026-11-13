// Per-page titles, descriptions and social previews. Read by the router (to
// update the tab title and tags as you navigate) and by vite.config.js (to
// write a static HTML file per page at build time — link previews in LinkedIn,
// Slack, WhatsApp and email never run JavaScript, so they only ever see that
// file). Plain data only: this is imported from Node as well as the browser.

export const SITE_URL = "https://rationalresilience.org";

const LOGO = {
  image: `${SITE_URL}/ratreslogo2.png`,
  width: 256,
  height: 256,
  card: "summary", // square logo: the small card, not the cropped large one
};

const TALK_PHOTO = {
  image: `${SITE_URL}/og-talk.jpg`,
  width: 1200,
  height: 630,
  card: "summary_large_image",
};

const NOINDEX = { robots: "noindex, follow" };

export const PAGES = {
  "/": {
    title: "Rational Resilience — Coaching and workshops with Vatsal Mehra",
    description:
      "One-to-one coaching and rationality workshops with Vatsal Mehra. Work through messy decisions, understand yourself better, and make progress on what matters to you.",
    ...LOGO,
  },
  "/sessions": {
    title: "Coaching — Rational Resilience",
    description:
      "One-hour online coaching sessions for career uncertainty, major decisions, motivation, habits and other life challenges. Also coaching for founders and leaders. Free 30-minute intro call.",
    ...LOGO,
  },
  "/workshops": {
    title: "Rationality workshops — Rational Resilience",
    description:
      "Interactive 90-minute workshops on realistic planning, productive disagreement and thinking in probabilities. For the public and for teams.",
    ...TALK_PHOTO,
  },
  "/about": {
    title: "About Vatsal Mehra — Rational Resilience",
    description:
      "Software engineer turned coach and rationality workshop facilitator. How I got here and what a session is like.",
    ...TALK_PHOTO,
  },
  "/contact": {
    title: "Contact — Rational Resilience",
    description:
      "Email me about coaching, leadership coaching or a workshop, or book a free 30-minute intro call.",
    ...LOGO,
  },
  // Booking utilities and the missing-page screen stay out of search results.
  "/book-session": {
    title: "Book a single session — Rational Resilience",
    description: "Book a one-hour coaching session.",
    ...LOGO,
    ...NOINDEX,
  },
  "/book-monthly": {
    title: "Start monthly coaching — Rational Resilience",
    description: "Book the first of four one-hour coaching sessions.",
    ...LOGO,
    ...NOINDEX,
  },
  "/404": {
    title: "Page not found — Rational Resilience",
    description: "That page doesn't exist.",
    ...LOGO,
    ...NOINDEX,
  },
};

// Pages worth a static HTML file of their own, so shared links preview with
// the right title and image. Also the list the sitemap is built from.
export const STATIC_PAGES = ["/sessions", "/workshops", "/about", "/contact"];

export const pageMeta = (path) => {
  const page = PAGES[path] ?? PAGES["/404"];
  const url =
    path === "/" || !PAGES[path] || path === "/404"
      ? `${SITE_URL}/`
      : `${SITE_URL}${path}`;
  return { robots: "index, follow", ...page, url };
};
