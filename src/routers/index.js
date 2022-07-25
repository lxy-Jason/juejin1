import { createRouter } from "vue-router";
export const router=createRouter({
  history: createWebHashHistory(),
  routes: [
      {
            path:'/home',
            name:'/home',
            component:()=>import('@/views/Home/index.vue'),
        }
  ],
})