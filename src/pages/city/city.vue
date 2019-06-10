<template>
<div class="city">
  <cityHeader :list="hotCity"></cityHeader>
</div>
</template>

<script>
import axios from 'axios'
import cityHeader from './cityHeader'
export default {
  name: 'City',
  components: {
    cityHeader
  },
  data () {
    return {
      hotCity: []
    }
  },
  methods: {
    handleGetData () {
      axios.get('/ap/city.json')
        .then(this.handleGetSucc.bind(this))
        .catch(this.handleGetErr.bind(this))
    },
    handleGetSucc (res) {
      this.hotCity && (this.hotCity = res.data.hotCity)
    },
    handleGetErr () {
      console.log('hhhErr')
    }
  },
  created () {
    this.handleGetData()
  }
}
</script>

<style lang="stylus" scoped>
</style>
