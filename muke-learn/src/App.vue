<template>
  <div id="app">
    <Vheader :seller="seller"></Vheader>
    <div class="tab-wrapper">
      <tab :tabs="tabs"></tab>
    </div>
  </div>
</template>

<script>
import Vheader from 'components/v-header/v-header'
import { getSeller } from 'api'
import tab from 'components/tab/tab'

export default {
  name: 'app',
  data () {
    return {
      seller: {}
    }
  },
  components: {
    Vheader,
    tab
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

<style lang="stylus" scoped>
</style>
