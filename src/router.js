// 导入Vue
import Vue from "vue";

// 路由相关  导入路由
import VueRouter from "vue-router";
Vue.use(VueRouter);

// 导入组件
import index from "./components/index.vue";
import cart from "./components/cart.vue";
import detail from "./components/detail.vue";
import userContainer from "./components/userContainer.vue";
import userIndex from "./components/userIndex.vue";
import userOrder from "./components/userOrder.vue";
import userDetail from "./components/userDetail.vue";

// 规则 名字不要写错
let routes = [
  {
    path: "/",
    component: index
  },
  {
    path: "/index",
    component: index
  },
  {
    path: "/cart",
    component: cart
  },
  // 详情组件 需要根据不同的商品 显示不同的结果
  // 携带了id过去
  {
    path: "/detail/:id",
    component: detail
  },
  // 会员中心组件
  {
    path: "/user",
    component: userContainer,
    // 嵌套路由的属性
    children: [
      {
        path: "Index", // /user/Index
        component: userIndex
      },
      {
        path: "Order", // /user/Order
        component: userOrder
      },
      {
        path: "Detail", // /user/Detail
        component: userDetail
      }
    ]
  }
];

//实例化路由对象
let router = new VueRouter({
  routes
});

// 暴露出去
export default router
// 为了使用方便 不需要包裹对象
// export default {
//   router
// }
