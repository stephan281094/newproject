<template>
  <footer>
    <el-row>
      <el-col :span="7"
        ><div class="grid-content" />
        <div class="logo">
          <a href="#"><LogoFooter class="logoImage" /></a>

          <div class="socialmedia">
            <a href="#"><InstagramIcon /></a>
            <a href="#"><TwitterIcon /></a><a href="#"><FacebookIcon /></a>
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
          <a href="https://www.spotify.com"><SpotifyIcon /></a
          ><a href="https://pocketcasts.com"><PocketCastIcon /></a
          ><a href="https://soundcloud.com"><SoundCloudIcon /></a
          ><a href="https://www.apple.com/apple-podcasts/"
            ><ApplePodcastIcon /></a
          ><a href="https://overcast.fm"><OvercastIcon /></a>
        </div>
      </el-col>
    </el-row>
  </footer>
</template>
<script>
import LogoFooter from "./icons/LogoFooter.vue";
import InstagramIcon from "./icons/InstagramIcon.vue";
import TwitterIcon from "./icons/TwitterIcon.vue";
import FacebookIcon from "./icons/FacebookIcon.vue";
import SpotifyIcon from "./icons/SpotifyIcon.vue";
import PocketCastIcon from "./icons/PocketCastIcon.vue";
import SoundCloudIcon from "./icons/SoundCloudIcon.vue";
import ApplePodcastIcon from "./icons/ApplePodcastIcon.vue";
import OvercastIcon from "./icons/OvercastIcon.vue";
export default {
  name: "PageFooter",
  props: ["menuItems", "additionalLinks"],
  components: {
    LogoFooter,
    InstagramIcon,
    TwitterIcon,
    FacebookIcon,
    SpotifyIcon,
    PocketCastIcon,
    SoundCloudIcon,
    ApplePodcastIcon,
    OvercastIcon,
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
