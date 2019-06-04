<template>
<div class="index">
  <IndexHeader/>
  <IndexBanner/>
  <div>hhhhhhhh</div>
</div>
</template>

<script>
import axios from 'axios'
import IndexHeader from './header'
import IndexBanner from './banner'
export default {
  name: 'Index',
  components: {
    IndexHeader,
    IndexBanner
  },
  methods: {
    handleGetData () {
      axios.get('static/index.json')
        .then(this.handleGetSucc.bind(this))
        .catch(this.handleGetErr.bind(this))
    },
    handleGetSucc (res) {
      console.log(res)
    },
    handleGetErr () {
      console.log('hhhhhhhhhh')
    }
  },
  created () {
    this.handleGetData()
  }
}
</script>

<style lang="stylus" scoped>
</style>
