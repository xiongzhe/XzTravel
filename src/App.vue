<template>
  <div id="app">
    <!-- 显示的是当前路由地址所对应的内容 exclude="Detail"这个页面不缓存（会导致有些手机导航显示不出来） -->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
