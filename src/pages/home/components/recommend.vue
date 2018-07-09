<template>
    <div>
        <div class="title">猜你喜欢</div>
        <ul>
            <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
                <img class="item-img" :src="item.imgUrl">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'homeRecommend',
        data () {
            return {
                recommendList: [
                    {
                    id: '001',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/3b/3bd311262ee06d8c90.img.jpg_200x200_c118d7da.jpg',
                    title:'广州长隆旅游度假区',
                    desc: '广州长隆旅游度假区',
                    url:'#'
                    },{
                    id: '002', imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/3b/3bd311262ee06d8c90.img.jpg_200x200_c118d7da.jpg', title:'广州长隆旅游度假区', desc: '广州长隆旅游度假区', url:'#'
                    },{
                    id: '003',imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/3b/3bd311262ee06d8c90.img.jpg_200x200_c118d7da.jpg', title:'广州长隆旅游度假区', desc: '广州长隆旅游度假区', url:'#'
                    },{
                    id: '004',imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/3b/3bd311262ee06d8c90.img.jpg_200x200_c118d7da.jpg', title:'广州长隆旅游度假区', desc: '广州长隆旅游度假区', url:'#'
                    },{
                    id: '005',imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/3b/3bd311262ee06d8c90.img.jpg_200x200_c118d7da.jpg', title:'广州长隆旅游度假区', desc: '广州长隆旅游度假区', url:'#'
                    },
                ]
            }
        }
    }
</script>

<style lang='stylus' scoped>
    @import '~style/mixins.styl';
    .title
        margin-top: .2rem
        line-height: .8rem
        background:  #eee
        text-indent: .2rem
    .item
        overflow: hidden
        display: flex
        height: 1.9rem
        padding: 0 .1rem
        .item-img
            width: 1.7rem
            height: 1.7rem
            padding: .1rem
        .item-info
            padding: .1rem .3rem
            min-width: 0
            .item-title
                line-height:.54rem
                font-size: .32rem
            .item-desc
                line-height:.4rem
                color: #ccc
                ellipsis()
            .item-button
                margin-top: .2rem
                background: #ff9300
                padding: 0 .2rem
                bottom: .2rem
                border-radius: .06rem
                color: #fff        
</style>

