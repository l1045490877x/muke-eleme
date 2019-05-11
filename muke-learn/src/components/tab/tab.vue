<template>
    <div class="tab">
        <cube-tab-bar
            :showSlider=true
            v-model="selectedLabel"
            :data="tabs"
            ref="tabBar"
            class="border-bottom-1px">
        </cube-tab-bar>
        <div class="clide-wrapper">
            <cube-slide
                :loop=false
                :auto-play=false
                :show-dots=false
                initial-index="index"
                ref="slide">
                <cube-slide-item>
                    <goods></goods>
                </cube-slide-item>
                <cube-slide-item>
                    <ratings></ratings>
                </cube-slide-item>
                <cube-slide-item>
                    <seller></seller>
                </cube-slide-item>

            </cube-slide>
            
        </div>
    </div>
</template>

<script>
import goods from 'components/goods/goods'
import ratings from 'components/ratings/ratings'
import seller from 'components/seller/seller'

export default {
    name: 'tab',
    data(){
        return {
            index: 0,
            tabs:[{
                label: '商品'
            }, {
                label:'评价'
            }, {
                label: '商家'
            }],
            selideOptions:{
                
            }
        }
    },
    computed: {
        selectedLabel: {
            get() {
                return this.tabs[this.index].label
            },
            set(newVal){
                this.index = this.tabs.findIndex((value) => {
                    return value.label === newVal
                })
            }
        }
    },
    components:{
        seller,
        ratings,
        goods
    }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable'

    .tab
        >>> .cube-tab
            padding 10px 0
        display flex
        flex-direction column
        height  100%
        .slide-wrapper
            flex 1
            overflow hidden
</style>
