<template>
  <el-row :gutter="20" justify="space-around" v-loading="loading">
    <el-col v-for="pokemon in pokemons" :key="pokemon.id" :span="4.8">
      <el-card
        :body-style="{ padding: '30px' }"
        class="box-card"
        style="width: 250px"
        @click="activePokemon = pokemon"
        align="center"
      >
        <div class="pokemonCard">
          <img :src="pokemon.sprites.front_default" class="image" />

          <h2 class="pokemonName">{{ pokemon.name }}</h2>
        </div>
      </el-card>
    </el-col>

    <pokemon-dialog :pokemon="activePokemon" @close="activePokemon = null" />
  </el-row>
</template>
<script>
import { mapState } from "vuex";
import PokemonDialog from "./PokemonDialog.vue";
export default {
  data() {
    return {
      activePokemon: null,
    };
  },
  props: {
    pokemons: Array,
  },
  components: {
    PokemonDialog,
  },
  computed: {
    ...mapState(["loading"]),
  },
};
</script>
<style scoped>
.pokemonName {
  text-transform: capitalize;
}
.el-card {
  margin-top: 1.25rem;
}
.el-card:hover {
  cursor: pointer;
}
/* .pokemonCard {
  display: flex;
  flex-direction: column;
  align-items: center;
} */
</style>
