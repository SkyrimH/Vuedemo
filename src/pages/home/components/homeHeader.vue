<template>
    <div class="homeHeader">
        <div class="header-left">
            <span class="iconfont">&#xe624;</span>
        </div>
        <div class="header-input"><span class="iconfont">&#xe632;</span>搜索</div>
        <router-link to="/city">
            <div class="header-right">{{this.$store.state.city}}
                <span class="iconfont arrow-icon">&#xe64a;</span>
            </div>
        </router-link>

    </div>
</template>

<script>
    export default {
        name: 'HomeHeader',
    }
</script>
<style lang="stylus" scoped>
    @import '~style/varibles.styl'
    .homeHeader
        display: flex
        line-height: .86rem
        background: $bgColor
        color: #fff
        .header-left
            width: .64rem
            float: left
            text-align: center
        .header-input
            flex: 1
            height: .64rem
            line-height: .64rem
            margin-top: .12rem
            margin-left: .2rem
            padding-left: .2rem
            background: #fff
            border-radius: .1rem
            color: #ccc
        .header-right
            width: 1.24rem
            float: right 
            text-align: center
            color: white
            .arrow-icon
                margin-left: .06rem
                font-size: .24rem
</style>