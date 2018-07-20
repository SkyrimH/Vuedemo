<template>
    <div class="container" @click="handleWrapper">
        <div class="wrapper">
            <swiper :options="swiperOptions">
                <swiper-slide v-for="(item, index) in imgs" :key="index">
                    <img :src="item" class="gallary-img">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'commonGallary',
        props: {
            imgs: {
                type: Array,
                default () {
                    return []
                }
            }
        },
        data () {
            return {
                swiperOptions: {
                    pagination: '.swiper-pagination',
                    paginationType: 'fraction',
                    // 当该元素自身或者父级元素法身变化时，自我刷新一次，防止v-show控制显示隐藏时，出现的bug
                    observeParents: true,
                    observer: true
                }
            }
        },
        methods: {
            handleWrapper () {
                this.$emit('close')
            }
        }
    }
</script>
<style lang="stylus" scoped>
    .container >>> .swiper-container
        overflow: inherit
        // 将pagination放到swiper外面时，需要将默认的overflow属性改变，否则不显示
    .container
        // 垂直居中
        display: flex
        flex-direction: column
        justify-content: center
        z-index: 99
        position: fixed
        left: 0
        right: 0
        top: 0
        bottom: 0
        background: #000
        .wrapper
            height: 0
            width: 100%
            padding-bottom: 100%
            // 以上代码可以撑出一个正方形
            .gallary-img
                width: 100%
            .swiper-pagination
                bottom: -1rem
                color: #fff
            
</style>
