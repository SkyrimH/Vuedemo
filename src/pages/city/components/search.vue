<template>
    <div class="search">
        <input class="searchInput" type="text" placeholder="输入城市名或拼音">
    </div>
</template>
<script>
    export default {
        name: 'citySearch',
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
</style>