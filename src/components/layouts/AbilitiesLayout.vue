<template>
  <el-main>
    <h1>Abilities</h1>
    <h3>
      Here's the list of abilities that pokemons have with detailed description
    </h3>
    <el-row :gutter="20" align="middle">
      <el-col :span="10">
        <pagination
          :getData="getData"
          :totalCount="totalCount"
          v-model:current-page="currentPage"
          v-model:page-size="pageSize"
      /></el-col>
      <el-col :span="10"></el-col>
      <el-col :span="4">
        <el-input type="text" v-model="search" placeholder="Search...">
          <template #prefix>
            <el-icon class="el-input__icon"><search /></el-icon> </template
        ></el-input>
      </el-col>
    </el-row>
    <div class="searchAndPagination"></div>

    <el-table :data="searchData" stripe v-loading="loading">
      <el-table-column prop="id" label="ID" width="50" />
      <el-table-column prop="name" label="Name" width="200" />
      <el-table-column
        prop="effect_entries[1].effect"
        label="Description"
        width="700"
      />
      <el-table-column prop="pokemon" label="Pokemons">
        <template #default="scoped">
          <el-collapse>
            <el-collapse-item title="Pokemons:">
              <el-tag v-for="pokemon in scoped.row.pokemon" :key="pokemon.id">
                {{ pokemon.pokemon.name }}
              </el-tag>
            </el-collapse-item>
          </el-collapse>
        </template>
      </el-table-column>
    </el-table>

    <pagination
      :getData="getData"
      :totalCount="totalCount"
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
    />
  </el-main>
</template>
<script>
import { mapState } from "vuex";
import Pagination from "../common/Pagination.vue";

export default {
  components: {
    Pagination,
  },
  data() {
    return {
      currentPage: 1,
      pageSize: 10,
      search: "",
    };
  },
  computed: {
    ...mapState({
      abilities: (state) => state.abilities,
      totalCount: (state) => state.totalCount,
      loading: (state) => state.loading,
    }),
    searchData() {
      if (this.search) {
        return this.abilities.filter(
          (item) =>
            item.name.includes(this.search) ||
            item.id == this.search ||
            item.pokemon.find((x) => x.pokemon.name.includes(this.search))
        );
      }
      return this.abilities;
    },
  },
  methods: {
    getData() {
      return this.$store.dispatch("getAbilities", {
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
<style>
.el-table {
  margin-top: 2rem;
}
</style>
