import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PricingPage from "../views/PricingPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    // Always scroll to top on navigation
    return { top: 0 };
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
    // Unknown URLs (including the retired /blog) land on the home page
    // instead of a blank screen.
    {
      path: "/:pathMatch(.*)*",
      redirect: { name: "home" },
    },
  ],
});

export default router;
