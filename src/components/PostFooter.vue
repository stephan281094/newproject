<template>
  <footer>
    <el-row>
      <el-col :span="7"
        ><div class="grid-content" />
        <div class="logo">
          <a><img src="../assets/images/logo2.svg" class="logoimg" /></a>

          <div class="socialmedia">
            <a href="#"><img src="../assets/images/insta.svg" /></a
            ><a href="#"></a
            ><a href="#"><img src="../assets/images/twitter.svg" /></a
            ><a href="#"><img src="../assets/images/facebook.svg" /></a>
          </div>
        </div>
      </el-col>
      <el-col :span="5"
        ><div class="grid-content" />
        <div v-for="menu of menus">
          <a href="#"
            ><p class="menuoption">{{ menu }}</p></a
          >
        </div></el-col
      >
      <el-col :span="5"
        ><div class="grid-content" />
        <div v-for="link of additionalLinks">
          <a href="#">
            <p class="link">{{ link }}</p>
          </a>
        </div></el-col
      >
      <el-col :span="7"
        ><div class="grid-content" />
        <div class="podcasts">
          <a href="#"><img src="../assets/images/spotify.svg" /></a
          ><a href="#"><img src="../assets/images/pocketcasts.svg" /></a
          ><a href="#"><img src="../assets/images/soundcloud.svg" /></a
          ><a href="#"><img src="../assets/images/apple.svg" /></a
          ><a href="#"><img src="../assets/images/overcast.svg" alt="" /></a>
        </div>
      </el-col>
    </el-row>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      menus: ["Home", "About", "Episodes", "Contact"],
      additionalLinks: [
        "Style Guide",
        "Instructions",
        "Changelog",
        "Credit",
        "Powered by Webflow",
        "Licenses",
      ],
    };
  },
};
</script>
<style scoped>
.socialmedia {
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  margin-left: 1.5rem;
}
.menuoption {
  color: #ffffff;
  text-decoration: none;
  font: 17px sans-serif;
}
.link {
  color: #ffffff;
  text-decoration: none;
  font: 17px sans-serif;
}
.podcasts {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-top: 1rem;
}
.logoimg {
  margin-left: 1.5rem;
}
.logo {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}
</style>
