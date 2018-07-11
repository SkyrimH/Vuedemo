<template>
    <div class="header">
        <router-link to="/">
            <div class="header-left iconfont">&#xe624;</div>
        </router-link>        
        <div class="header-middle">
            城市选择
        </div>
    </div>
</template>
<script>
    export default {
        name: 'cityHeader',
    }
</script>
<style lang='stylus' scoped>
    @import '~style/varibles.styl'
    .header
        display: flex
        height: .88rem
        background: $bgColor
        color: #fff
        .header-left
            width: .88rem
            height: .88rem
            line-height: .88rem
            text-align: center
            color: #fff
        .header-middle
            flex: 1
            overflow: hidden
            margin-right: .88rem
            white-space: nowrap
            line-height: .88rem
            font-size: .33rem
            text-align: center
            
</style>
