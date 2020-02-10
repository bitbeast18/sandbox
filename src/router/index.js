import Vue from "vue";
import VueRouter from "vue-router";

import Login from '@/views/Login.vue';
import MonacoEditor from '@/views/MonacoEditor.vue';
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
    component: MonacoEditor
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
