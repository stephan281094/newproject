<template>
  <div>
    <el-main>
      <h1>About</h1>
      <el-row :gutter="20" align="middle">
        <el-col :span="6">
          <img src="../../assets/icons/International_Pokémon_logo.svg"
        /></el-col>
        <el-col :span="18">
          <p>
            Pokémon is a Japanese media franchise consisting of video games,
            animated series and films, a trading card game, and other related
            media. The franchise takes place in a shared universe in which
            humans co-exist with creatures known as Pokémon, a large variety of
            species endowed with special powers. The franchise's target audience
            is children aged 5 to 12, but it is known to attract people of all
            ages.
          </p></el-col
        >
      </el-row>
      <el-row :gutter="20" align="middle">
        <el-col :span="14">
          <p>
            The franchise originated as a pair of role-playing games developed
            by Game Freak, from an original concept by its founder, Satoshi
            Tajiri. Released on the Game Boy on February 27, 1996, the games
            became sleeper hits and were followed by manga series, a trading
            card game, and anime series and films. From 1998 to 2000, Pokémon
            was exported to the rest of the world, creating an unprecedented
            global phenomenon dubbed "Pokémania". By 2002, the craze had ended,
            after which Pokémon became a fixture in popular culture, with new
            products being released to this day. In the summer of 2016, the
            franchise spawned a second craze with the release of Pokémon Go, an
            augmented reality game developed by Niantic. Pokémon has since been
            estimated to be the world's highest-grossing media franchise and one
            of the best-selling video game franchises.
          </p>
        </el-col>
        <el-col :span="10">
          <img
            style="height: 250px"
            src="../../assets/images/pngwing.com.png" /></el-col
      ></el-row>
      <div class="video">
        <h1 class="videoTitle">
          <el-icon><Bottom /></el-icon>Toothless dance<el-icon
            ><Bottom
          /></el-icon>
        </h1>
        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/9MCiixIkzUk?si=99HtI6k_Ctk-gifq"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </el-main>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      loading: (state) => state.loading,
    }),
  },
};
</script>
<style>
.video {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.videoTitle {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}
</style>
