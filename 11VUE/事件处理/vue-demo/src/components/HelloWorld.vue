<template>
  <div class="hello">
<!--    监听事件：可以使用v-on指令（通常缩写为@符号）来监听DOM事件，并在触发事件时执行一些JS。-->
<!--    用法为：v-on：click="methodName"或快捷方式@click=”methodName“-->
    <button @click="counter +1">点击:counter = {{ counter }}</button>
    <button @click="clickHandle">按钮</button>
    <p>{{ message }}</p>
    <button @click="say('hi')">say hi</button>
    <button @click="say('what')">say what</button>
    <ul>
      <li @click="clickItemHandle(item)"v-for="(item,index) in names" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
      counter:1,
      message:"消息通知",
      names:["iwen","ime","frank"]
    }
  },
  //事件处理方法：methods
  methods:{
    clickHandle(event){
      console.log("哈哈哈")
      //在事件中，读取data中的属性，是需要通过this.属性
      this.message = "消息被撤回"
      //event是原生DOM event
      console.log(event);
      event.target.innerHTML = "点击之后"
    },
    say(data){
      console.log("data")
    },
    clickItemHandle(item){
      console.log(item);
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
