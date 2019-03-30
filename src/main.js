import Vue from 'vue'
import App from './App.vue'

// 饿了吗ui导入
// 导入模块 安装饿了么ui : cnpm i element-ui --save
import ElementUI from 'element-ui';
// 导入样式
import 'element-ui/lib/theme-chalk/index.css';
// vue插件
Vue.use(ElementUI);

// 全局引入样式
import  './assets/statics/site/css/style.css'

// 统一设置axios
import axios from 'axios'
// 所有Vue实例可以通过$axios来使用axios 有一段时间很流行 $http
Vue.prototype.$axios = axios
// 设置基地址 基础地址
axios.defaults.baseURL = 'http://111.230.232.110:8899'

// 设置全局过滤器 并且可以传参
// 导入moment.js
import moment from 'moment'
Vue.filter('globalFormatTime', function(value,fmtTemplate){
  // 结合moment.js
  // 时间格式化模板 写死了
  if(fmtTemplate){
    // 如果传了参数 用传递的模板
    return moment(value).format(fmtTemplate)
  }else{
    return moment(value).format('YYYY-MM-DD')
  }
})

Vue.config.productionTip = false

// 导入抽取的路由
import router from './router.js'
// console.log(router)

new Vue({
  render: h => h(App),
  // 挂载到顶级Vue实例上  设置到顶级Vue实例上
  router
   // 下面的写法是  暴露时包裹 了对象的写法
  // router: router.router
}).$mount('#app')
