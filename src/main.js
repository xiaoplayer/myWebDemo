import Vue from 'vue'
import App from './App.vue'
import beMap from  '@best/map'

Vue.config.productionTip = false
Vue.use(beMap)

new Vue({
  render: h => h(App),
}).$mount('#app')
