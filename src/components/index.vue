<template>
  <div>
    <div class="section">
      <div class="location">
        <span>当前位置：</span>
        <a href="#/" class="router-link-active">首页</a> &gt;
        <a href="#/site/goodslist" class="router-link-exact-active router-link-active">购物商城</a>
      </div>
    </div>
    <div class="section">
      <div class="wrapper">
        <div class="wrap-box">
          <div class="left-220" style="margin: 0px;">
            <div class="banner-nav">
              <ul>
                <li>
                  <h3>
                    <i class="iconfont icon-arrow-right"></i>
                    <span>手机数码</span>
                    <p>
                      <span>手机通讯&nbsp;</span>
                      <span>摄影摄像&nbsp;</span>
                      <span>存储设备&nbsp;</span>
                    </p>
                  </h3>
                  <div class="item-box">
                    <dl>
                      <dt>
                        <a href="/goods/40.html">手机数码</a>
                      </dt>
                      <dd>
                        <a href="/goods/43.html">手机通讯</a>
                        <a href="/goods/43.html">摄影摄像</a>
                        <a href="/goods/43.html">存储设备</a>
                      </dd>
                    </dl>
                  </div>
                </li>
                <li>
                  <h3>
                    <i class="iconfont icon-arrow-right"></i>
                    <span>电脑办公</span>
                    <p>
                      <span>电脑整机&nbsp;</span>
                      <span>外设产品&nbsp;</span>
                      <span>办公打印&nbsp;</span>
                    </p>
                  </h3>
                  <div class="item-box">
                    <dl>
                      <dt>
                        <a href="/goods/40.html">电脑办公</a>
                      </dt>
                      <dd>
                        <a href="/goods/43.html">电脑整机</a>
                        <a href="/goods/43.html">外设产品</a>
                        <a href="/goods/43.html">办公打印</a>
                      </dd>
                    </dl>
                  </div>
                </li>
                <li>
                  <h3>
                    <i class="iconfont icon-arrow-right"></i>
                    <span>影音娱乐</span>
                    <p>
                      <span>平板电视&nbsp;</span>
                      <span>音响DVD&nbsp;</span>
                      <span>影音配件&nbsp;</span>
                    </p>
                  </h3>
                  <div class="item-box">
                    <dl>
                      <dt>
                        <a href="/goods/40.html">影音娱乐</a>
                      </dt>
                      <dd>
                        <a href="/goods/43.html">平板电视</a>
                        <a href="/goods/43.html">音响DVD</a>
                        <a href="/goods/43.html">影音配件</a>
                      </dd>
                    </dl>
                  </div>
                </li>
                <li>
                  <h3>
                    <i class="iconfont icon-arrow-right"></i>
                    <span>服装类</span>
                    <p>
                      <span>男装&nbsp;</span>
                      <span>女装&nbsp;</span>
                    </p>
                  </h3>
                  <div class="item-box">
                    <dl>
                      <dt>
                        <a href="/goods/40.html">服装类</a>
                      </dt>
                      <dd>
                        <a href="/goods/43.html">男装</a>
                        <a href="/goods/43.html">女装</a>
                      </dd>
                    </dl>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!--幻灯片-->
          <div class="left-705">
            <div class="banner-img">
              <!-- 使用饿了吗UI的走马灯替换轮播图 -->
              <!-- 高度跟兄弟节点类似 -->
              <el-carousel height="341px">
                <el-carousel-item v-for="(item,index) in sliderlist" :key="index">
                  <!-- <h3>{{ item }}</h3> -->
                  <router-link class="slider-a" :to="'/detail/'+item.id">
                    <img class="slider-img" :src="item.img_url" alt>
                  </router-link>
                  <!-- 增加自定义类名,方便修改样式 -->
                </el-carousel-item>
              </el-carousel>
            </div>
          </div>
          <!--/幻灯片-->
          <div class="left-220">
            <ul class="side-img-list">
              <li v-for="(item,index) in toplist" :key="index">
                <div class="img-box">
                  <label>{{ index+1 }}</label>
                  <img :src="item.img_url">
                </div>
                <div class="txt-box">
                  <a href="/goods/show-98.html">{{ item.title }}</a>
                  <!-- 使用全局过滤器替换 -->
                  <span>{{ item.add_time | globalFormatTime }}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部的区域 -->
    <!--eslint-disable-next-line-->
    <div class="section" v-for="item in goodsList">
      <div class="main-tit">
        <h2>{{item.catetitle}}</h2>
        <p>
          <!--eslint-disable-next-line-->
          <a href="/goods/43.html" v-for="it in item.level2catelist">{{it.subcatetitle}}</a>
          <a href="/goods/40.html">
            更多
            <i>+</i>
          </a>
        </p>
      </div>
      <div class="wrapper clearfix">
        <div class="wrap-box">
          <ul class="img-list">
            <!--eslint-disable-next-line-->
            <li v-for="it in item.datas">
              <!-- <a href="#/site/goodsinfo/87" class> -->
              <router-link :to="'/detail/'+it.artID">
                <div class="img-box">
                  <img :src="it.img_url">
                </div>
                <div class="info">
                  <h3>{{it.artTitle}}</h3>
                  <p class="price">
                    <b>{{it.sell_price}}</b>元
                  </p>
                  <p>
                    <strong>库存 {{it.stock_quantity}}</strong>
                    <span>
                      市场价：
                      <s>{{it.market_price}}</s>
                    </span>
                  </p>
                </div>
              </router-link>
              <!-- </a> -->
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 导入axios 先cnpm i axios --save
// import axios from "axios";//删除axios的引入
// 导入moment 先cnpm i moment --save
// import moment from "moment";//注释moment

export default {
  name: "index",
  // 数据
  data() {
    return {
      // 分类数据
      catelist: [],
      // 轮播图数据
      sliderlist: [],
      // 热卖数据
      toplist: [],
      // 底部的商品数据
      goodsList: []
    };
  },

  // // 过滤器 //注释本地过滤器
  // filters: {
  //   // value 过滤的数据
  //   formatTime(value) {
  //     //使用过滤器结合moment.js处理时间并返回 YYYY -MM -DD 是我们要格式化的格式 是固定的写法
  //     return moment(value).format("YYYY-MM-DD");
  //   }
  // },

  // 钩子函数 Vue实例创建完毕，并且组件的属性都设置完毕之后触发
  created() {
    //钩子函数中  获取数据
    // 顶部数据
    this.$axios //使用this.$axios来访问,不用写基地址
      .get("http://111.230.232.110:8899/site/goods/gettopdata/goods")
      .then(res => {
        // console.log(res);
        // 赋值 给该数组中的data属性
        this.catelist = res.data.message.catelist;
        this.sliderlist = res.data.message.sliderlist;
        this.toplist = res.data.message.toplist;
      });

    // 底部数据
    this.$axios //使用this.$axios来访问,不用写基地址
      .get("http://111.230.232.110:8899/site/goods/getgoodsgroup")
      .then(res => {
        //   console.log(res);
        this.goodsList = res.data.message;
      });
  }
};
</script>

<style>
/* 使用自己添加的类名修改样式 */
.slider-a {
  display: block;
  width: 100%;
  height: 100%;
}

.slider-img {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
