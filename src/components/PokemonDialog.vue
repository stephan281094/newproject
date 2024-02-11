<template>
  <el-dialog v-model="dialogVisible" width="30%" align="center">
    <template #header="{ titleId, titleClass }">
      <el-input
        class="changePokemonName"
        type="text"
        v-if="isEditing"
        v-model="name"
      />
      <h4 class="pokemonNameTitle" v-else :id="titleId" :class="titleClass">
        {{ pokemon?.name }}
      </h4>
    </template>
    <el-carousel
      height="100px"
      direction="vertical"
      :autoplay="false"
      v-if="
        pokemon?.sprites?.back_default ||
        pokemon?.sprites?.front_default ||
        pokemon?.sprites?.back_shiny ||
        pokemon?.sprites?.front_shiny
      "
    >
      <el-carousel-item v-if="pokemon?.sprites?.back_default">
        <img :src="pokemon?.sprites?.back_default"
      /></el-carousel-item>
      <el-carousel-item v-if="pokemon?.sprites?.front_default">
        <img :src="pokemon?.sprites?.front_default"
      /></el-carousel-item>
      <el-carousel-item v-if="pokemon?.sprites?.back_shiny">
        <img :src="pokemon?.sprites?.back_shiny"
      /></el-carousel-item>
      <el-carousel-item v-if="pokemon?.sprites?.front_shiny">
        <img :src="pokemon?.sprites?.front_shiny"
      /></el-carousel-item>
    </el-carousel>
    <p>
      Height:
      <el-input
        class="changePokemonHeight"
        type="number"
        v-if="isEditing"
        v-model="height"
      />
      <span class="pokemonHeight" v-else>{{ pokemon?.height }}</span>
    </p>
    <p>
      Weight:

      <el-input
        class="changePokemonWeight"
        type="number"
        v-if="isEditing"
        v-model="weight"
      />
      <span class="pokemonWeight" v-else>{{ pokemon?.weight }}</span>
    </p>
    <p class="pokemonAbilities" v-if="pokemon?.abilities">
      Abilities:
      <el-tag
        v-for="ability in pokemon?.abilities"
        :key="ability.id"
        class="pokemonAbility"
      >
        {{ ability.ability.name }}</el-tag
      >
    </p>
    <template #footer>
      <span class="dialog-footer">
        <el-button
          type="primary"
          @click="isEditing = !isEditing"
          v-if="!isEditing"
          >Edit <el-icon> <EditPen /> </el-icon
        ></el-button>
        <el-button type="primary" @click="save()" v-else-if="isEditing"
          >Save</el-button
        >
        <el-button v-if="isEditing" @click="isEditing = false"
          >Cancel</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>
<script>
export default {
  data() {
    return {
      dialogVisible: false,
      isEditing: false,
      weight: 0,
      height: 0,
      name: "",
    };
  },
  props: {
    pokemon: {
      type: Object,
      required: false,
    },
    pokemons: Array,
  },
  watch: {
    pokemon(pokemon) {
      this.dialogVisible = !!pokemon;
      this.height = pokemon?.height;
      this.weight = pokemon?.weight;
      this.name = pokemon?.name;
    },
  },
  methods: {
    save() {
      this.pokemon.name = this.name;
      this.pokemon.weight = this.weight;
      this.pokemon.height = this.height;
      this.isEditing = !this.isEditing;
    },
  },
};
</script>
<style scoped>
.pokemonAbilities {
  text-transform: capitalize;
}
.changePokemonName {
  font-size: 1.5rem;
}
.pokemonNameTitle {
  font-size: 1.5rem;
}
.changePokemonHeight,
.changePokemonWeight {
  font-size: 0.9rem;
}
</style>
