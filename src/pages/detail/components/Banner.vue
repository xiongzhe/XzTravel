<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img src="http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_600x330_8572a930.jpg"
           class="banner-img">
      <div class="banner-info">
        <div class="banner-title">上海迪士尼乐园</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe600;</span>
          15
        </div>
      </div>
    </div>
    <common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
  </div>
</template>

<script>
  import CommonGallary from 'common/gallary/Gallary'

  export default {
    name: 'DetailBanner',
    data () {
      return {
        showGallary: false,
        imgs: [
          'http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_600x330_8572a930.jpg',
          'http://img1.qunarzz.com/sight/p0/1506/30/7a528fae12c17e6e29d5d13a9d9813ee.water.jpg_600x330_866232e3.jpg'
        ]
      }
    },
    methods: {
      handleBannerClick () {
        this.showGallary = true
      },
      handleGallaryClose() {
        this.showGallary = false
      }
    },
    components: {
      CommonGallary
    }
  }
</script>

<style lang="stylus" scoped>
  .banner
    overflow hidden
    height 0
    padding-bottom 55%
    position relative
    .banner-img
      width 100%
    .banner-info
      display flex
      position absolute;
      left 0
      right 0
      bottom 0
      line-height .6rem
      color white
      background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-title
        flex 1
        font-size .32rem
        padding 0 .2rem
      .banner-number
        margin-top .14rem
        padding 0 .4rem
        height .32rem
        line-height .32rem
        border-radius .2rem
        background rgba(0, 0, 0, 0.2)
        font-size .24rem
        .banner-icon
          font-size .24rem
</style>
