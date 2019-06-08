<template>
<div>
  <div class="header">
    <div class="back"> <router-link class="back_link iconfont" to="/">&#xe624;</router-link></div>
    <div class="header_box">
      城市选择
    </div>
  </div>
  <div class="localCity">
    当前城市: {{city}}
  </div>
  <div class="hotCity">
    <div class="hotCity_title">热门城市:</div>
    <div class="hotCity_box">
      <ul>
        <li class="hotCity_item" @click="handleSelectCity"
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
export default {
  name: 'cityHeader',
  props: {
    list: Array
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    ...mapMutations(['changeIndexCity']),
    handleSelectCity (e) {
      this.changeIndexCity(e.target.innerHTML)
      this.$router.go(-1)
    }
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
      margin-right: -1px
      .hotCity_item
        box-sizing: border-box
        height: .85rem
        width: 33.333%
        border-right: 1px solid #cccccc
        border-bottom: 1px solid #cccccc
        text-align: center
        line-height: .85rem
</style>
