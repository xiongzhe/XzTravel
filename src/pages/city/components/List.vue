<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">深圳</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title">热门城市</div>
        <div class="button-list">
          <div v-for="item of hot" :key="item.id" class="button-wrapper">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div v-for="(item, key) of cities" :key="key" class="area">
        <div class="title">{{key}}</div>
        <div class="item-list">
          <div v-for="innerItem of item" :key="innerItem.id" class="item">{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Bscroll from 'better-scroll'

  export default {
    name: 'CityList',
    props: {
      cities: Object,
      hot: Array
    },
    mounted () {
      this.scroll = new Bscroll(this.$refs.wrapper)
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"

  .list
    overflow hidden
    position absolute;
    top 1.58rem
    left 0
    right 0
    bottom 0
    .title
      line-height .54rem
      background #eee
      padding-left .2rem
      color #666
      font-size .26rem

    .button-list
      overflow hidden
      padding .1rem .6rem .1rem .1rem
      .button-wrapper
        float left
        width 33.33%
        .button
          margin .1rem
          padding .1rem 0
          text-align center
          border .02rem solid #ccc

    .item-list
      .item
        line-height .54rem
        padding-left .2rem
        border-bottom .02rem solid #eee

</style>
