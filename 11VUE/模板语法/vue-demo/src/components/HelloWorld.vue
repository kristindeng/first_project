<template>
  <div class="hello">
    <h3>学习Vue：模板语法</h3>
<!--文本：数据绑定最常见的形式就是使用“Mustache”（双大括号）语法的文本插值;-->
<!--一般配合js中的data（）设置数据-->
    <p>{{ message }}</p>
    <div>{{ rawHtml }}</div>

<!--原始HTML：双括号会将数据解释为普通文本，而非HTML代码。为了输出真正的HTML，需要使用v-html指令-->
    <div v-html="rawHtml"></div>

<!--Mustache语法不能在HTML属性中使用，但是可以使用v-bind，v-bind可以简写成（：）-->
    <div v-bind:id="dynamicId"></div>

<!--使用js表达式，这些表达式会在当前活动实例的数据作用域下作为js被解析。有个限制就是，每个绑定都只能包含单个表达式-->
    <p>{{ number+1 }}</p>
    <p>{{ flag ? "孙猴子" :"傻猴子"}}</p>
  </div>


</template>
<!--//template里面是写html的，script里面是写业务逻辑的-->
<script>
 export default {
  name: 'HelloWorld',
  data(){
    return{
      message:"学习Vue",
      rawHtml:"<a href='https://www.itbaizhan.com'>百战</a>",
      dynamicId:1001,
      number:10,
      flag:true,//孙猴子
    }
  }
}
</script>

