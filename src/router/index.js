import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "houses",
    component: () => import("@/views/HousesView.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/AboutView.vue"),
  },
  {
    path: "/createListing",
    name: "create",
    component: () => import("@/views/CreateListingView.vue"),
  },
  {
    path: "/details/:id",
    name: "details",
    component: () => import("@/views/DetailsView.vue"),
    props: true,
  },
  {
    path: "/edit/:id",
    name: "edit",
    component: () => import("@/views/EditListingView.vue"),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "nav_active_link",
});

export default router;
