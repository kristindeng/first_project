<template>
  <div class="hello">
    <!--    简介：可以用v-model指令在表单<input>、<textarea>、<select>元素上创建双向数据绑定。它负责监听用户的输入事件来更新数据-->
    <!--    修饰符（.lazy):减少向服务器请求数据的次数，回车或者失去焦点时，才显示数据-->
    <!--    过滤用户输入的首位空白字符，可以给v-model添加trim修饰符-->
    <input type="text" v-model.lazy="username">
    <input type="text" v-model.trim="password">
    <p>{{ username }},{{ password }}</p>
    <button @click="clickGetUserName">获取用户名</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      username: "",
      password: ""
    }
  },
  methods: {
    clickGetUserName() {
      console.log(this.username)
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
