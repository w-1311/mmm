import Vue from 'vue'
import App from './App.vue'

// 全局内容在这 包含样式
import  './assets/statics/site/css/style.css'

// 路由相关  导入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 导入组件
import index from './components/index.vue'
import cart from './components/cart.vue'

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
