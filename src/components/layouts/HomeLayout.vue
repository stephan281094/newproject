<template>
  <el-main>
    <h1>All Pokémons</h1>
    <pokemon-list :pokemons="pokemons" />
    <pagination
      :getData="getData"
      :totalCount="totalCount"
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      class="paginationHome"
  /></el-main>
</template>
<script>
import { mapState } from "vuex";
import Pagination from "../common/Pagination.vue";
import PokemonList from "../PokemonList.vue";

export default {
  components: {
    Pagination,
    PokemonList,
  },
  data() {
    return {
      currentPage: 1,
      pageSize: 10,
    };
  },
  computed: {
    ...mapState({
      pokemons: (state) => state.pokemons,
      totalCount: (state) => state.totalCount,
    }),
  },
  methods: {
    getData() {
      return this.$store.dispatch("getData", {
        pageSize: this.pageSize,
        currentPage: this.currentPage,
      });
    },
  },
  async mounted() {
    this.getData();
  },
};
</script>
<style scoped>
.paginationHome {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
