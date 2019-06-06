<template>
<div class="index">
  <IndexHeader/>
  <IndexBanner :list="swiper"></IndexBanner>
  <IndexIcons :list="iconsData"></IndexIcons>
  <IndexSight :list="sightData"></IndexSight>
</div>
</template>

<script>
import axios from 'axios'
import IndexHeader from './header'
import IndexBanner from './banner'
import IndexIcons from './icons'
import IndexSight from './sight'
export default {
  name: 'Index',
  components: {
    IndexHeader,
    IndexBanner,
    IndexIcons,
    IndexSight
  },
  data () {
    return {
      swiper: [],
      iconsData: [],
      sightData: []
    }
  },
  methods: {
    handleGetData () {
      axios.get('/ap/index.json')
        .then(this.handleGetSucc.bind(this))
        .catch(this.handleGetErr.bind(this))
    },
    handleGetSucc (res) {
      this.swiper = res.data.swiper
      this.iconsData = res.data.iconsData
      this.sightData = res.data.sightData
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
