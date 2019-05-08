<template>
  <div id="app">
    <Vheader :seller="seller"></Vheader>
  </div>
</template>

<script>
import Vheader from 'components/v-header/v-header'
import { getSeller } from 'api'

export default {
  name: 'app',
  data () {
    return {
      seller: {}
    }
  },
  components: {
    Vheader
  },
  created () {
    this._getSeller()
  },
  methods: {
    _getSeller () {
      getSeller().then((seller) => {
        this.seller = seller
      })
    }
  }
}
</script>

<style lang="stylus">
</style>
