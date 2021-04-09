import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//懒加载 插件
import lazy from "./directives/lazy/index.js";

Vue.config.productionTip = false;
//注册
Vue.use(lazy);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
