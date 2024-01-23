import { createStore } from "vuex";
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
    getData({ state, commit }) {
      this.axios
        .get(
          `https://pokeapi.co/api/v2/pokemon?offset=${
            (state.currentPage - 1) * state.pageSize
          }&limit=${state.pageSize}`
        )
        .then((response) => {
          commit("setTotalCount", response.data.count);
          commit("setPokemons", []);
          response.data.results.forEach((item) =>
            this.axios.get(item.url).then(async (resp) => {
              resp.data.url = item.url;
              resp.data.name = item.name;
              this.pokemons.push(resp.data);
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
