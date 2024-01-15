<template>
  <el-row>
    <el-col v-for="pokemon in pokemons" :key="pokemon.id" :span="4">
      <el-card>
        <div class="pokemonCard">
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
              :key="pokemon.id"
              class="pokemonAbility"
            >
              {{ ability.ability.name }}</span
            >
          </p>
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
.pokemonAbilities {
  text-transform: capitalize;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}
</style>
