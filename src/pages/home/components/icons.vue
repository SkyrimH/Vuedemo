<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page, index) in pages" :key="index">
                <div class="icon"  v-for="item in page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-content" :src="item.imgUrl">
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: 'homeIcons',
        props: {
            list: Array
        },
        data () {
            return {
                // 取消自动轮播
                swiperOption: {
                    autoplay: false
                }
            }
        },
        computed: {
            // 添加计算函数，将所有数据按每条8项分组，循环分组，再嵌套循环数据
            pages () {
                const pages = []
                this.list.forEach((item, index) => {
                    const page = Math.floor(index / 8)
                    if (!pages[page]) {
                        pages[page] = []
                    }
                    pages[page].push(item)
                })
                return pages
            }
        }
    }    
</script>

<style lang="stylus" scoped>
    @import '~style/mixins.styl'
    .icons >>> .swiper-container
        height: 0
        padding-bottom: 50%
    .icon
        position: relative
        float: left
        width: 25%
        height: 0
        padding-bottom: 25%
        .icon-img
            position: absolute
            overflow: hidden
            padding: .3rem .5rem
            left: 0
            top: 0
            right: 0
            bottom: .2rem
            .icon-content
                display: block
                margin: 0 auto 
                width: 100%
        .icon-desc
            position: absolute
            left: 0
            right: 0
            bottom: 0
            height: .4rem
            text-align: center
            ellipsis()
</style>
