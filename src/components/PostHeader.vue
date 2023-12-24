<template>
  <header>
    <el-row align-center>
      <el-col :span="16"
        ><div class="grid-content" />
        <a href="#"
          ><img src="../assets/images/IMAGE-2.svg" class="logoimg"
        /></a>
      </el-col>

      <el-col :span="2"
        ><div class="grid-content" />
        <a href="#"><p class="navlink">Home</p></a></el-col
      >
      <el-col :span="2"
        ><div class="grid-content" />
        <a href="#"><p class="navlink">Episodes</p></a></el-col
      >
      <el-col :span="2"
        ><div class="grid-content" />
        <a href="#"><p class="navlink">About</p></a></el-col
      >
      <el-col :span="2"
        ><div class="grid-content" />
        <a href="#"><p class="navlink">Contact</p></a></el-col
      >
    </el-row>
  </header>
</template>
<script></script>
<style scoped>
.logoimg {
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 1.5rem;
}
.navlink {
  color: #ffffff;
  font: 18px sans-serif;
  text-align: center;
}
</style>
