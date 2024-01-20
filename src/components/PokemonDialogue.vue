<template>
  <el-dialog
    v-model="activePokemon"
    :title="pokemon.name"
    width="30%"
    v-for="pokemon in pokemons"
    :key="pokemon.id"
  >
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
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="activePokemon = null"> OK </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script>
export default {
  data() {
    return {
      // activePokemon: null,
    };
  },
};
</script>
