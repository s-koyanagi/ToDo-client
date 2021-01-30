import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login.vue';
import Home from '../views/Home.vue';
import Kanban from '../views/Kanban.vue';
import axios, { AxiosError, AxiosResponse } from 'axios';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/kanban',
    name: 'kanban',
    component: Kanban,
    meta: {
      requiresAuth: true,
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async (to, from, next) => {
  let isAuthenticated: boolean = false;
  if (to.matched.some(record => record.meta.requiresAuth)) {
    await axios
      .post('/auth/verify')
      .then((res: AxiosResponse) => {
        isAuthenticated = true;
      })
      .catch((error: AxiosError) => {});

    if (isAuthenticated) {
      next();
      console.log('success!!');
    } else {
      router.push({ path: '/' });
      console.log('failed!!');
    }
  } else {
    next();
  }
});

export default router;
