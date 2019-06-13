<template>
<div class="city">
  <cityHeader :list="hotCity" :allList="allCity"></cityHeader>
  <cityList :list="allCity" ref="allListCity"></cityList>
  <cityBar :list="allCity" @changeLetter="handleChangeLetter"></cityBar>
</div>
</template>

<script>
import axios from 'axios'
import cityHeader from './cityHeader'
import cityList from './cityList'
import cityBar from './cityBar'
export default {
  name: 'City',
  components: {
    cityHeader,
    cityList,
    cityBar
  },
  data () {
    return {
      hotCity: [],
      allCity: []
    }
  },
  methods: {
    handleGetData () {
      axios.get('/ap/city.json')
        .then(this.handleGetSucc.bind(this))
        .catch(this.handleGetErr.bind(this))
    },
    handleGetSucc (res) {
      this.hotCity && (this.hotCity = res.data.hotCity)
      this.allCity && (this.allCity = res.data.allCity)
    },
    handleGetErr () {
      console.log('hhhErr')
    },
    handleChangeLetter (key) {
      // key指的是cityBar传来的首字母
      this.$refs.allListCity.handleCityScrollTop(key)
    }
  },
  created () {
    this.handleGetData()
  }
}
</script>

<style lang="stylus" scoped>
.city
  position: fixed
  left: 0
  top: 0
  right: 0
  bottom: 0
  display: flex
  flex-direction: column
</style>
