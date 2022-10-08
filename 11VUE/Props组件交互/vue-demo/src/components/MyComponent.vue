<template>
<!--  组件与组件之间是需要存在交互的，Prop是可以在组件上注册一些自定义attribute-->
<!--  Prop类型：传递参数没有类型限制-->
  <h3>prop传递数据</h3>
  <p>{{ title }}</p>
  <p>age={{ age }}</p>
  <ul>
    <li v-for="(item,index) in names" :key="index">{{ item }}</li>
  </ul>
</template>

<script>
export default {
  name:"MyComponent",
  props:{
    title:{
      type:String,
      default:""
    },
    age:{
      type:Number,
      default: 0
    },
    names:{
      type:Array,
      //数组和对象必须使用函数进行返回
      default:function () {
        return[]
      }
    }
  }
}
</script>

<style scoped>
</style>