<template>
    <div>
        <home-header>
        </home-header>
        <home-swiper>
        </home-swiper>
        <home-icons>
        </home-icons>
        <home-recommend>
        </home-recommend>
        <home-weekend>
        </home-weekend>
    </div>
</template>

<script>
// 引入header组件
    import homeHeader from './components/homeHeader.vue'
    import homeSwiper from './components/swiper.vue'
    import homeIcons from './components/icons.vue'
    import homeRecommend from './components/recommend.vue'
    import homeWeekend from './components/weekend.vue'
    export default {
        name: 'Homepage',
        components: {
            homeHeader,
            homeSwiper,
            homeIcons,
            homeRecommend,
            homeWeekend
        }
    }
</script>
<style>

</style>

