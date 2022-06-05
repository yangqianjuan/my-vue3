import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/main',
    name: 'main',
    redirect: 'main/role',
    component: () => import('@/views/main/index.vue'),
    children: [
      {
        path: '/role',
        name: 'role',
        component: () => import('@/views/main/role/index.vue')
      }
    ]
  }
]
const router = createRouter({
  routes,
  history: createWebHashHistory()
})
export default router
