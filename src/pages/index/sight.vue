<template>
  <div class="sights">
    <div class="rollData" v-show="rollDataSwitch">开始加载....</div>
    <div class="wrapper" ref="wrapper">
      <ul>
        <router-link  :to="item.link" tag="li" class="sight" v-for="item in scenery" :key="item.id">
          <div class="sight_box_img">
            <img class="sight_img" v-lazy="item.imgUrl" alt="">
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
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import {mapState} from 'vuex'
import axios from 'axios'
export default {
  name: 'IndexIcons',
  props: {
    list: Array // 首次加载时从主页传来的数据
  },
  data () {
    return {
      rollDataSwitch: false, // 控制下拉是否请求数据
      rollWordSwitch: false, // 控制下拉滚动条显示 "加载中..."
      moreSights: [], // 用于接收下拉刷新时传来的数据
      page: 1 // 改变页数
    }
  },
  computed: {
    ...mapState(['city']), // 获取vuex中的数据city
    scenery () {
      return this.list.concat(this.moreSights) // 拼合首页传来的数据以及下拉刷新后的数据
    }
  },
  methods: {
    creatScroll () {
      // 创建滚动条插件
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: 2
      })
    },
    // 滚动条产生后的逻辑
    handleScroll () {
      // 滚动条发生时
      this.scroll.on('scroll', (e) => {
        if (e.y > 40 && !this.rollDataSwitch) {
          if (!this.rollDataSwitch) {
            this.rollWordSwitch = true
            this.getScrollData()
          }
        }
      })
      // 滚动条结束时
      this.scroll.on('scrollEnd', () => {
        this.page++
        this.rollwordSwitch = false
      })
    },
    // 下拉时获取数据
    getScrollData () {
      axios.get('/ap/sight.json?city=' + this.city + '&&page=' + this.page)
        .then(this.handleDataSucc.bind(this))
        .catch(this.handleDataErr.bind(this))
    },
    handleDataSucc (res) {
      this.rollDataSwitch = false
      if (res && res.data && res.data.ret) {
        res.data.sights && (this.moreSights = this.moreSights.concat(res.data.sights))
      }
    },
    handleDataErr () {
      this.rollDataSwitch = false
      console.log('获取sight出错了')
    }
  },
  watch: {
    scenery () {
      this.$nextTick(() => {
        this.scroll.refresh()
      })
    }
  },
  mounted () {
    this.creatScroll()
    this.handleScroll()
  }
}
</script>
<style lang="stylus" scoped>
.sights
  flex: 1
  display: flex
  flex-direction: column
  .rollData
    text-align: center
    color: #cccccc
  .wrapper
    flex: 1
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
