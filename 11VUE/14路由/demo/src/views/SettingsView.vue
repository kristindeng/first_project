<template>
<p>设置</p>
  <nav>
    <router-link to="/settings/update">软件更新</router-link> |
    <router-link to="/settings/timezone">日期与时间</router-link>
  </nav>
  <router-view/>
</template>

<script>
export default {
  name: "PersonView"
}
</script>

<style scoped>

</style>
