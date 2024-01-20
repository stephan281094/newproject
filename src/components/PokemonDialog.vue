<template>
  <el-dialog v-model="dialogVisible" :title="pokemon?.name" width="30%">
    <p>
      Height: <span class="pokemonHeight">{{ pokemon?.height }}</span>
    </p>
    <p>
      Weight: <span class="pokemonWeight">{{ pokemon?.weight }}</span>
    </p>
    <p class="pokemonAbilities">
      Abilities:
      <span
        v-for="ability in pokemon?.abilities"
        :key="ability.id"
        class="pokemonAbility"
      >
        {{ ability.ability.name }}</span
      >
    </p>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="$emit('close')"> OK </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script>
export default {
  props: {
    pokemon: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      dialogVisible: false,
    };
  },
  watch: {
    pokemon(pokemon) {
      this.dialogVisible = !!pokemon;
    },
  },
};
</script>
