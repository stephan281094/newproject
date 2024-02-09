<template>
  <el-main>
    <pagination
      :getData="getData"
      :totalCount="totalCount"
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
    />
    <el-table :data="searchData" stripe v-loading="loading">
      <el-table-column prop="id" label="ID" />
      <el-table-column prop="name" label="Name" />
      <el-table-column prop="effect_entries[1].effect" label="Description" />
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

      <el-table-column>
        <template #header>
          <el-input type="text" v-model="search" placeholder="Search...">
            <template #prefix>
              <el-icon class="el-input__icon"><search /></el-icon> </template
          ></el-input>
        </template>
      </el-table-column>
    </el-table>
  </el-main>
  <pagination
    :getData="getData"
    :totalCount="totalCount"
    v-model:current-page="currentPage"
    v-model:page-size="pageSize"
  />
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
