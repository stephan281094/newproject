import { createStore } from "vuex";
import axios from "axios";
const store = createStore({
  state() {
    return {
      pokemons: [],
      totalCount: 0,
      loading: true,
      abilities: [],
    };
  },
  mutations: {
    setPokemons(state, pokemons) {
      state.pokemons = pokemons;
    },
    setTotalCount(state, totalCount) {
      state.totalCount = totalCount;
    },
    setLoading(state, loading) {
      state.loading = loading;
    },
    setAbilities(state, abilities) {
      state.abilities = abilities;
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
    getAbilities({ commit }, pagination) {
      commit("setLoading", true);

      const searchParams = new URLSearchParams({
        offset: (pagination.currentPage - 1) * pagination.pageSize,
        limit: pagination.pageSize,
      });
      return axios
        .get(`https://pokeapi.co/api/v2/ability?${searchParams}`)
        .then(async (response) => {
          const abilities = await Promise.all(
            response.data.results.map((item) =>
              axios.get(item.url).then(({ data }) => ({
                ...data,
                name: item.name,
                url: item.url,
              }))
            )
          );
          console.log(abilities);
          commit("setAbilities", abilities);
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
