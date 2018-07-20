<template>
    <div>
        <div class="banner" @click="handleBanner">
            <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1603/3b/3bd311262ee06d8c90.img.jpg_600x330_cd2e3bf7.jpg">
            <div class="banner-info">
                <div class="banner-title">广州长隆旅游度假区(AAAAA景区)</div>
                <div class="banner-number"><span class="iconfont banner-icon">&#xe608;</span>16</div>
            </div>
        </div>
        <common-gallary :imgs="imgs" v-show="showGallray" @close="closeGallray">
        </common-gallary>
    </div>

</template>

<script>
import commonGallary from 'common/gallary/Gallary'
    export default {
        name: 'detailBanner',
        components: {
            commonGallary
        },
        data () {
            return {
                showGallray: false,
                imgs: ["http://img1.qunarzz.com/sight/p0/1603/3b/3bd311262ee06d8c90.img.jpg_r_800x800_41637b9b.jpg","http://img1.qunarzz.com/sight/p0/201405/29/929a9ed086f90be479e311655f8d3920.jpg_r_800x800_cceed5d3.jpg"]
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
