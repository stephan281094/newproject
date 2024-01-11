<template>
  <footer>
    <el-row>
      <el-col :span="7"
        ><div class="grid-content" />
        <div class="logo">
          <a href="#"
            ><img src="../assets/icons/LogoFooter.svg" class="logoImage"
          /></a>

          <div class="socialmedia">
            <a href="#"><img src="../assets/icons/InstagramIcon.svg" /></a>
            <a href="#"><img src="../assets/icons/TwitterIcon.svg" /></a
            ><a href="#"><img src="../assets/icons/FacebookIcon.svg" /></a>
          </div>
        </div>
      </el-col>
      <el-col :span="5"
        ><div class="grid-content" />
        <div v-for="item of menuItems" :key="item.id">
          <a :href="item.link"
            ><p class="menuoption">{{ item.text }}</p></a
          >
        </div></el-col
      >
      <el-col :span="5"
        ><div class="grid-content" />
        <div v-for="link of additionalLinks" :key="link.id">
          <a :href="link.link">
            <p class="link">{{ link.text }}</p>
          </a>
        </div></el-col
      >
      <el-col :span="7"
        ><div class="grid-content" />
        <div class="podcasts">
          <a href="https://www.spotify.com"
            ><img src="../assets/icons/SpotifyIcon.svg" /></a
          ><a href="https://pocketcasts.com"
            ><img src="../assets/icons/PocketcastIcon.svg" /></a
          ><a href="https://soundcloud.com"
            ><img src="../assets/icons/SoundcloudIcon.svg" /></a
          ><a href="https://www.apple.com/apple-podcasts/"
            ><img src="../assets/icons/ApplePodcastIcon.svg" /></a
          ><a href="https://overcast.fm"
            ><img src="../assets/icons/OvercastIcon.svg"
          /></a>
        </div>
      </el-col>
    </el-row>
  </footer>
</template>
<script>
export default {
  name: "PageFooter",
  props: ["menuItems", "additionalLinks"],
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
.menuoption:hover {
  color: #118da8;
}
.link {
  color: #ffffff;
  text-decoration: none;
  font: 17px sans-serif;
}
.link:hover {
  color: #118da8;
}
.podcasts {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-top: 1rem;
}
.logoImage {
  margin-left: 1.5rem;
}
.logo {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}
</style>
