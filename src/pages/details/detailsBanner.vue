<template>
<div>
  <div class="details" @click="handleClick">
    <img class="details_img" :src="banner.imgUrl" alt="">
  </div>
  <Draw :list="list" ref="Draw"></Draw>
</div>

</template>

<script>
import Draw from '@/components/common/drawloop'
export default {
  name: 'detailsBanne',
  props: {
    banner: Object,
    list: Array
  },

  components: {
    Draw
  },
  methods: {
    handleClick () {
      this.$refs.Draw.drawShow = true
    }
  }
}
</script>
<style lang="stylus" scoped>
.details
  overflow: hidden
  height: 0
  padding-bottom: 55%
  .details_img
    width: 100%
</style>
