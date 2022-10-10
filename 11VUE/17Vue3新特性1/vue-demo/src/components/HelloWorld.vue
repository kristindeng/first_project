<template>
  <div class="hello">
<p>{{ message }}</p>
    <ul>
      <li v-for="(name, index) in names.list" :key="index">姓名：{{ name }}</li>
    </ul>
    <button @click="clickHandle">按钮</button>
    <p>
      {{ msg }}
    </p>

  </div>
</template>

<script>
import { ref, reactive } from "vue"
export default {
  name: 'HelloWorld',
  props:{
    msg:String
  },
  //组合式API
  setup(props,ctx){
    console.log("这是我打印的信息: " + props.msg)
    //setup中没有this关键字，ctx就是当前实例对象
    console.log(ctx)
    //ref 存一些简单数据类型
    const message = ref("我是消息")
    //reactive放一些复杂的数据对象
    const names = reactive({
      list:["iwen",'lan',"oldwei"]
    })
    function clickHandle(){
      //通过message的value去修改数据
      message.value="我是新消息"
      console.log("点击了")
    }
    return {
      message,
      names,
      clickHandle
    }
  }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
