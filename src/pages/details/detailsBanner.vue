<template>
<div class="details">
  <img class="details_img" :src="banner.imgUrl" alt="">
</div>
</template>

<script>
export default {
  name: 'detailsBanne',
  props: {
    banner: Object
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
