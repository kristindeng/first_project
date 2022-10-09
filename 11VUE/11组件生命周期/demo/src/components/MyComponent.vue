<template>
<h3>生命周期函数</h3>
  <p>{{ message }}</p>
  <button @click="message='数据'">点击</button>
</template>

<script>
export default {
  name: "MyComponent",
  data(){
    return{
      message:""
    }
  },
  beforeCreate() {
    console.log("beforeCreate:组件创建之前")
  },
  created() {
    console.log("created:组件创建完成")
  },
  beforeMount() {
    console.log("beforeMount：渲染之前")
  },
  mounted() {
    console.log("mounted：渲染完成")
    //把网络请求放到这里
  },
  beforeUpdate() {
    console.log("beforeUpdate:组件更新之前")
    //卸载之前，把消耗性能的处理都干掉，比如：定时器
  },
  updated() {
    console.log("updated：组件更新完成")
  },
  beforeUnmount() {
    console.log("beforeUnmount：卸载之前")
  },
  unmounted() {
    console.log("unmounted:卸载完成")
  }

}
</script>

<style scoped>

</style>