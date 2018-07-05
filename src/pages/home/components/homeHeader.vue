<template>
    <div class="homeHeader">
        <div class="header-left">返回</div>
        <div class="header-input">请输入</div>
        <div class="header-right">城市</div>
    </div>
</template>

<script>

    export default {
        name: 'HomeHeader',
    }
</script>
<style lang="stylus" scoped>
    .homeHeader
        display: flex
        line-height: .86rem
        background: #00bcd4
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
            background: #ffffff
            border-radius: .1rem
            color: #ccc
        .header-right
            width: 1.24rem
            float: right 
            text-align: center
</style>