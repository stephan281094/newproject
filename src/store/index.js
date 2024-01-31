import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state() {
    return {
      loading: true,
      pokemons: [],
      totalCount: 0,
    };
  },
  mutations: {
    setLoading(state, loading) {
      state.loading = loading;
    },
    setPokemons(state, pokemons) {
      state.pokemons = pokemons;
    },
    setTotalCount(state, totalCount) {
      state.totalCount = totalCount;
    },
  },
  actions: {
    getData({ commit }, pagination) {
      commit("setLoading", true);

      const searchParams = new URLSearchParams({
        offset: (pagination.currentPage - 1) * pagination.pageSize,
        limit: pagination.pageSize,
      });

      return axios
        .get(`https://pokeapi.co/api/v2/pokemon?${searchParams}`)
        .then(async (response) => {
          const pokemons = await Promise.all(
            response.data.results.map((item) =>
              axios.get(item.url).then(({ data }) => ({
                ...data,
                name: item.name,
                url: item.url,
              }))
            )
          );

          commit("setPokemons", pokemons);
          commit("setTotalCount", response.data.count);
          commit("setLoading", false);
        })
        .catch((error) => {
          console.warn(error);
        });
    },
  },
});

export default store;
