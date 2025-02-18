import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/measurements',
      name: 'measurements',
      component: () => import('../views/Measurements.vue')
    },
    {
      path: '/tailors',
      name: 'tailors',
      component: () => import('../views/Tailors.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    }
  ]
})

export default router