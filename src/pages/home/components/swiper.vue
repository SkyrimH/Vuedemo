<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <swiper-slide v-for="item in list" :key="item.id">
                <img :src="item.imgUrl" class="swiper-img">
            </swiper-slide>

            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>

</template>
<script>
    export default {
        name: 'homeSwiper',
        props: {
            list: Array
        },
        data () {
            return {
                swiperOption: {
                    // 小白点
                    pagination: '.swiper-pagination'
                }
            }
        }
    }

</script>
<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active
        background: white
    .wrapper
        width: 100%
        background-color: #eee
        .swiper-img
            width: 100%
</style>
