<template>
  <header>
    <el-row align-center>
      <el-col :span="16"
        ><div class="grid-content" />
        <a href="#"><HeaderLogo class="logoImage"></HeaderLogo></a>
      </el-col>

      <el-col :span="2" v-for="item of menuItems" :key="item.id"
        ><div class="grid-content" />
        <a :href="item.link"
          ><p class="navlink">{{ item.text }}</p></a
        ></el-col
      >
    </el-row>
  </header>
</template>
<script>
import HeaderLogo from "./icons/LogoHeader.vue";
export default {
  name: "PageHeader",
  props: ["menuItems"],
  components: {
    HeaderLogo,
  },
};
</script>
<style scoped>
.logoImage {
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 1.5rem;
}
.logoImage:hover {
  color: #118da8;
}
.navlink {
  color: #ffffff;
  font: 18px sans-serif;
  text-align: center;
}
.navlink:hover {
  color: #118da8;
}
</style>
