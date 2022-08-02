import { createRouter, createWebHistory } from "vue-router";
import HousesView from "../views/HousesView.vue";

const routes = [
  {
    path: "/",
    name: "houses",
    component: HousesView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "nav_active_link",
});

export default router;
