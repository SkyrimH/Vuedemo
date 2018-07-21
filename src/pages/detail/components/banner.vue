<template>
    <div>
        <div class="banner" @click="handleBanner">
            <img class="banner-img" :src="list.bannerImg">
            <div class="banner-info">
                <div class="banner-title">{{list.sightName}}</div>
                <div class="banner-number"><span class="iconfont banner-icon">&#xe608;</span>16</div>
            </div>
        </div>
        <common-fade>
            <common-gallary :imgs="list.gallaryImgs" v-show="showGallray" @close="closeGallray">
            </common-gallary>
        </common-fade>
    </div>
</template>

<script>
import commonGallary from 'common/gallary/Gallary'
import commonFade from 'common/fade/fade'
    export default {
        name: 'detailBanner',
        components: {
            commonGallary,
            commonFade
        },
        props: {
            list: Object
        },
        data () {
            return {
                showGallray: false
            }
        },
        methods: {
            handleBanner () {
                this.showGallray = true
            },
            closeGallray () {
                this.showGallray = false
            }
        }
    }
</script>

<style lang='stylus' scoped>
    .banner
        position: relative
        overflow: hidden
        height: 0
        padding-bottom: 55%
        .banner-img
            width: 100%
        .banner-info
            display: flex
            position: absolute
            left: 0 
            right: 0
            bottom: 0
            line-height: .6rem
            color: white
            background-image: linear-gradient(top, rgba(0,0,0,0),rgba(0,0,0,.8))
            .banner-title
                flex: 1
                padding: 0 .2rem
                font-size: .38rem
            .banner-number
                margin: auto 0
                padding: 0 .4rem
                height: .32rem
                line-height: .32rem
                font-size: .24rem
                border-radius: .2rem
                background: rgba(0,0,0,.8)
                .banner-icon
                    padding-right: .1rem
                    font-size: .1rem
</style>
