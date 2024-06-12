import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import DefaultLayout from '../layouts/defaultLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: DefaultLayout,
      children: [
        {
          path: '',
          name: 'HomePage',
          component: HomeView
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/signup',
      name: 'signUpView',
      component: () => import('../views/FormsView.vue')
    },
    {
      path: '/login',
      name: 'loginView',
      component: () => import('../views/LoginView.vue')
    }
  ]
})

export default router
