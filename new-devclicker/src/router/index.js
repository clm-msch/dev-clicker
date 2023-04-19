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
    }
  ]
})



export default router
