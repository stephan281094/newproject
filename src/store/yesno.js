import axios from "axios";
export default {
  state() {
    return {
      answer: "",
      image: "",
    };
  },
  mutations: {
    setAnswer(state, answer) {
      state.answer = answer;
    },
    setImage(state, image) {
      state.image = image;
    },
  },
  actions: {
    getAnswer() {
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
