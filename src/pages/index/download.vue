<template>
<div v-show="downloadShow" class="download" ref="download" @click="changeDownloadShow">
  {{downText}}
</div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'IndexDownload',
  data () {
    return {
      downText: ''
    }
  },
  computed: {
    ...mapState({
      downloadShow: 'downloadShow'
    })
  },
  methods: {
    ...mapMutations({
      changeDownloadShow: 'changeDownloadShow'
    }),
    judgeUser () {
      var user = navigator.userAgent
      if (user.indexOf('Android') > -1 || user.indexOf('Linux') > -1) {
        this.downText = '安卓手机随便下'
      } else if (user.indexOf('iPhone') > -1) {
        this.downText = '苹果手机随便下'
      } else {
        this.downText = '不是手机随便下'
      }
    }
  },
  created () {
    this.judgeUser()
  }
}
</script>
<style lang="stylus" scoped>
.download
  position: fixed
  left: 0
  right: 0
  bottom: 0
  height: 1rem
  background: #000
  color: #ffffff
</style>
