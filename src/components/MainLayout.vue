<template>
  <div>
    <div>
      <!-- <el-button type="success" @click="getPokemon">Click</el-button> -->
      <el-row>
        <el-col v-for="pokemon in pokemons" :key="pokemon.id" :span="4">
          <el-card>
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
            />
            <div>
              <p class="pokemonName">{{ pokemon.name }}</p>
            </div>
          </el-card>
        </el-col>
      </el-row>

      <el-pagination
        v-loading="loading"
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[10, 20, 50, 100, 200]"
        layout="sizes, prev, pager, next"
        :total="totalCount"
        @size-change="getData"
        @current-change="getData"
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: true,
      currentPage: 1,
      pageSize: 10,
      totalCount: 0,
      pokemons: [],
      pokemonAbilities: [],
    };
  },
  methods: {
    getData() {
      this.axios
        .get(
          `https://pokeapi.co/api/v2/pokemon?offset=${
            (this.currentPage - 1) * this.pageSize
          }&limit=${this.pageSize}`
        )
        .then((response) => {
          console.log(response);
          this.totalCount = response.data.count;
          this.pokemons = response.data.results;
          this.loading = false;
        })
        .catch((error) => {
          console.warn(error);
        });
    },
    getPokemon(id) {
      this.axios
        .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.warn(error);
        });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
<style scoped>
.pokemonName {
  color: #ffffff;
  text-align: center;
  text-transform: capitalize;
  font-size: 20px;
}
.el-row {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 3rem;
}
.el-pagination {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 20px;
}
</style>
