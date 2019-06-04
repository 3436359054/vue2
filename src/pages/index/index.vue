<template>
<div class="index">
  <IndexHeader/>
  <IndexBanner :list="swiper"></IndexBanner>
  <div>swiper</div>
</div>
</template>

<script>
import axios from 'axios'
import IndexHeader from './header'
import IndexBanner from './banner'
export default {
  name: 'Index',
  components: {
    IndexHeader,
    IndexBanner
  },
  data () {
    return {
      swiper: []
    }
  },
  methods: {
    handleGetData () {
      axios.get('static/index.json')
        .then(this.handleGetSucc.bind(this))
        .catch(this.handleGetErr.bind(this))
    },
    handleGetSucc (res) {
      if (res.data.ret) {
        this.swiper = res.data.swiper
      }
    },
    handleGetErr () {
      console.log('hhhErr')
    }
  },
  created () {
    this.handleGetData()
  }
}
</script>

<style lang="stylus" scoped>
</style>
