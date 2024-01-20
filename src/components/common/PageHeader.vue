<template>
  <el-header>
    <el-row :gutter="20" justify="space-between">
      <el-col :span="18"
        ><div class="grid-content" />
        <router-link to="/"
          ><img src="../../assets/icons/LogoHeader.svg" class="logoImage" />
        </router-link>
      </el-col>

      <el-col :span="2"
        ><div class="grid-content" />
        <router-link to="/"><p class="headerMenu">Home</p></router-link></el-col
      >
      <el-col :span="2"
        ><div class="grid-content" />
        <router-link to="/abilities"
          ><p class="headerMenu">Abilities</p></router-link
        ></el-col
      >
      <el-col :span="2"
        ><div class="grid-content" />
        <router-link to="/about"
          ><p class="headerMenu">About</p></router-link
        ></el-col
      >
    </el-row>
  </el-header>
</template>

<style scoped>
.logoImage {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>
