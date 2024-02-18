<template>
  <el-header>
    <el-row :gutter="20">
      <el-col :span="16"
        ><div class="grid-content" />
        <router-link to="/"
          ><img src="../../assets/icons/pokemonlogo.svg" class="logoImage" />
        </router-link>
      </el-col>
      <el-col :span="8" class="headerItems">
        <div class="grid-content" />
        <router-link to="/"><p class="headerMenu">Home</p></router-link
        ><router-link to="/abilities"
          ><p class="headerMenu">Abilities</p></router-link
        >
        <router-link to="/about"><p class="headerMenu">About</p></router-link>
        <router-link to="/yesorno"
          ><p class="headerMenu">Yes Or No</p></router-link
        >
      </el-col>
    </el-row>
  </el-header>
</template>

<style scoped>
.logoImage {
  margin-top: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
  height: 3.75rem;
}
.headerItems {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
