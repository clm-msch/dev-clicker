import { createRouter, createWebHistory } from 'vue-router'
import CodeView from '../views/NewCodeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'code',
      component: CodeView,
    },
    {
      path: '/design',
      name: 'design',
      component: () => import('../views/DesignView.vue')
    },
    {
      path: '/missions',
      name: 'missions',
      component: () => import('../views/MissionView-copy.vue')
    },
    {
      path: '/invest',
      name: 'invest',
      component: () => import('../views/InvestView.vue')
    },
    {
      path: '/soon',
      name: 'soon',
      component: () => import('../views/SoonView.vue')
    },
    {
      path: '/shop',
      name: 'shop',
      component: () => import('../views/ShopView.vue')
    },
    {
      path: '/achivements',
      name: 'achivements',
      component: () => import('../views/AchivementsView.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('../views/UserView.vue')
    },
    {
      path: '/reglages',
      name: 'reglages',
      component: () => import('../views/InvestView.vue')
    },
    // {
    //   path: '/reglages',
    //   name: 'réglages',
    //   component: () => import('../views/ReglageView.vue')
    // },
  ]
})
export default router
