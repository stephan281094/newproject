<template>
  <el-button type="primary" @click="dialogFormVisible = true"
    >Add<el-icon><CirclePlusFilled /></el-icon
  ></el-button>
  <el-dialog v-model="dialogFormVisible" title="Add a new pokemon" width="500">
    <el-form
      :model="newPokemon"
      :rules="newPokemonValidation"
      ref="newPokemonForm"
    >
      <el-form-item label="Name" prop="name">
        <el-input
          type="text"
          v-model="newPokemon.name"
          placeholder="Type name"
        />
      </el-form-item>
      <el-form-item label="Height" prop="height">
        <el-input
          type="number"
          v-model="newPokemon.height"
          placeholder="Type height"
        />
      </el-form-item>
      <el-form-item label="Weight" prop="weight">
        <el-input
          type="number"
          v-model="newPokemon.weight"
          placeholder="Type weight"
        />
      </el-form-item>
    </el-form>
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
import { validateName } from "@/mixins/validator.js";
export default {
  data() {
    return {
      activePokemon: null,
      dialogFormVisible: false,
      newPokemon: {
        name: "",
        height: 0,
        weight: 0,
      },
      newPokemonValidation: {
        name: [{ validator: validateName, trigger: "blur" }],
      },
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
      this.$refs["newPokemonForm"].validate((valid) => {
        if (valid) {
          this.addPokemon({
            id: this.totalCount + 1,
            name: this.newPokemon.name,
            height: this.newPokemon.height,
            weight: this.newPokemon.weight,
          });

          this.dialogFormVisible = false;
        }
      });
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
