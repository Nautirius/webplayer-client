import Vue from 'vue'
import App from './App.vue'
import vuex from "./vuex/index"

Vue.config.productionTip = false

new Vue({
  store: vuex,
  render: h => h(App),
}).$mount('#app')
