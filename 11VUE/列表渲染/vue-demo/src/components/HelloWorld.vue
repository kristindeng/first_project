<template>
  <div class="hello">
    <h3>列表渲染</h3>
<!--    维护状态：为了给Vue一个提示，以便它能跟踪每个节点的身份，从而重用和重新排序现有元素，需要为每项提供一个唯一的key-->
    <ul>
      <li v-for="item in newsList" :key="item.id">
        {{ item.title}}
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
 data(){
    return{
      newsList:[
        {
          id:1001,
          title:"今日新闻1"
        },
        {
         id:1002,
         title:"今日新闻2"
        },
        {
          id:1003,
          title: "今日新闻3"
        }
      ]
    }
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
