import Vue from 'vue'
import App from './App.vue'
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/radar'

Vue.config.productionTip = false

Vue.component('v-chart', ECharts)

new Vue({
  render: h => h(App),
}).$mount('#app')
