<template>
  <swiper v-if="list.length>1" :options="swiperOption">
    <swiper-slide v-for="item in list" :key="item.id">
      <div class="bgContaner">
        <img class="bgImg" :src="item.imgUrl" alt>
      </div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
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
// .swiper-pagination >>>
.bgContaner {
  overflow: hidden
  height: 0
  padding-bottom: 41.7%

  .bgImg {
    width: 100%
  }
}
</style>
