<template>
  <div class="mains">
    <swiper class="main" v-if="pageList.length" :options="swiperOption">
      <swiper-slide v-for="(page,index) of pageList" :key="index">
        <div class="icons">
            <a class="icons_item" v-for="item of page" :key="item.id" :href="item.link">
              <img :src="item.imgUrl" alt="">
              <i>{{item.des}}</i>
            </a>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'IndexIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true
      }
    }
  },
  computed: {
    pageList () {
      const pages = []
      this.list.forEach((item, index) => {
        const num = Math.floor(index / 8)
        !pages[num] && (pages[num] = [])
        pages[num].push(item)
      })
      return pages
    }
  }
}
</script>
<style lang="stylus" scoped>
.mains
  height: 4.3rem
  .main
    padding-bottom: .6rem
    .icons
      display: flex
      height: 3.7rem
      padding: .1rem 0 0
      flex-wrap: wrap
      .icons_item
        display: flex
        flex-direction: column
        justify-content: space-around
        align-items: center
        width: 25%
        img
          height: 1.1rem
          width: 1.1rem
        i
          font-size: 14px
</style>
