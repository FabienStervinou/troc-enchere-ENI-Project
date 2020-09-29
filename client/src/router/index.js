import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../components/auth/Login.vue';
import Logout from '../components/auth/Logout.vue';
import Register from '../components/auth/Register.vue';
import User from '../components/User.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/logout',
    name: 'logout',
    component: Logout
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/user:id',
    name: 'user',
    component: User
  },
  {
    path: '*',
    redirect: '/'
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
