<template>
  <el-container v-loading="loading">
    <el-row :gutter="20" justify="center">
      <el-space wrap>
        <el-col v-for="pokemon in pokemons" :key="pokemon.id" :span="4">
          <el-card style="width: 250px" @click="activePokemon = pokemon">
            <div class="pokemonCard" align="center">
              <img :src="pokemon.sprites.front_default" class="image" />

              <h2 class="pokemonName">{{ pokemon.name }}</h2>
            </div>
          </el-card>
        </el-col>

        <pokemon-dialog
          :pokemon="activePokemon"
          @close="activePokemon = null"
        />
      </el-space>
    </el-row>
  </el-container>
</template>
<script>
import { mapState } from "vuex";
import PokemonDialog from "./PokemonDialog.vue";
export default {
  components: {
    PokemonDialog,
  },
  props: {
    pokemons: Array,
  },
  data() {
    return {
      activePokemon: null,
    };
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
</style>
