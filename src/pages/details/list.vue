<template>
<div>
  <ul>
    <li v-for="(item, index) of list" :key="index">{{item}}</li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'detailsBanne',
  data () {
    return {
      list: [1, 3, 4, 6, 7, 8, 99, 0, 0]
    }
  }
}
</script>
<style lang="stylus" scoped>
li
  height: 3rem
</style>
