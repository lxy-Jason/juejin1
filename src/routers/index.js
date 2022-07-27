import { createRouter ,createWebHashHistory} from "vue-router"; 
export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/home',
      name: '/home',
      component: () => import('@/views/Home/index.vue'),
    },{
      path:'/article',
      name:'/article',
      component:() => import('@/views/Article/index.vue')
    }
  ],
})