<template>
    <div>
        <div class="title">周末去哪儿</div>
        <ul>
            <li class="item border-bottom" v-for="item in weekendList" :key="item.id">
                <img class="item-img" :src="item.imgUrl">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'homeWeekend',
        data () {
            return {
                weekendList: [
                    {
                    id: '001',
                    imgUrl: 'http://img1.qunarzz.com/sight/source/1505/92/580e9ea4f37a1b.jpg_r_640x214_72112761.jpg',
                    title:'广州必游TOP10',
                    desc: '感受现代与传统相融合的广州',
                    url:'#'
                    },{
                    id: '002', 
                    imgUrl: 'http://img1.qunarzz.com/sight/source/1505/92/580e9ea4f37a1b.jpg_r_640x214_72112761.jpg',
                    title:'广州必游TOP10',
                    desc: '感受现代与传统相融合的广州',
                    url:'#'
                    },{
                    id: '003',
                    imgUrl: 'http://img1.qunarzz.com/sight/source/1505/92/580e9ea4f37a1b.jpg_r_640x214_72112761.jpg',
                    title:'广州必游TOP10',
                    desc: '感受现代与传统相融合的广州',
                    url:'#'
                    },{
                    id: '004',
                    imgUrl: 'http://img1.qunarzz.com/sight/source/1505/92/580e9ea4f37a1b.jpg_r_640x214_72112761.jpg',
                    title:'广州必游TOP10',
                    desc: '感受现代与传统相融合的广州',
                    url:'#'
                    },{
                    id: '005',
                    imgUrl: 'http://img1.qunarzz.com/sight/source/1505/92/580e9ea4f37a1b.jpg_r_640x214_72112761.jpg',
                    title:'广州必游TOP10',
                    desc: '感受现代与传统相融合的广州',
                    url:'#'
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
        height: 4.5rem
        // display: flex
        .item-img
            width: 100%
            height: 3rem
         .item-info
            padding: .2rem
            .item-title
                line-height:.45rem
                font-size: .3rem
            .item-desc
                line-height:.45rem
                ellipsis()      
</style>

