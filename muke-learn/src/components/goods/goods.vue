<template>
    <div class="goods">
        <div class="scroll-nav-wrapper">
            <cube-scroll-nav
                :side=true
                :data="goods"
                :options="scrollOptions"
                v-if="goods.length"
            >
                <template slot="bar" slot-scope="props">
                    <cube-scroll-nav-bar
                        direction="vertical"
                        :labels="props.labels"
                        :txts="barTxts"
                        :current="props.current"
                    >
                        <template slot-scope="props">
                            <div class="text">
                                <support-ico
                                    v-if="props.txt.type>=1"
                                    :size=3
                                    :type="props.txt.type"
                                ></support-ico>
                                <span>{{props.txt.name}}</span>
                                <span></span>
                            </div>
                            
                        </template>

                    </cube-scroll-nav-bar>
                
                        
                    
                </template>

            </cube-scroll-nav>
        </div>
    </div>
</template>
