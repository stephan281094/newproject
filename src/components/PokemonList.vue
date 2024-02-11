<template>
  <el-button type="primary" @click="dialogFormVisible = true"
    >Add<el-icon><CirclePlusFilled /></el-icon
  ></el-button>
  <el-dialog v-model="dialogFormVisible" title="Add a new pokemon" width="500">
    <form>
      <el-form-item label="Name" :label-width="formLabelWidth">
        <el-input type="text" v-model="name" placeholder="Type name" />
      </el-form-item>
      <el-form-item label="Height" :label-width="formLabelWidth">
        <el-input type="number" v-model="height" placeholder="Type height" />
      </el-form-item>
      <el-form-item label="Weight" :label-width="formLabelWidth">
        <el-input type="number" v-model="weight" placeholder="Type weight" />
      </el-form-item>
    </form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button native-type="submit" type="primary" @click="addNewPokemon">
          Confirm
        </el-button>
      </div>
    </template>
  </el-dialog>
  <el-row :gutter="20" justify="space-around" v-loading="loading">
    <el-col v-for="pokemon in pokemons" :key="pokemon.id" :span="4.8">
      <el-card
        :body-style="{ padding: '40px' }"
        class="box-card"
        style="width: 250px"
        @click="activePokemon = pokemon"
        align="center"
      >
        <div class="pokemonCard">
          <img :src="pokemon?.sprites?.front_default" class="image" />

          <h2 class="pokemonName">{{ pokemon.name }}</h2>
        </div>
      </el-card>
    </el-col>

    <pokemon-dialog :pokemon="activePokemon" @close="activePokemon = null" />
  </el-row>
</template>
<script>
import { mapMutations, mapState } from "vuex";
import PokemonDialog from "./PokemonDialog.vue";
export default {
  data() {
    return {
      activePokemon: null,
      dialogFormVisible: false,
      name: "",
      height: 0,
      weight: 0,
    };
  },
  props: {
    pokemons: Array,
  },
  components: {
    PokemonDialog,
  },
  computed: {
    ...mapState(["loading", "totalCount"]),
  },
  methods: {
    ...mapMutations(["addPokemon"]),
    addNewPokemon() {
      this.addPokemon({
        id: this.totalCount + 1,
        name: this.name,
        height: this.height,
        weight: this.weight,
      });
      this.dialogFormVisible = false;
    },
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
