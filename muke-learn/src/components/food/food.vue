<template>
    <transition name="move"
        @after-leave="afterLeave">
        <div class="food" v-show="visible">
            <cube-scroll ref="scroll">
                <div class="food-content">
                    <div class="image-header">
                        <img :src="food.image">
                        <div class="back" @click="hide">
                            <i class="icon-arrow_left"></i>
                        </div>
                    </div>
                    <div class="content">
                        <h1 class="title">{{food.name}}</h1>
                        <div class="detail">
                            <span class="sell-count">月售{{food.sellCount}}份</span>
                            <span class="rating">好评率{{food.rating}}</span>
                        </div>
                        <div class="price">
                            <span class="now">￥{{food.price}}</span><span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                        </div>
                        <div class="cart-control-wrapper">
                            <cart-control @add="addFood" :food="food"></cart-control>
                        </div>
                        <transition name="fade">
                            <div @click="addFirst" v-show="!food.count" class="buy">
                                加入购物车
                            </div>
                        </transition>
                    </div>
                    <split v-show="food.info"></split>
                    <div class="ifo" v-show="food.info">
                        <h1 class="title">商品信息</h1>
                        <p class="text">{{food.info}}</p>
                    </div>
                    <split></split>
                    <div class="rating">
                        <h1 class="title">商品评价</h1>
                        <rating-select
                            @select="onSelect"
                            @toggle="onToggle"
                            :selectType="selectType"
                            :onlyContent="onlyContent"
                            :desc = "desc"
                            :ratings = "ratings">
                        </rating-select>
                        
                    </div>
                </div>
            </cube-scroll>
        </div>
    </transition>
</template>
