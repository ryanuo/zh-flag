import Vue from 'vue'
import App from './App.vue'
// 海报模板插件
import { fabric } from 'fabric'
import './index.css'
import "animate.css"
import './assets/css/strap.min.css'
Vue.config.productionTip = false
Vue.use(fabric)
new Vue({
  render: h => h(App),
}).$mount('#app')
