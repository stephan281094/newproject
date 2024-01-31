<template>
  <el-main>
    <div>
      <pokemon-list :pokemons="pokemons" />
      <pagination
        :getData="getData"
        :totalCount="totalCount"
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
      /></div
  ></el-main>
</template>
<script>
import { mapState } from "vuex";
import PokemonList from "../PokemonList.vue";
import Pagination from "../common/Pagination.vue";

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
  mounted() {
    this.getData();
  },
};
</script>
