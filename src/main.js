import Vue from 'vue'
import App from './App.vue'

// 全局内容在这 包含样式
import  './assets/statics/site/css/style.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
