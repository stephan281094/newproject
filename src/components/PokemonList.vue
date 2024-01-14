<template>
  <el-row>
    <el-col v-for="pokemon in pokemons" :key="pokemon.id" :span="4">
      <el-card>
        <div class="pokemonCard">
          <img :src="pokemon.sprites.front_default" class="image" />

          <h2 class="pokemonName">{{ pokemon.name }}</h2>
          <p class="pokemonHeight">Height: {{ pokemon.height }}</p>
          <p class="pokemonWeight">Weight: {{ pokemon.weight }}</p>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>
<script>
export default {
  props: {
    pokemons: Array,
  },
};
</script>
<style scoped>
.pokemonName {
  text-transform: capitalize;
}
.el-row {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 3rem;
}
.pokemonCard {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
