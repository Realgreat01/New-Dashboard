import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import AdminPage from "../views/admin/AdminView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/admin",
      component: AdminPage,
      children: [
        {
          path: "",
          component: () => import("../views/admin/DashboardView.vue"),
        },
        {
          path: "users",
          component: () => import("../views/admin/UsersView.vue"),
        },
        {
          path: "networks",
          component: () => import("../views/admin/NetworksView.vue"),
        },
        {
          path: "organizations",
          component: () => import("../views/admin/OrganizationsView.vue"),
        },
        {
          path: "drivers",
          component: () => import("../views/admin/DriversView.vue"),
        },
      ],
    },
  ],
});

export default router;
