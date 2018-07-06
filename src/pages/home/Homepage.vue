<template>
    <div>
        <home-header>
        </home-header>
        <home-swiper>
        </home-swiper>
        <home-icons>
        </home-icons>
    </div>
</template>

<script>
// 引入header组件
    import homeHeader from './components/homeHeader.vue'
    import homeSwiper from './components/swiper.vue'
    import homeIcons from './components/icons.vue'
    export default {
        name: 'Homepage',
        components: {
            homeHeader,
            homeSwiper,
            homeIcons
        }
    }
</script>
<style>

</style>

