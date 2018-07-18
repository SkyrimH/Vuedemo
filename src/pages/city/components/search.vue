<template>
    <div>
        <div class="search">
            <input v-model="keyword" class="searchInput" type="text" placeholder="输入城市名或拼音">
        </div>
        <div class="searchContent" ref="search" v-show="keyword">
            <ul>
                <li class="searchItem border-bottom" v-for="item in list" :key="item.id" 
                @click="handleCityClick(item.name)">{{item.name}}</li>
                <li class="searchItem border-bottom" v-show="hasNodata">没有找到匹配数据</li>
            </ul>
        </div>
    </div>

</template>
<script>
    import Bscroll from 'better-scroll'
    export default {
        name: 'citySearch',
        props: {
            cities: Object
        },
        data () {
            return {
                keyword: "",
                list: [],
                timer: null
            }
        },
        methods: {
            handleCityClick (city) {
                // 组件通过dispatch调用vuex的actiion，注意，传入一个函数名和需要的参数
                this.$store.dispatch('changeCity', city)
                this.$router.push('/')
            }
        },
        computed: {
            hasNodata () {
                return !this.list.length
            }
        },
        watch: {
            keyword () {
                if (this.timer) {
                    clearTimeout(this.timer)
                }
                if (!this.keyword) {
                    this.list = []
                    return
                }
                this.timer = setTimeout(() => {
                    const result = []
                    for( let i in this.cities) {
                        // 如果搜索对象存在，则放到list中
                        this.cities[i].forEach((element) => {
                            if (element.spell.indexOf(this.keyword) > -1 || element.name.indexOf(this.keyword) > -1) {
                                result.push(element)
                            }
                        });                        
                    }
                    this.list = result
                }, 100)
            }
        },
        mounted () {
            this.scroll = new Bscroll(this.$refs.search)
        }
    }
</script>
<style lang='stylus' scoped>
    @import '~style/varibles.styl'
    .search
        height: .72rem
        padding: 0 .2rem
        background: $bgColor        
        .searchInput
            // box-sizing: border-box属性，将width固定为盒模型宽度，若没有该项，width：100%为盒模型内容宽度
            box-sizing: border-box
            width: 100%
            height: .62rem
            padding:0 .1rem!important
            line-height: .62rem            
            text-align: center
            border-radius: .06rem
    .searchContent
        z-index: 1
        overflow: hidden
        position: absolute
        top: 1.58rem
        left: 0
        right: 0
        bottom: 0
        background: #eee
        .searchItem
            line-height: .62rem
            padding-left: .2rem
            background: #fff
            colorL #666
</style>