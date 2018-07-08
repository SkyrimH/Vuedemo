<template>
    <div class="icons">
        <swiper>
            <swiper-slide v-for="(page, index) in pages" :key="index">
                <div class="icon"  v-for="item in page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-content" :src="item.url">
                    </div>
                    <p class="icon-desc">{{item.title}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: 'homeIcons',
        data () {
            return {
                iconList: [{
                    id: '01', url:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png', title: '景点门票'
                },
                {
                    id: '02', url:'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png', title: '必游榜单'
                },
                {
                    id: '03', url:'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png', title: '动植物园'
                },
                {
                    id: '04', url:'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png', title: '游乐场'
                },
                {
                    id: '05', url:'http://img1.qunarzz.com/piao/fusion/1803/89/55083b0f1951f302.png', title: '游船游艇'
                },
                {
                    id: '06', url:'http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png', title: '夏日玩水'
                },
                {
                    id: '07', url:'http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png', title: '城市观光'
                },
                {
                    id: '08', url:'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png', title: '一日游'
                },
                {
                    id: '09', url:'http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png', title: '玩转长隆'
                },
                {
                    id: '10', url:'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png', title: '全部'
                }
                ]
            }
        },
        computed: {
            // 添加计算函数，将所有数据按每条8项分组，循环分组，再嵌套循环数据
            pages () {
                const pages = []
                this.iconList.forEach((item, index) => {
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
