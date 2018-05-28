<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>

</template>

<script>
  export default {
    name: 'HomeWeekend',
    data () {
      return {
        recommendList: [{
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1507/d9/2ddc7652fdba16.jpg_r_640x214_5e62f1a3.jpg',
          title: '世界之窗',
          desc: '各个国家建筑设计，游走于世界之中'
        }, {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1602/88/bf120edeaea383.jpg_r_640x214_f8591f7b.jpg',
          title: '世界之窗',
          desc: '各个国家建筑设计，游走于世界之中'
        }, {
          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/eb/e4b181a6957c36.jpg_r_640x214_4abbdbc0.jpg',
          title: '世界之窗',
          desc: '各个国家建筑设计，游走于世界之中'
        }, {
          id: '0004',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1603/df/e0ab9dfce8786e.jpg_r_640x214_5e49a793.jpg',
          title: '世界之窗',
          desc: '各个国家建筑设计，游走于世界之中'
        }]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"

  .title
    margin-top .2rem
    line-height .6rem
    background #eee
    text-indent .2rem

  .item-img-wrapper
    overflow hidden
    height 0
    padding-bottom 33.9%
    .item-img
      width 100%

  .item-info
    padding .1rem
    .item-title
      line-height .54rem
      font-size .32rem
      ellipsis()
    .item-desc
      line-height: .4rem
      color #ccc
      ellipsis()

</style>
