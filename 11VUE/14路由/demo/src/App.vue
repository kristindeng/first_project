<template>
  <nav>
    <router-link to="/">首页</router-link> |
    <router-link to="/about">关于</router-link> ｜
    <router-link to="/news">新闻</router-link> ｜
    <router-link to="/settings">设置</router-link>
  </nav>
  <router-view/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
