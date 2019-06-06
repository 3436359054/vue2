import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import vueSwiper from 'vue-awesome-swiper'
import '@/assets/css/reset.css'
import '@/assets/css/iconfont/iconfont.css'
import '@/assets/css/iconfont/start/iconfont.css'
import 'swiper/dist/css/swiper.css'
Vue.use(vueSwiper)
FastClick.attach(document.body)
Vue.config.productionTip = false

let vm = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
Vue.use({
  vm
})
