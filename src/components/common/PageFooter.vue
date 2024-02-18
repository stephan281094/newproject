<template>
  <el-footer>
    <el-row>
      <el-col :span="7"
        ><div class="grid-content" />
        <div class="logo">
          <router-link to="/"
            ><img src="../../assets/icons/pokemonlogo.svg" class="logoImage"
          /></router-link>

          <div class="socialMedia">
            <a href="#"><img src="../../assets/icons/InstagramIcon.svg" /></a>
            <a href="#"><img src="../../assets/icons/TwitterIcon.svg" /></a
            ><a href="#"><img src="../../assets/icons/FacebookIcon.svg" /></a>
          </div>
        </div>
      </el-col>

      <el-col :span="5"
        ><div class="grid-content" />
        <router-link to="/"><p class="menuOption">Home</p> </router-link>
        <router-link to="/abilities"
          ><p class="menuOption">Abilities</p>
        </router-link>
        <router-link to="/about"><p class="menuOption">About</p> </router-link>
        <router-link to="/yesorno"
          ><p class="headerMenu">Yes Or No</p></router-link
        >
      </el-col>
      <el-col :span="5"
        ><div class="grid-content" />
        <router-link to="/"><p class="menuOption">Home</p> </router-link>
        <router-link to="/abilities"
          ><p class="menuOption">Abilities</p>
        </router-link>
        <router-link to="/about"><p class="menuOption">About</p> </router-link>
        <router-link to="/yesorno"
          ><p class="headerMenu">Yes Or No</p></router-link
        ></el-col
      >
      <el-col :span="7"
        ><div class="grid-content" />
        <div class="podcasts">
          <a href="https://www.spotify.com"
            ><img src="../../assets/icons/SpotifyIcon.svg" /></a
          ><a href="https://pocketcasts.com"
            ><img src="../../assets/icons/PocketcastIcon.svg" /></a
          ><a href="https://soundcloud.com"
            ><img src="../../assets/icons/SoundcloudIcon.svg" /></a
          ><a href="https://www.apple.com/apple-podcasts/"
            ><img src="../../assets/icons/ApplePodcastIcon.svg" /></a
          ><a href="https://overcast.fm"
            ><img src="../../assets/icons/OvercastIcon.svg"
          /></a>
        </div>
      </el-col>
    </el-row>
  </el-footer>
</template>
<script>
export default {
  name: "PageFooter",
  props: ["menuItems", "additionalLinks"],
};
</script>
<style scoped>
.socialMedia {
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
}
.podcasts {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-top: 1rem;
}
.logoImage {
  cursor: pointer;
  height: 6rem;
}
</style>
