<template>
<div class="wrapper">
  <swiper :options="swiperOption">
      <swiper-slide v-for="item in swiperList" :key="item.id">
          <img :src="item.url" class="swiper-img">
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</div>

</template>
<script>
  export default {
    name: 'homeSwiper',
    data () {
        return {
            swiperOption: {
                pagination: '.swiper-pagination'
            },
            swiperList: [{
                id: '01', url: 'https://img1.qunarzz.com/travel/poi/1807/fd/60570cea1cee0137.jpg_r_640x290x70_1ec5392e.jpg'
            },
            {
                id: '02', url: 'https://img1.qunarzz.com/travel/poi/1807/72/c79df8443bf5d837.jpg_r_640x290x70_90d45c7f.jpg'
            },
            {
                id: '03', url: 'https://img1.qunarzz.com/travel/poi/1807/8b/b0d72e8467d54737.jpg_r_640x290x70_98b49cbe.jpg'
            },
            ]
        }
    }
  }

</script>
<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active
        background: white
    .wrapper
        width: 100%
        background-color: #eee
        .swiper-img
            width: 100%
            height: auto 
</style>
