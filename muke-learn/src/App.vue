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
import goods from 'components/goods/goods'
import ratings from 'components/ratings/ratings'
import seller from 'components/seller/seller'

export default {
  name: 'app',
  data () {
    return {
      seller: {}
    }
  },
  computed: {
    tabs() {
      return [
        {
          label:'商品',
          component:goods,
          data:{
            seller:this.seller
          }
        },
        {
          label:'评论',
          component:ratings,
          data:{
            seller:this.seller
          }
        },
        {
          label:'商家',
          component:Seller,
          data:{
            seller:this.seller
          }
        },
      ]

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
