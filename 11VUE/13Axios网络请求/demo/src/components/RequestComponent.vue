<template>
<div>
  <p>axios的封装</p>
</div>
</template>

<script>
import api from "@/api/index";

export default {
  name: "RequestComponent",
  mounted() {
    // api.getChengpin().then(res => {
    //   console.log(res)
    // })
    api.getKuayu()
    .then(res => {
      console.log(res);
    })
  }

}
</script>
