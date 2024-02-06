<template>
  <el-header>
    <div>
      <el-row :gutter="20">
        <el-col :span="18"
          ><div class="grid-content" />
          <router-link to="/"
            ><img src="../../assets/icons/LogoHeader.svg" class="logoImage" />
          </router-link>
        </el-col>
        <el-col :span="6" class="headerItems">
          <div class="grid-content" />
          <router-link to="/"><p class="headerMenu">Home</p></router-link
          ><router-link to="/abilities"
            ><p class="headerMenu">Abilities</p></router-link
          >
          <router-link to="/about"><p class="headerMenu">About</p></router-link>
        </el-col>
      </el-row>
    </div>
  </el-header>
</template>
<script></script>
<style scoped>
.logoImage {
  margin-top: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
}
.headerItems {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
