import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from "./router/router"
import VueRouter from 'vue-router'
import VueChart from 'vue-chartjs'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(VueRouter)
Vue.use(VueChart)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
