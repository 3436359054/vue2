<template>
<div class="details">
  <detailsBanner :banner="banner"></detailsBanner>
</div>
</template>

<script>
import detailsBanner from './detailsBanner.vue'
import axios from 'axios'
export default {
  name: 'Details',
  props: {
    sightId: [Number, String]
  },
  data () {
    return {
      banner: {}
    }
  },
  components: {
    detailsBanner
  },
  methods: {
    getDetailsData () {
      axios.get('/ap/details.json', {
        params: {
          sightId: this.sightId
        }
      }).then(this.handleDetailsDataSucc.bind(this))
        .catch(this.handleDetailsDataErr.bind(this))
    },
    handleDetailsDataSucc (res) {
      if (res && res.data && res.data.ret) {
        res.data.banner && (this.banner = res.data.banner)
      }
    },
    handleDetailsDataErr () {
      console.log('错了')
    }
  },
  watch: {
    sightId () {
      if (this.sightId) {
        this.getDetailsData()
      }
    }
  },
  created () {
    this.getDetailsData()
  }
}
</script>
<style lang="stylus" scoped>
</style>
