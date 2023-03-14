import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      // function to redirect to another route with a condition
      // redirect: () => { 
      //   const condition = false
      //   if (condition) {
      //     return '/about';
      //   }else{
      //     return '/';
      //   }
      // }
    },
    {
      path: '/code',
      name: 'code',
      component: () => import('../views/CodeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})
export default router
