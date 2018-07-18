<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list :hotCitiesList='hotCities' :cities='cities' :letter='letter'></city-list>
        <city-alphabet :cities='cities' @jump="handleLetter"></city-alphabet>
    </div>
</template>
<script>
    import cityHeader from './components/Header.vue'
    import citySearch from './components/search.vue'
    import cityList from './components/list.vue'
    import cityAlphabet from './components/alphabet.vue'
    import Axios from 'axios';
    export default {
        name: 'City',
        components: {
            cityHeader,
            citySearch,
            cityList,
            cityAlphabet
        },
        data () {
            return {
                hotCities: [],
                cities:{},
                letter: ''
            }
        },
        methods: {
            getCityInfo () {
                Axios.get('/api/city.json')
                    .then(this.getCityInfoSucc)
            },
            getCityInfoSucc (res) {                
                res = res.data
                console.log(res);
                if (res.ret && res.data) {
                    const data = res.data
                    this.hotCities = data.hotCities
                    this.cities = data.cities
                }
            },
            handleLetter (letter) {
                this.letter = letter
            }
        },
        mounted () {
            this.getCityInfo()
        }
    }
</script>
<style>

</style>
