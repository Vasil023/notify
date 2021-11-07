import Router from 'vue-router'
import Vue from "vue";

Vue.use(Router)

//Pages
import Home from "./pages/Home";
import Notify from "./pages/Notify";

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/notify',
      name: 'notify',
      component: Notify
    }
  ]
})