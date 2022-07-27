import { createRouter } from "vue-router";
export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: '/home',
      component: () => import('@/views/Home/index.vue'),
    },
    {
      path: '/',
      name: '/article',
      component: () => import('@/views/Article/index.vue'),
    }
  ],
})