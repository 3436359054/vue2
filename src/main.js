import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import vueSwiper from 'vue-awesome-swiper'
import VueLazyload from 'vue-lazyload'
import store from '@/common/store'
import '@/assets/css/reset.css'
import '@/assets/css/iconfont/iconfont.css'
import '@/assets/css/iconfont/start/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.use(vueSwiper)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'http://img1.qunarzz.com/sight/p0/201405/30/2622d9bd8eac260f61a571e8725af791.jpg_200x200_2545b7fd.jpg',
  loading: 'http://img1.qunarzz.com/sight/p0/201405/30/2622d9bd8eac260f61a571e8725af791.jpg_200x200_2545b7fd.jpg',
  attempt: 1
})
FastClick.attach(document.body)
Vue.config.productionTip = false

let vm = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
Vue.use({
  vm
})
