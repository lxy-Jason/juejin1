import { createRouter,createWebHashHistory } from "vue-router";

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home/index.vue'),
  },
  {
    path: '/article',
    name: 'article',
    component: () => import('@/views/Article/index.vue'),
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router