import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'code',
      component: () => import('../views/CodeView.vue')
    }
  ]
})



export default router
