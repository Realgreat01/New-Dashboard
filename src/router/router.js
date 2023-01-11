import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import ForgotPassword from "../views/ForgotPassword.vue";
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
          path: "users/:id",
          component: () => import("../views/admin/SingleUserView.vue"),
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
    {
      path: "/forgot-password",
      component: ForgotPassword,
      name: "forgot-password"
    }
  ],
});

export default router;
