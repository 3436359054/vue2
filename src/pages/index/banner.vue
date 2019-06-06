<template>
<div class="bgContaner">
  <swiper v-if="list.length" :options="swiperOption">
    <swiper-slide v-for="item in list" :key="item.id">
        <img class="bgImg" :src="item.imgUrl" alt>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'Indexbanner',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        }
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
@import "../../assets/stylus/varibles.styl"
.swiper-pagination >>> .swiper-pagination-bullet-active
  background: $bgColor
.bgContaner {
  overflow: hidden
  height: 0
  padding-bottom: 41.7%

  .bgImg {
    width: 100%
  }
}
</style>
