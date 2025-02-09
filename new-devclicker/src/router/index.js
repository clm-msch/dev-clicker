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
      path: '/entreprise',
      name: 'entreprise',
      component: () => import('../views/EntrepriseView.vue')
    },
    {
      path: '/trophees',
      name: 'trophees',
      component: () => import('../views/TrophiesView.vue')
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: () => import('../views/ShoppingView.vue')
    },
    {
      path: '/reglages',
      name: 'reglages',
      component: () => import('../views/ReglagesView.vue')
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('../views/AuthView.vue')
    }
  ]
})
export default router
