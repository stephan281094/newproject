import { createStore } from "vuex";
import axios from "axios";
const store = createStore({
  state() {
    return {
      pokemons: [],
      currentPage: 1,
      pageSize: 10,
      totalCount: 0,
      loading: true,
    };
  },
  mutations: {
    setPokemons(state, pokemons) {
      state.pokemons = pokemons;
    },
    addPokemons(state, pokemons) {
      state.pokemons.push(pokemons);
    },
    setCurrentPage(state, currentPage) {
      state.currentPage = currentPage;
    },
    setPageSize(state, pageSize) {
      state.pageSize = pageSize;
    },
    setTotalCount(state, totalCount) {
      state.totalCount = totalCount;
    },
    setLoading(state, loading) {
      state.loading = loading;
    },
  },
  actions: {
    async getData({ state, commit }, pagination) {
      await axios
        .get(
          `https://pokeapi.co/api/v2/pokemon?offset=${
            (pagination.currentPage - 1) * pagination.pageSize
          }&limit=${pagination.pageSize}`
        )
        .then((response) => {
          commit("setPokemons", []);
          commit("setTotalCount", response.data.count);
          response.data.results.forEach((item) =>
            axios.get(item.url).then((resp) => {
              resp.data.url = item.url;
              resp.data.name = item.name;
              commit("addPokemons", resp.data);
            })
          );
          commit("setLoading", false);
        })
        .catch((error) => {
          console.warn(error);
        });
    },
  },
});

export default store;
