import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    city: localStorage.city || ''
  },
  mutations: {
    changeCity (state, changeCity) {
      state.city = changeCity
      localStorage.city = changeCity
    },
    changeIndexCity (state, changeIndexCity) {
      state.city = changeIndexCity
      localStorage.city = changeIndexCity
    }
  }
})
export default store
