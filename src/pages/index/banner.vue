<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index"><div class="bgContaner"><img class="bgImg" :src="slide" alt="hhh"></div></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: 'Indexbanner',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: true
      },
      swiperSlides: [
        'static/images/banner0.jpg',
        'static/images/banner1.jpg',
        'static/images/banner2.jpg',
        'static/images/banner3.jpg'
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
.bgContaner
  overflow: hidden
  height: 0
  padding-bottom: 31.25%
  .bgImg
    width: 100%
</style>
