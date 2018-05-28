<template>
  <div class="wrapper">
    <!--v-if="list.length"获取到数据之后在创建swiper，要不然swiper会初始就在最后一张图片-->
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'HomeSwiper',
    props: {
      list: Array
    },
    data () {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          loop: true
        }
      }
    },
    computed: {
      showSwiper () {
        return this.list.length
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active //>>> 样式穿透，不受scoped的限制
    background #fff

  .wrapper
    width 100%
    height 0
    overflow hidden
    padding-bottom 30%
    background #eee
    .swiper-img
      width 100%
</style>
