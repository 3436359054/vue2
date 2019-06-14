<template>
<div class="header" ref="head">
  我是头部
</div>
</template>

<script>
export default {
  name: 'DetailsHeader',
  data () {
    return {

    }
  },
  methods: {
    handleScroll () {
      let opc = document.documentElement.scrollTop / 200
      opc = opc > 1 ? 1 : opc
      this.$refs.head.style.opacity = opc
    },
    bindScroll () {
      // 因为bind()会返回一个新的函数 所以用handleScroll让这两个bind返回的函数一样,方便解绑
      this.handleScroll = this.handleScroll.bind(this)
      window.addEventListener('scroll', this.handleScroll.bind(this))
    },
    unbindScroll () {
      window.removeEventListener('scroll', this.handleScroll.bind(this))
    }
  },
  activated () {
    this.bindScroll()
  },
  deactivated () {
    this.unbindScroll()
  }
}
</script>
<style lang="stylus" scoped>
@import "../../assets/stylus/varibles.styl"
.header
  position: fixed
  top: 0
  left: 0
  height: .9rem
  width: 100%
  background: $bgColor
  z-index: 3
</style>
