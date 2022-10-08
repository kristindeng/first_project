<template>
  <div class="hello">
    <p v-if="flag">我是孙猴子</p>
    <p v-else="flag">你是傻猴子</p>
    <p v-show="flag">你是猪八戒吗</p>
  </div>
</template>

<script>
//v-if指令用于条件性的渲染一块内容。这块内容只会在指令的表达式返回true值的时候被渲染
//v-else：指令来表示v-if的“else”块，flag为true输出我是孙猴子，false返回你是傻猴子
//v-show：用于条件性展示元素
//v-if和v-show的区别：
//1.v-if是真正的条件渲染，因为它会确保在切换的过程中，条件块内的事件监听器和子组件适当地被销毁和重组
//2.v-if也是惰性的：如果在初始渲染时条件为假，则什么也不做，一直到条件为第一次变为真是，才会开始渲染条件块
//3.v-show：不管初始条件是什么元素总会被渲染，并且只是简单的基于css进行切换
//4.一般来说，v-if有更高的切换开销，而v-show有更高的初始渲染开销。如果需要非常频繁的切换，则使用v-show；如果在运行是条件很少改变，用v-if
export default {
  name: 'HelloWorld',
  data(){
    return{
      flag:true
    }
  }

}
</script>


