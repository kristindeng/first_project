//单文件组件：Vue单文件组件（缩写为SFC),是一种特殊的文件格式，它允许将Vue组件的模板、逻辑与样式封装在单个文件中
//加载组件：第一步：引入组件importMyComponentVue from'./components/MyComponent.vue'（在App.vue中引入）
//第二步：挂载组件components：{MyComponentVue}
//第三步：显示组件<my-componentVue/>
<template>
  <h3>我是单文件组件</h3>
</template>

<script>
export default {
  name: "MyComponent"
}
</script>
<!--scoped:如果在style中添加此属性，就代表着，当前样式只在当前组件中生效-->

<style scoped>
h3 {
  color: red;
}
</style>