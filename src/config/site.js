// Single source of truth for prices, booking links and contact details.
// Change a rate here and every page updates.

export const CAL_INTRO_URL = "https://cal.com/vatsal-mehra-tblt4g/30min";
export const CAL_SESSION_LINK = "vatsal-mehra-tblt4g/60min";
// The monthly package books its first session through the same event for now.
// Point this at a dedicated Cal.com event once one exists.
export const CAL_MONTHLY_LINK = CAL_SESSION_LINK;

// Personal portfolio: projects, timeline, education, résumé.
export const PORTFOLIO_URL = "https://vatsalmehra.com";

export const CONTACT = {
  email: "mehra.vatsal@gmail.com",
  telegram: "https://t.me/zerotimer",
  signal:
    "https://signal.me/#eu/LcnHg1Pc4iibfEwutJo9u3ZiBCZC0Kng9bGGHkWj6p9eVepYygBI7o8yL0q2i53D",
};

// Visitors outside India are quoted in USD, everyone else in rupees. The
// browser's timezone is a good enough signal and avoids sending anyone off to a
// third-party geolocation service.
const INDIA_TIMEZONES = ["Asia/Kolkata", "Asia/Calcutta"];

export const isInIndia = () => {
  try {
    return INDIA_TIMEZONES.includes(
      Intl.DateTimeFormat().resolvedOptions().timeZone,
    );
  } catch {
    return true; // if we can't tell, show the rupee price
  }
};

// Show one price, not both. These are separate rates for separate markets, not
// one rate converted — printing them side by side just invites the arithmetic
// and makes it look like a markup.
export const displayPrice = (tier) => ({
  amount: isInIndia() ? tier.inr : tier.usd,
  unit: tier.unit,
});

export const PRICING = {
  single: {
    inr: "₹2,000",
    unit: "/session",
    usd: "$50 USD",
    blurb:
      "For a specific decision, a stuck situation, or to find out whether working together fits.",
    features: [
      "A full hour on one situation, in depth",
      "Frameworks for thinking it through clearly",
      "Naming what is actually in the way",
      "Concrete next steps you leave with",
    ],
  },
  monthly: {
    inr: "₹8,000",
    unit: "/month",
    usd: "$200 USD",
    blurb:
      "Four weekly sessions that build on each other, plus support in between. For work that needs more than one conversation.",
    features: [
      "Four one-hour sessions, roughly weekly",
      "A plan we revisit as things change",
      "Message me between sessions when something comes up",
      "We adjust the approach based on what is actually working",
    ],
  },
};

// Coaching for founders and leaders is scoped and priced after a conversation,
// so there is no published rate.
export const LEADERSHIP = {
  sessionLength: "90 minutes",
  cadence: "weekly",
};

// Mail links with a subject, so an inquiry arrives labelled by purpose.
export const mailto = (subject) =>
  `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}`;

// The full twelve-topic catalogue, past dates and slides live here.
export const WORKSHOPS_SITE_URL = "https://rationalityworkshops.com";

// The three workshops to lead with. Titles, goals and ideas are taken from
// rationalityworkshops.com; `held` lists sessions that have actually run.
export const WORKSHOPS = [
  {
    slug: "realistic-planning",
    title: "Planning Without the Lies",
    subtitle: "Planning that survives reality",
    goal: "Catch over-optimistic assumptions, run a pre-mortem, and build plans with room for things to go wrong.",
    ideas: ["Planning fallacy", "Mental rehearsal", "Pre-hindsight and backplanning"],
    held: "Run twice in Bangalore, November 2025",
    slides:
      "https://drive.google.com/file/d/1b04VSj_N4dhgMQZEs655xCk6ITS-Mp22/view?usp=sharing",
  },
  {
    slug: "productive-disagreement",
    title: "Arguing Without Breaking Things",
    subtitle: "Disagreeing without the wreckage",
    goal: "Find the crux of disagreement, stay curious under fire, and leave conversations smarter than you entered.",
    ideas: ["Double crux", "Listening generously", "Curiosity over correctness"],
    held: "Run in Bangalore, March 2026",
    slides:
      "https://drive.google.com/file/d/1UwmwaVgUX8YrxmZrDdodHP3ysG8s6zAa/view?usp=sharing",
  },
  {
    slug: "bets-and-bayes",
    title: "Introduction to Bayesian Thinking",
    subtitle: "Tuning your inner odds-maker",
    goal: "Quantify your intuitions and update your thinking when new facts come in.",
    ideas: ["Priors and likelihoods", "Honest probability bets", "Calibration and fast updating"],
    held: "Run in Bangalore, October 2025",
    slides:
      "https://drive.google.com/file/d/1qQVtDoh1Aksg7I3DbjVBmlD-d0I3Ael1/view?usp=sharing",
  },
];
