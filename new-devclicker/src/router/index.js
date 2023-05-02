import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'code',
      component: () => import('../views/CodeView.vue')
    },
    {
      path: '/missions',
      name: 'missions',
      component: () => import('../views/MissionsView.vue')
    },
    {
      path: '/investissement',
      name: 'investissement',
      component: () => import('../views/InvestView.vue')
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('../views/AuthView.vue')
    }
  ]
})


export default router
