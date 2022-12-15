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
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // },
  {
    path: '/login',
    name: 'login',
    meta:{auth:false},
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
    component: NotFound,
    meta:{auth:true},
  },
  {
    path: '/riders',
    name: 'Riders',
    component: Riders,
    meta:{auth:true},
  },
  {
    path: '/organizations',
    name: 'Organizations',
    component: Organizations,
    meta:{auth:true},
  },
  {
    path: '/users',
    name: 'Users',
    component: Users,
    meta:{auth:true},
  },
  {
    path: '/drivers',
    name: 'Drivers',
    component: Drivers,
    meta:{auth:true},
  },
  {
    path: '/networks',
    name: 'Networks',
    component: Networks,
    meta:{auth:true},
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta:{auth:true},

  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout
  }
]

router.beforeEach(()=>{

})

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
