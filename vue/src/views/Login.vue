<template>
<h2>登录页面</h2>
  <el-button type="success" @click="change()">to home</el-button>
</template>

<script>
export default {
  name: "Login",
  methods:{
  change(){
    this.$router.push("/main/about")
  }
}
}
</script>

<style scoped>

</style>
