<template>
<div class="index">
  <IndexHeader/>
  <IndexBanner :list="swiper"></IndexBanner>
  <IndexIcons :list="iconsData"></IndexIcons>
</div>
</template>

<script>
import axios from 'axios'
import IndexHeader from './header'
import IndexBanner from './banner'
import IndexIcons from './icons'
export default {
  name: 'Index',
  components: {
    IndexHeader,
    IndexBanner,
    IndexIcons
  },
  data () {
    return {
      swiper: [],
      iconsData: []
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
        this.iconsData = res.data.iconsData
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
