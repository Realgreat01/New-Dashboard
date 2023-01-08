import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Toasted from 'vue-toasted';
import axios from 'axios'
import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)
Vue.config.productionTip = false
Vue.use(axios)
Vue.use(Toasted,{duration: 10000, keepOnHover: true, position: "top-right", fullWidth:true, theme:"toasted-primary", singleton:true, });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')