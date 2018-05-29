<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'HomeHeader',
    props: {
      city: String
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .header
    display flex
    line-height $headerHeight
    background $bgColor
    color #fff
    .header-left
      width .64rem
      float left
      .back-icon
        text-align center
        font-size .3rem
    .header-input
      flex 1
      background #fff
      border-radius .1rem
      margin-top .12rem
      margin-left 0.2rem
      padding-left 0.2rem
      color #ccc
      line-height .64rem
      height .64rem
    .header-right
      width 1.24rem
      float right
      text-align center
      color white
      .arrow-icon
        margin-left -.04rem
        font-size 0.2rem
</style>
