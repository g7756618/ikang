// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 导入axios库
import Axios from 'axios'
// 导入Mint-ui库
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
// 导入vue-amap库
// import AMap from 'vue-amap'
// 导入js-cookie
import Cookie from 'js-cookie'
// 导入字体图标
import 'font-awesome/css/font-awesome.css'

Vue.use(Mint)
// Vue.use(AMap)
// AMap.initAMapApiLoader({
//   // 高德的key
//   key: '3c526e6179bb7ec3e8110b2183de9280',
//   // 插件集合
//   plugin: ['AMap.Geolocation']
// });

Vue.config.productionTip = false
Vue.prototype.$axios = Axios
Vue.prototype.$cookie = Cookie

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
