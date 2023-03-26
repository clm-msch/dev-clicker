import { createRouter, createWebHistory } from 'vue-router'
import CodeView from '../views/CodeView.vue'

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
      component: () => import('../views/MissionView.vue')
    },
    {
      path: '/soon',
      name: 'soon',
      component: () => import('../views/SoonView.vue')
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
      component: () => import('../views/NewCodeView.vue')
    },
    // {
    //   path: '/reglages',
    //   name: 'réglages',
    //   component: () => import('../views/ReglageView.vue')
    // },
  ]
})
export default router
