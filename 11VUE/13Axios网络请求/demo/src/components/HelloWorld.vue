<template>
  <div class="hello">
    <p>{{ chengpin }}</p>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'HelloWorld',
  data(){
    return{
      chengpin:{}
    }
  },
 mounted() {
    axios({
      method:"get",
      headers: {
        contentType: "application/json"
      },
      url:"http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php"
    }).then(content =>{
      // 打印返回的内容
      // console.log(content.data.chengpinDetails[0].title)
      // 在页面显示title字段
      this.chengpin=content.data.chengpinDetails[0].title
    })

   axios.postForm("http://iwenwiki.com/api/blueberrypai/login.php", {
     user_id: "iwen@qq.com",
     password: "iwen123",
     verification_code: "crfvw"
   }).then(res => {
     console.log(res.data)
   })
 }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
