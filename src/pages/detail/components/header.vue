<template>
    <div>
        <router-link tag="div" to="/" class="header-abs" v-show="showAbs"><span class="iconfont abs-back">&#xe624;</span></router-link>
        <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
            <router-link to="/">
                <div class="header-left iconfont">&#xe624;</div>
            </router-link>        
            <div class="header-middle">
                城市选择
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'detailHeader',
        data () {
            return {
                showAbs: true,
                opacityStyle: {
                    opacity: 0
                }
            }
        },
        methods: {
            handleScroll () {
                const top = document.documentElement.scrollTop
                if (top > 60) {
                    let opacity = top / 140
                    opacity = opacity > 1 ? 1 : opacity
                    this.opacityStyle = {
                        opacity
                    }
                    this.showAbs = false
                } else {
                    this.showAbs = true
                }                
            }
        },
        activated () {
            // 监听滑动事件
            window.addEventListener('scroll', this.handleScroll)
        },
        deactivated () {
            // 解绑全局事件，否则会资源浪费
            window.removeEventListener('scroll', this.handleScroll)
        }
    }
</script>

<style lang='stylus' scoped>
    @import '~style/varibles.styl'
    .header-abs
        position:absolute
        left: .2rem
        top: .2rem
        width: .8rem
        height: .8rem
        border-radius: .4rem
        line-height: .8rem
        text-align: center
        background: rgba(0,0,0,.8)
        .abs-back
            color: #ccc
            font-size: .4rem
    .header-fixed
        position: fixed
        top: 0
        right: 0
        left: 0
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
