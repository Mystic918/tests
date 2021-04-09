import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

// 1、home中组件未进行懒加载
// 2、about 、 nextTick 使用懒加载 并指定打包文件名为webpackChunkName，如果不指定，则以但文件打包

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/nextTick",
    name: "nextTick",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/nextTick.vue"),
  },
  {
    path: "/directives",
    name: "directives",
    component: (resolve) => require(["../views/directives.vue"], resolve),
  },
  {
    path: "/nextTick2",
    name: "nextTick2",
    component: (resolve) => require(["../views/nextTick2.vue"], resolve),
  },
  {
    path: "/vmodel",
    name: "vmodel",
    component: (resolve) => require(["../views/vmodel.vue"], resolve),
  },
  {
    path: "/vmodel2",
    name: "vmodel2",
    component: (resolve) => require(["../views/vmodel2.vue"], resolve),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
