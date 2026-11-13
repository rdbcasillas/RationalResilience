import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PricingPage from "../views/PricingPage.vue";
import { pageMeta } from "@/config/pages";
import { applyMetaToDocument } from "@/config/applyMeta";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to) {
    // Top of the page on navigation, unless the link targets a section.
    return to.hash ? { el: to.hash, top: 24 } : { top: 0 };
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/sessions",
      name: "sessions",
      component: PricingPage,
    },
    {
      path: "/workshops",
      name: "workshops",
      component: () => import("../views/WorkshopsPage.vue"),
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/ContactPage.vue"),
    },
    {
      path: "/book-session",
      name: "book-session",
      component: () => import("../views/BookingPage.vue"),
    },
    {
      path: "/book-monthly",
      name: "book-monthly",
      component: () => import("../views/MonthlyBookingPage.vue"),
    },
    // Unknown URLs get a proper "page not found" screen.
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: () => import("../views/NotFoundPage.vue"),
      meta: { page: "/404" },
    },
  ],
});

// Keep the tab title, description, canonical and social tags in step with the
// page. Unknown paths redirect home, so they pick up the homepage values.
router.afterEach((to) => {
  applyMetaToDocument(document, pageMeta(to.meta.page ?? to.path));
});

export default router;
