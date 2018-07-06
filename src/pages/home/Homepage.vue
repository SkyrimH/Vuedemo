<template>
    <div>
        <home-header>

        </home-header>
        <home-swiper>

        </home-swiper>
    </div>
</template>

<script>
// 引入header组件
    import homeHeader from './components/homeHeader.vue'
    import homeSwiper from './components/swiper.vue'
    export default {
        name: 'Homepage',
        components: {
            homeHeader,
            homeSwiper
        }
    }
</script>
<style>

</style>

