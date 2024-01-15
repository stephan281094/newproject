<template>
  <header>
    <el-row align-center>
      <el-col :span="18"
        ><div class="grid-content" />
        <router-link to="/"
          ><img src="../../assets/icons/LogoHeader.svg" class="logoImage" />
        </router-link>
      </el-col>

      <el-col :span="2"
        ><div class="grid-content" />
        <router-link to="/"><p class="menuOption">Home</p></router-link></el-col
      >
      <el-col :span="2"
        ><div class="grid-content" />
        <router-link to="/abilities"
          ><p class="menuOption">Abilities</p></router-link
        ></el-col
      >
      <el-col :span="2"
        ><div class="grid-content" />
        <router-link to="/about"
          ><p class="menuOption">About</p></router-link
        ></el-col
      >
    </el-row>
  </header>
</template>
<script>
export default {
  name: "PageHeader",
  props: ["menuItems"],
};
</script>
<style scoped>
.logoImage {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>
