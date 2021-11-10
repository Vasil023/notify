import Vue from 'vue'
import App from './App.vue'
import router from "./routers";
import store from './store/index'

Vue.config.productionTip = false

import '../src/assets/scss/main.scss'

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
