<template>
<div class="header">
  <div class="back iconfont">&#xe624;</div>
  <div class="seach"><i class="seach_bar iconfont">&#xe632;</i>请输入要搜索的内容</div>
  <div class="bar"><router-link class="bar_link" to="/city">{{$store.state.city}}</router-link></div>
</div>
</template>

<script>
export default {
  name: 'IndexHeader'
}
</script>
<style lang="stylus" scoped>
@import "../../assets/stylus/varibles.styl"
.header
  display: flex
  height: .88rem
  width: 100%
  background: $bgColor
  text-align: center
  .back
    width: .58rem
    line-height: .88rem
    font-weight: 700
    color: #fff
  .seach
    flex: 1
    height: .6rem
    margin: .14rem .22rem
    border-radius: .1rem
    background: #fff
    text-align: left
    line-height: .6rem
    color: #ccc
    .seach_bar
      padding: 0 .1rem
  .bar
    line-height: .88rem
    padding-right:.55rem
    color: #fff
    max-width: 1.6rem
    white-space: nowrap
    overflow: hidden
    text-overflow: ellipsis
    &:before
      position: absolute
      right: .25rem
      top: .33rem
      content: "\0020"
      height: 0
      width: 0
      border-left: .13rem solid transparent
      border-right: .13rem solid transparent
      border-top: .22rem solid #fff
    .bar_link
      color: #fff
</style>
