import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/main/Home.vue';
import Login from '../views/Login.vue';


Vue.use(VueRouter);

const routes = [
   {
    path: '/',
    name: 'login',
    // component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
    component: Login,
  },
  {
    path: '/main',
    name: 'main',
    component: () => import(/* webpackChunkName: "main" */ '../views/Main.vue'),
    // component: () => import(/* webpackChunkName: "about" */ '../views/main/Home.vue'),
    children:[{
      path: 'home',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ '../views/main/Home.vue'),
    },
    {
      path: 'todo',
      name: 'todo',
      component: () => import(/* webpackChunkName: "to" */ '../views/main/To.vue'),
    },{
      path: 'about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ '../views/main/About.vue'),
    }],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
