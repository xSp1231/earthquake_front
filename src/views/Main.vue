<template>
  <div class="common-layout" >
    <el-container class="container">
      <el-header class="header" >
        <topbar></topbar>
      </el-header>
      <el-main style="background-color: #f5f5f5">
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import topbar from "../components/Header.vue";

export default {
  name: "Main",
  components: {
    topbar
  }

}
</script>

<style scoped>
.common-layout{
  position: absolute;
  top:0;
  left: 0;
  right: 0;
  bottom:0;
}
.container{
  position:relative;
  top: 0;
  left:0;
  width: 100%;
  height: 150%;
}
.header {
  position: fixed;
  top:0;
  left: 0;
  width: 100%;
  height: 47px;
  background-color: #c8f3f3;
  z-index: 99999999;
}
</style>
