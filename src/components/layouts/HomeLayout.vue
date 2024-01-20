<template>
  <el-main>
    <div>
      <pokemon-list :pokemons="pokemons" />
      <pagination
        :getData="getData"
        :loading="loading"
        :totalCount="totalCount"
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
      /></div
  ></el-main>
</template>
<script>
import Pagination from "../common/Pagination.vue";
import PokemonList from "../PokemonList.vue";

export default {
  components: {
    Pagination,
    PokemonList,
  },
  data() {
    return {
      loading: true,
      currentPage: 1,
      pageSize: 10,
      totalCount: 0,
      pokemons: [],
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
          this.pokemons = [];
          this.totalCount = response.data.count;
          response.data.results.forEach((item) =>
            this.axios.get(item.url).then((resp) => {
              this.pokemons.push(resp.data);
            })
          );

          this.loading = false;
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
