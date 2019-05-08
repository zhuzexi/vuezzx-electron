import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import Bus from './lib/bus'
import iview from 'iview'
import 'iview/dist/styles/iview.css'
import '@/assets/css/style.css'
// import BaiduMap from 'vue-baidu-map'
// Vue.use(BaiduMap, {
//   // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
//   ak: 'GcCoidvp9YwdGhu2NanuwMGfnsgkx5GG'
// })
Vue.use(iview)
Vue.config.productionTip = false
Vue.prototype.$bus = Bus

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
