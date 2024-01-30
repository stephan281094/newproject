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
import { mapMutations, mapState, mapActions } from "vuex";

export default {
  components: {
    Pagination,
    PokemonList,
  },
  // data() {
  //   return {
  //     loading: true,
  //     currentPage: 1,
  //     pageSize: 10,
  //     totalCount: 0,
  //     // pokemons: [],
  //   };
  // },
  computed: {
    ...mapState({
      pokemons: (state) => state.pokemons,
      currentPage: (state) => state.currentPage,
      pageSize: (state) => state.pageSize,
      totalCount: (state) => state.totalCount,
      loading: (state) => state.loading,
    }),
  },
  methods: {
    ...mapMutations({
      setLoading: "setLoading",
      setCurrentPage: "setCurrentPage",
      setPageSize: "setPageSize",
      setTotalCount: "setTotalCount",
      setPokemons: "setPokemons",
    }),
    ...mapActions({
      getData: "getData",
    }),
    // getData() {
    //   this.axios
    //     .get(
    //       `https://pokeapi.co/api/v2/pokemon?offset=${
    //         (this.currentPage - 1) * this.pageSize
    //       }&limit=${this.pageSize}`
    //     )
    //     .then((response) => {
    //       this.totalCount = response.data.count;
    //       this.pokemons = [];
    //       response.data.results.forEach((item) =>
    //         this.axios.get(item.url).then(async (resp) => {
    //           resp.data.url = item.url;
    //           resp.data.name = item.name;
    //           this.pokemons.push(resp.data);
    //         })
    //       );

    //       this.loading = false;
    //     })
    //     .catch((error) => {
    //       console.warn(error);
    //     });
    // },
  },
  async mounted() {
    await this.getData({
      pageSize: this.pageSize,
      currentPage: this.currentPage,
    });
    this.totalCount = this.$store.state.totalCount;
  },
};
</script>
