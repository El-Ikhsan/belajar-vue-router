import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Users from '../views/User.vue';
import NotFound from '../views/NotFound.vue';
import Aboute from "@/views/AboutView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: "/home"
      
    },
    {
      path: '/home',
      component: HomeView,
      children: [{
        path: "about",
        component: Aboute,
        alias: ['/h/about', '/home/about'],
      }],
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/users/:username(\\W+)?/:id(\\d+)',
      name: 'users12',
      component: Users,
    },
    { 
      path: '/:pathMatch(.*)*', 
      name: 'NotFound',
      component: NotFound },
  ],
})

export default router;
