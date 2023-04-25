import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: () => import('../views/WelcomeView.vue')
    },
    {
      path: '/code',
      name: 'code',
      component: () => import('../views/CodeView.vue')
    },
    {
      path: '/missions',
      name: 'missions',
      component: () => import('../views/MissionsView.vue')
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('../views/AuthView.vue')
    }
  ]
})


export default router
