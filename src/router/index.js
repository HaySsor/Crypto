import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      children: [
        {
          path: "/:id",
          name: "tab",
          component: () => import("@/views/childrenView/EmptySideView.vue"),
          props: true,
        },
        {
          path: "/summary",
          name: "summary",
          component: () => import("@/views/childrenView/SummaryView.vue"),
        },
      ],
    },
  ],
  linkExactActiveClass: "active-link",
});

export default router;
