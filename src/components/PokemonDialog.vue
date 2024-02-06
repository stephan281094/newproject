<template>
  <el-dialog
    v-model="dialogVisible"
    :title="pokemon?.name"
    width="30%"
    align="center"
  >
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
      Height: <span class="pokemonHeight">{{ pokemon?.height }}</span>
    </p>
    <p>
      Weight: <span class="pokemonWeight">{{ pokemon?.weight }}</span>
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
        <el-button type="primary"
          >Edit <el-icon :size="size" :color="color"> <Edit /> </el-icon
        ></el-button>
        <el-button @click="$emit('close')"> Cancel </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script>
export default {
  data() {
    return {
      dialogVisible: false,
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
    },
  },
  methods: {},
};
</script>
<style scoped>
.pokemonAbilities {
  text-transform: capitalize;
}
</style>
