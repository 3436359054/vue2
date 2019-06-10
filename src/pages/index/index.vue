<template>
  <div class="index">
    <IndexHeader></IndexHeader>
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
import {mapState, mapMutations} from 'vuex'

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
  computed: {
    ...mapState({
      city: 'city'
    }),
    screenSize () {
      return parseInt(window.screen.width / 375 * 50)
    }
  },
  methods: {
    ...mapMutations({
      changeCity: 'changeCity'
    }),
    getIndexData () {
      axios.get('/ap/index.json?city=' + this.city)
        .then(this.handleGetSucc.bind(this))
        .catch(this.handleGetErr.bind(this))
    },
    handleGetSucc (res) {
      if (res && res.data && res.data.ret) {
        if (!this.city) {
          this.changeCity(res.data.localCity)
        }
        this.swiper && (this.swiper = res.data.swiper)
        this.iconsData && (this.iconsData = res.data.iconsData)
        this.sightData && (this.sightData = res.data.sightData)
      } else {
        this.handleGetErr()
      }
    },
    handleGetErr () {
      console.log('hhhErr')
    },
    handleHtmlFontSize () {
      document.documentElement.style.cssText = 'font-size:' + this.screenSize + 'px'
    }
  },
  watch: {
    city () {
      this.getIndexData()
    }
  },
  created () {
    // 获取首页数据
    this.getIndexData()
    // 处理不同设备比例
    this.handleHtmlFontSize()
  }
}
</script>

<style lang="stylus" scoped>
</style>
