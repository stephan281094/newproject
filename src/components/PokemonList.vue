<template>
  <el-container>
    <el-row :gutter="20" justify="center">
      <el-space wrap size="large">
        <el-col v-for="pokemon in pokemons" :key="pokemon.id" :span="4">
          <el-card style="width: 250px" @click="activePokemon = pokemon">
            <div class="pokemonCard" align="center">
              <img :src="pokemon.sprites.front_default" class="image" />

              <h2 class="pokemonName">{{ pokemon.name }}</h2>
              <p>
                Height: <span class="pokemonHeight">{{ pokemon.height }}</span>
              </p>
              <p>
                Weight: <span class="pokemonWeight">{{ pokemon.weight }}</span>
              </p>
              <p class="pokemonAbilities">
                Abilities:
                <span
                  v-for="ability in pokemon.abilities"
                  :key="ability.id"
                  class="pokemonAbility"
                >
                  {{ ability.ability.name }}</span
                >
              </p>
            </div>
          </el-card>
        </el-col>

        <pokemon-dialog v-if="activePokemon" :pokemon="activePokemon" />
      </el-space>
    </el-row>
  </el-container>
</template>
<script>
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
};
</script>
<style scoped>
.pokemonName {
  text-transform: capitalize;
}
.el-card {
  margin-top: 1.25rem;
}
.pokemonAbilities {
  text-transform: capitalize;
  display: flex;
  flex-direction: column;
}
</style>
