<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
    </div>
</template>
<script>
    import cityHeader from './components/Header.vue'
    import citySearch from './components/search.vue'
    export default {
        name: 'City',
        components: {
            cityHeader,
            citySearch
        }
    }
</script>
<style>

</style>
