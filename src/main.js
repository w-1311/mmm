import Vue from 'vue'
import App from './App.vue'

// 全局内容在这 包含样式
import  './assets/statics/site/css/style.css'

// 统一设置axios
import axios from 'axios'
// 所有Vue实例可以通过$axios来使用axios 有一段时间很流行 $http
Vue.prototype.$axios = axios
// 设置基地址 基础地址
axios.defaults.baseURL = 'http://111.230.232.110:8899'

// 路由相关  导入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 导入组件
import index from './components/index.vue'
import cart from './components/cart.vue'
import detail from './components/detail.vue'

// 规则 名字不要写错
let routes = [
  {
    path:"/",
    component:index
  },
  {
    path:"/index",
    component:index
  },
  {
    path:"/cart",
    component:cart
  },
  {
    path: '/detail/:id',
    component: detail
  }
]

//实例化路由对象
let router = new VueRouter({
  routes
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 挂载到顶级Vue实例上  设置到顶级Vue实例上
  router
}).$mount('#app')
