<template>
  <div class="wrapper_city" ref="wrapper">
    <ul class="city_box">
      <li class="city_box_li" v-for="(item, index) of list" :key="index" :ref="item.name">
        <div class="initial">{{item.name}}</div>
        <div class="city_content">
          <div class="city_item" @click="changcity(its.zWord)" v-for="its of item.content" :key="its.zWord">
            {{its.zWord}}
          </div>
        </div>
      </li>
      <div class="outline0"></div>
    </ul>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import BScroll from 'better-scroll'
export default {
  name: 'cityList',
  props: {
    list: Array
  },
  data () {
    return {
    }
  },
  methods: {
    ...mapMutations(['changeCity']),
    changcity (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    handleCityScrollTop (key) {
      this.scroll.scrollToElement(this.$refs[key][0])
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper, {click: true, tap: true})
  }
}
</script>
<style lang="stylus" scoped>
.wrapper_city
  overflow: hidden
  .city_box
    position: relative
    .outline0
      position: absolute
      left: 0
      bottom: 0
      height: 1px
      width: 100%
      background: #ffffff
    .city_box_li
      position: relative
      .initial
        height: .5rem
        line-height: .5rem
        padding-left: .6rem
        background: #f5f5f5
        margin-top: -1px
      .city_content
        display: flex
        flex-wrap: wrap
        margin-right: -1px
        .city_item
          width: 24.72%
          height: .85rem
          text-align: center
          line-height: .85rem
          border-bottom: 1px solid #ddd
          border-right: 1px solid #ddd
          color: #212121
</style>
