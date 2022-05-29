import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router'
const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: () => {
      import('@/views/login/index.vue')
    }
  }
]

export default createRouter({
  routes,
  history: createWebHashHistory()
})
