<template>
    <ul class="list">
        <li class="item" v-for="item in letters" :key="item"
        :ref="item"
        @click="handleLetterClick"
        @touchstart="handleTouchStart"
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
                touchStatus: false
            }
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
                    const startY = this.$refs['A'][0].offsetTop
                    // 元素的touches方法和clientY方法
                    const touchY = e.touches[0].clientY - 80
                    const index = Math.floor((touchY - startY) / 20)
                    if (index >= 0 && index < this.letters.length) {
                        this.$emit('jump', this.letters[index])             }                    
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