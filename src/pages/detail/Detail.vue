<template>
    <div>
        <detail-banner :list='bannerList'></detail-banner>
        <detail-header></detail-header>     
        <detail-list :list='categoryList'></detail-list>
        <div class="content"></div>
    </div>
</template>

<script>
import detailBanner from './components/banner'
import detailHeader from './components/header'
import detailList from './components/list'
import axios from 'axios'
    export default {
        name: 'Detail',
        components: {
            detailBanner,
            detailHeader,
            detailList
        },
        data () {
            return {
                bannerList: {},
                categoryList: []
            }
        },
        methods: {
            getDetailInfo () {
                axios.get('/api/detail.json',{
                    params: {
                        id: this.$route.params.id
                    }
                }).then(this.getDetailInfoSucc)
            },
            getDetailInfoSucc (res) {
                res = res.data
                if (res.ret && res.data) {
                    const data = res.data
                    this.bannerList = data
                    this.categoryList = data.categoryList
                }                
            }
        },
        // mounted () {
        //     this.getDetailInfo()
        // },
        activated () {
            this.getDetailInfo()
        }
        // 注意，因为使用了keepalive组件，所以json数据会缓存，这在city组件里是必须的，但是在detail组件，我们希望每进一次页面请求一次ajax，方法添加一个属性<keep-alive exclude="Detail">, 但是这样会有一个新问题，detail组件内所有组件都无activated钩子了      
    }
</script>

<style lang='stylus' scoped>
    .content
        height: 50rem
</style>
