<template>
<div class="headers">
  <div class="header">
    <div class="back"> <router-link class="back_link iconfont" to="/">&#xe624;</router-link></div>
    <div class="header_box">
      城市选择
    </div>
  </div>
  <div class="seach">
      <input class="seach_input" placeholder="请输入搜索城市" @input="handleSearchCity" type="text">
  </div>
  <!-- 搜索关键字列表框 -->
  <div class="seach_list" ref="seachScroll" v-show="searchCity">
    <ul>
      <li class="seach_list_item" v-for="(item, index) of filterResult" :key="index">{{item.name}}</li>
    </ul>
  </div>

  <div class="localCity">
    当前城市: {{city}}
  </div>
  <div class="hotCity">
    <div class="hotCity_title">热门城市:</div>
    <div class="hotCity_box">
      <ul>
        <li class="hotCity_item" :class="{hotCity_active:item.cityName===city}" @click="handleSelectCity(item.cityName)"
          v-for="(item, index) of list"
          :key="index">
          {{item.cityName}}
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
import {debounce} from '@/utils/utils.js'
import Bscroll from 'better-scroll'
export default {
  name: 'cityHeader',
  props: {
    list: Array,
    allList: Array
  },
  data () {
    return {
      searchCity: false,
      filterResult: [],
      even: null
    }
  },
  computed: {
    ...mapState(['city']),
    listData () {
      const listData = []
      this.allList.forEach((item) => {
        item.content.forEach((elem) => {
          listData.push({
            name: elem.zWord,
            spall: elem.eWord
          })
        })
      })
      return listData
    }
  },
  methods: {
    ...mapMutations(['changeCity']),
    handleSelectCity (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    handleSearchCity (e) {
      // 点击搜索框让列表显示
      this.searchCity = true
      this.even = e
      debounce(this.handledebounce)()
    },
    handledebounce () {
      let val = this.even.target.value.toLowerCase()
      if (val) {
        this.filterResult = this.listData.filter((item) => {
          if (item.name.indexOf(val) > -1 || item.spall.indexOf(val) > -1) {
            return true
          }
        })
      } else {
        this.searchCity = false
      }
    }
  },
  watch: {
    filterResult () {
      this.$nextTick(() => {
        this.seachScroll.refresh()
      })
    }
  },
  mounted () {
    this.seachScroll = new Bscroll(this.$refs.seachScroll)
  }
}
</script>
<style lang="stylus" scoped>
@import "../../assets/stylus/varibles.styl"
.header
  display: flex
  height: .88rem
  background: $bgColor
  text-align: center
  .back
    width: .58rem
    line-height: .88rem
    font-weight: 700
    color: #fff
    .back_link
      color: #fff
  .header_box
    flex: 1
    height: .6rem
    margin: .14rem .5rem 0 .2rem
    text-align: center
    line-height: .6rem
    color: #ffffff
.seach
  display: flex
  height: 1.6rem
  background: $bgColor
  .seach_input
    flex: 1
    border-radius: .1rem
    margin: .3rem .3rem 0 .3rem
    padding-left: .32rem
    line-height: .6rem
    height: .8rem
.seach_list
  position: absolute
  top: 2.48rem
  right: 0
  bottom: 0
  left: 0
  z-index: 1
  background: #ccc
  overflow: hidden
  .seach_list_item
    height: 1.2rem
    line-height: 1.2rem
    padding-left: .3rem
    background: #ffffff
.localCity
  height: .8rem
  margin-top: .2rem
  padding-left: .6rem
  background: #ffffff
  text-align: left
  line-height: .8rem
.hotCity
  .hotCity_title
    height: 1rem
    background: #f5f5f5
    line-height: 1rem
    padding-left: .6rem
  .hotCity_box
    ul
      display: flex
      flex-wrap: wrap
      margin-bottom: -1px
      .hotCity_item
        box-sizing: border-box
        height: .85rem
        width: 33.333%
        border-right: 1px solid #cccccc
        border-bottom: 1px solid #cccccc
        text-align: center
        line-height: .85rem
      .hotCity_item:nth-of-type(3n)
        border-right: 0
      .hotCity_active
        color: $bgColor
</style>
