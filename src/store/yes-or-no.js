import axios from "axios";

export const yesOrNo = {
  state() {
    return {
      answer: "",
      image: "",
      loading: false,
    };
  },
  mutations: {
    setAnswer(state, answer) {
      state.answer = answer;
    },
    setImage(state, image) {
      state.image = image;
    },
    setLoading(state, loading) {
      state.loading = loading;
    },
  },
  actions: {
    getAnswer({ commit }) {
      commit("setLoading", true);

      return axios
        .get("https://yesno.wtf/api")
        .then((response) => {
          commit("setAnswer", response.data.answer);
          commit("setImage", response.data.image);
          commit("setLoading", false);
        })
        .catch((error) => {
          console.warn(error);
        });
    },
  },
};
