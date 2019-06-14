<template>
  <div v-show="drawShow" class="draw" @click="handleDrawclick">
      <swiper class="contaner" v-if="list.length>0" :options="swiperOption">
        <swiper-slide v-for="item in list" :key="item.id">
            <img class="bgImg" :src="item.imgUrl" alt @click.stop>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
  </div>
</template>

<script>
export default {
  name: 'Drawloop',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        observer: true,
        observerParents: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        loop: true
      },
      drawShow: false
    }
  },
  methods: {
    handleDrawclick () {
      this.drawShow = false
    }
  }
}
</script>
<style lang="stylus" scoped>
.draw
  display: flex
  position: fixed
  left: 0
  top: 0
  right: 0
  bottom: 0
  background: #000
  color: #ffffff
  z-index: 1
  .contaner
    margin: auto
    height: 41.7vw
    padding-bottom: .8rem
    .bgImg
      width: 100%
</style>
