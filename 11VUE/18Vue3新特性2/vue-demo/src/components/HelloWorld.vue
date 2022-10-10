<template>
  <div class="hello">
<p>{{ message }}</p>
  </div>
</template>

<script>
import {onMounted,inject} from "vue";

export default {
  name: 'HelloWorld',
  setup(){
    //比以前有优势，可以放多个，为了业务拆分方便
    onMounted(() =>{
      console.log("生命周期函数：onMounted")
    })
    onMounted(() =>{
      console.log("生命周期函数：onMounted")
    })

    const message = inject("message")
    return{
      message
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
