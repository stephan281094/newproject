<template>
  <el-dialog
    v-model="dialogVisible"
    :title="pokemon?.name"
    width="30%"
    align="center"
  >
    <template #header></template>
    <el-carousel height="100px" direction="vertical" :autoplay="false">
      <el-carousel-item>
        <img :src="pokemon?.sprites.back_default"
      /></el-carousel-item>
      <el-carousel-item>
        <img :src="pokemon?.sprites.front_default"
      /></el-carousel-item>
      <el-carousel-item>
        <img :src="pokemon?.sprites.back_shiny"
      /></el-carousel-item>
      <el-carousel-item>
        <img :src="pokemon?.sprites.front_shiny"
      /></el-carousel-item>
    </el-carousel>
    <p>
      Height:
      <input type="text" v-if="isEditing" v-model="weight" />
      <span class="pokemonHeight" v-else>{{ pokemon.height }}</span>
    </p>
    <p>
      Weight:

      <input type="text" v-if="isEditing" v-model="height" />
      <span class="pokemonWeight" v-else>{{ pokemon.weight }}</span>
    </p>
    <p class="pokemonAbilities">
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
          >Edit <el-icon> <Edit /> </el-icon
        ></el-button>
        <el-button type="primary" @click="save" v-else-if="isEditing"
          >Save</el-button
        >
        <el-button v-if="isEditing" @click="isEditing = false"
          >Cancel</el-button
        >

        <!-- <el-button @click="$emit('close')"> Cancel </el-button> -->
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
    };
  },
  props: {
    pokemon: {
      type: Object,
      required: false,
    },
  },
  watch: {
    pokemon(pokemon) {
      this.dialogVisible = pokemon;
      this.height = pokemon.height;
      this.weight = pokemon.weight;
    },
  },
  methods: {
    save() {},
  },
};
</script>
<style scoped>
.pokemonAbilities {
  text-transform: capitalize;
}
</style>
