import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue')
  },
  {
    path: '/jobs',
    name: 'job',
    component: () => import(/* webpackChunkName: "job" */ '../views/JobView.vue')
  },
  {
    path: '/jobs/:id',
    name: 'jobDetails',
    component: () => import(/* webpackChunkName: "jobDetails" */ '../views/jobs/jobDetails.vue'),
    props:true
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
    path:'/:patchMatch(.*)*',
    name:'notfound',
    component: () => import(/* webpackChunkName: "404 error" */ '../views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
