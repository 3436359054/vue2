<template>
  <div class="wrapper" ref="wrapper">
    <ul>
      <li class="sight" v-for="item in list" :key="item.id">
        <div class="sight_box_img">
          <img class="sight_img" :src="item.imgUrl" alt="">
        </div>
        <div class="sight_content">
          <div class="tile">{{item.title}}</div>
          <div class="comment">
            <i class="iconfont">&#xe870;</i>
            <i class="iconfont">&#xe870;</i>
            <i class="iconfont">&#xe870;</i>
            <i class="iconfont">&#xe870;</i>
            <i class="iconfont">&#xe870;</i>{{item.people}}个评价
          </div>
          <div class="price"><i>{{item.price}}</i>元<em>{{item.area}}</em></div>
          <div class="desc">{{item.desc}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'IndexIcons',
  props: {
    list: Array
  },
  data () {
    return {

    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>
<style lang="stylus" scoped>
.wrapper
  height: 4rem
  overflow: hidden
  .sight
    display: flex
    height: 3.16rem
    border-bottom: 1px solid #eee
    .sight_box_img
      height: 2rem
      padding: .2rem .24rem 0 .24rem
      .sight_img
        height: 100%
    .sight_content
      flex: 1
      .tile
        padding: .5rem 0 .26rem 0
        font-size: .32rem
        line-height: .32rem
      .comment
        padding-bottom: .32rem
        font-size: .24rem
        line-height: .24rem
        i:nth-child(5)
          margin-right: .32rem
        em
          height: .24rem
          font-size: .24rem
          line-height: .24rem
      .price
        padding-bottom: .64rem
        font-size: .24rem
        line-height: .24rem
        i
          color: #ff8300
          font-size: .4rem
          line-height: .4rem
          &:before
            content:"¥"
            font-size: .24rem
            line-height: .24rem
            color: #ff8300
        em
          padding-left: 2.71rem
      .desc
        font-size: .2rem
        line-height .2rem
        color: #ff6f6e

</style>
