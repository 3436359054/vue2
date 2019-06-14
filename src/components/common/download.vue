<template>
  <div v-show="downloadShow" class="download" @click="changeDownloadShow">
    <slot></slot>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'Download',
  computed: {
    ...mapState({
      downloadShow: 'downloadShow'
    })
  },
  methods: {
    ...mapMutations({
      changeDownloadShow: 'changeDownloadShow'
    })
  }
}
</script>
<style lang="stylus" scoped>
.download
  position: fixed
  left: 0
  right: 0
  top: 5rem
  height: 2rem
  background: #000
  color: #ffffff
  z-index: 3
</style>
