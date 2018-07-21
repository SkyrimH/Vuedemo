<template>
    <ul class="list">
        <li class="item" v-for="item in letters" :key="item"
        :ref="item"
        @click="handleLetterClick"
        @touchstart.prevent="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd">{{item}}</li>
    </ul>
</template>
<script>
    export default {
        name: 'cityAlphabet',
        props: {
            cities: Object
        },
        data () {
            return {
                touchStatus: false,
                startY: 0,
                timer: null             
            }
        },
        // updated生命周期钩子
        updated () {
            this.startY = this.$refs['A'][0].offsetTop
        },
        computed: {
            letters () {
                const letters = []
                for (let i in this.cities) {
                    letters.push(i)                
                }
                return letters
            }
        },
        methods: {
            handleLetterClick (e) {
                this.$emit('jump', e.target.innerText)
            },
            handleTouchStart () {
                this.touchStatus = true
            },
            handleTouchMove (e) {
                if (this.touchStatus) {
                    // 设置函数截流
                    if (this.timer) {
                        clearTimeout(this.timer)
                    }
                    this.timer = setTimeout(() => {
                        // 元素的touches方法和clientY方法
                        const touchY = e.touches[0].clientY - 80
                        const index = Math.floor((touchY - this.startY) / 20)
                        if (index >= 0 && index < this.letters.length) {
                            this.$emit('jump', this.letters[index])             
                        }     
                    }, 16)               
                }
            },
            handleTouchEnd () {
                this.touchStatus = false
            }
        }
    }
</script>
<style lang='stylus' scoped>
    @import '~style/varibles.styl'
    .list
        display: flex
        flex-direction: column
        justify-content: center
        position: absolute
        top: 1.6rem
        right: 0
        bottom: 0
        width: .4rem
        .item
            line-height: .4rem
            color: $bgColor
</style>