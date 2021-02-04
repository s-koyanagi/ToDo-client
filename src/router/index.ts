import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login.vue';
import Home from '../views/Home.vue';
import Kanban from '../views/Kanban.vue';
import { loginUser } from '@/store/modules/loginUser';

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
  if (to.matched.some(record => record.meta.requiresAuth)) {
    await loginUser.verifyAuthentication();
    if (loginUser.GET_IS_AUTHENTICATED) {
      next();
    } else {
      router.push({ path: '/' });
    }
  } else {
    next();
  }
});

export default router;
