<template>
    <div class="icons">
        <div class="icon">
            <div class="icon-img">
                <img class="icon-content" src="http://p1.meituan.net/jungle/8b5e1702d4145ccf058ba5fb31008c5310912.png">
            </div>
            <p class="icon-desc">热门景点</p>
        </div>
                <div class="icon">
            <div class="icon-img">
                <img class="icon-content" src="http://p1.meituan.net/jungle/8b5e1702d4145ccf058ba5fb31008c5310912.png">
            </div>
            <p class="icon-desc">热门景点</p>
        </div>
                <div class="icon">
            <div class="icon-img">
                <img class="icon-content" src="http://p1.meituan.net/jungle/8b5e1702d4145ccf058ba5fb31008c5310912.png">
            </div>
            <p class="icon-desc">热门景点</p>
        </div>
                <div class="icon">
            <div class="icon-img">
                <img class="icon-content" src="http://p1.meituan.net/jungle/8b5e1702d4145ccf058ba5fb31008c5310912.png">
            </div>
            <p class="icon-desc">热门景点</p>
        </div>
                <div class="icon">
            <div class="icon-img">
                <img class="icon-content" src="http://p1.meituan.net/jungle/8b5e1702d4145ccf058ba5fb31008c5310912.png">
            </div>
            <p class="icon-desc">热门景点</p>
        </div>
                <div class="icon">
            <div class="icon-img">
                <img class="icon-content" src="http://p1.meituan.net/jungle/8b5e1702d4145ccf058ba5fb31008c5310912.png">
            </div>
            <p class="icon-desc">热门景点</p>
        </div>
                <div class="icon">
            <div class="icon-img">
                <img class="icon-content" src="http://p1.meituan.net/jungle/8b5e1702d4145ccf058ba5fb31008c5310912.png">
            </div>
            <p class="icon-desc">热门景点</p>
        </div>
                <div class="icon">
            <div class="icon-img">
                <img class="icon-content" src="http://p1.meituan.net/jungle/8b5e1702d4145ccf058ba5fb31008c5310912.png">
            </div>
            <p class="icon-desc">热门景点</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'homeIcons',
    }    
</script>

<style lang="stylus" scoped>
    .icons
        overflow: hidden
        height: 0
        padding-bottom: 50%
        background: #eeeeee
        .icon
            position: relative
            float: left
            width: 25%
            height: 0
            padding-bottom: 25%
            .icon-img
                position: absolute
                overflow: hidden
                padding: .2rem .4rem
                left: 0
                top: 0
                right: 0
                bottom: .2rem
                .icon-content
                    display: block
                    margin: 0 auto 
                    width: 100%
            .icon-desc
                position: absolute
                left: 0
                right: 0
                bottom: 0
                height: .4rem
                text-align: center
</style>
