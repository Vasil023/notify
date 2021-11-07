import VueRouter from 'vue-router'
import Vue from "vue";

Vue.use(VueRouter)

//Pages
import Home from "./pages/Home";
import NotifyPage from "./pages/NotifyPage";


 const routes = [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/notify',
      name: 'notify',
      component: NotifyPage
    }
  ]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router