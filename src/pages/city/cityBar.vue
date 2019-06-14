<template>
  <div class="cityBar">
    <ul class="cityBar_ul">
      <li v-for="item of list" :key="item.name" @click="getCityBar(item.name)">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'cityBar',
  props: {
    list: Array
  },
  data () {
    return {
    }
  },
  methods: {
    getCityBar (key) {
      this.$emit('changeLetter', key)
    }
  }
}
</script>
<style lang="stylus" scoped>
@import "../../assets/stylus/varibles.styl"
.cityBar
  position: fixed
  top: 2.48rem
  right: 0
  bottom: 0
  height: auto
  width: .4rem
  .cityBar_ul
    position: absolute
    left: 50%
    top: 50%
    transform: translate(-50%, -50%)
    line-height: .4rem
    height: .4rem
    text-align: center
    color: $bgColor
</style>
