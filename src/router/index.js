import Vue from "vue";
import VueRouter from "vue-router";

import Login from '@/views/Login.vue';
import Session from '@/views/Session.vue';
import Landing from '@/views/Landing.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login
  },
  {
    path: "/session",
    name: "Session",
    component: Session
  },
  {
    path: "/landing",
    name: "Landing",
    component: Landing
  }
];

const router = new VueRouter({
  routes
});

export default router;
