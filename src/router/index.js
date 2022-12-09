import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '../views/NotFound.vue'
import Drivers from '../views/DriversView.vue'
import Riders from '../views/RiderView.vue'
import Organizations from '../views/OrganizationView.vue'
import Users from '../views/UsersView.vue'
import Networks from '../views/NetworkView.vue'
import Dashboard from '../views/DashboardView.vue'
import Logout from '../views/LogoutView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },
  {
    path: '/forgot',
    name: 'forgot',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ForgotPassword.vue')
  },
  {
    path: '*',
    name: 'Not Found',
    component: NotFound
  },
  {
    path: '/riders',
    name: 'Riders',
    component: Riders
  },
  {
    path: '/organizations',
    name: 'Organizations',
    component: Organizations
  },
  {
    path: '/users',
    name: 'Users',
    component: Users
  },
  {
    path: '/drivers',
    name: 'Drivers',
    component: Drivers
  },
  {
    path: '/networks',
    name: 'Networks',
    component: Networks
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
