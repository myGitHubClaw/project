import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueAwesomeSwiper from 'vue-awesome-swiper'
 
//清除基础样式
import './assets/styles/reset.css'
//解决移动端一像素边框问题
import './assets/styles/border.css'
//解决点击事件300毫秒延时问题
import fastClick from 'fastclick'

//引入iconfont图标字体
import './assets/styles/iconfont.css'
// 轮播图
import 'swiper/dist/css/swiper.css'


Vue.config.productionTip = false;
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
