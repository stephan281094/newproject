<template>
  <el-main>
    <h1>Ask a question to get yes or no answer</h1>
    <el-row :gutter="20" justify="space-between">
      <el-col :span="20">
        <el-input
          v-model="input"
          type="text"
          placeholder="Type here..."
          maxlength="100"
          show-word-limit
          clearable
      /></el-col>
      <el-col :span="4">
        <div class="questionInput">
          <el-button type="primary" @click="getAnswer()">Yes or no?</el-button>
          <el-button @click="clearText">Clear</el-button>
        </div>
      </el-col>
    </el-row>
    <el-row justify="center">
      <h1 class="answer" v-loading="loading">{{ answer }}</h1></el-row
    >
    <el-row justify="center"> <img :src="image" v-loading="loading" /></el-row>
    <!-- <div class="response" v-loading="loading">
      <h1 class="answer">{{ answer }}</h1>
      <img :src="image" />
    </div> -->
  </el-main>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      // answer: "",
      // image: "",
      input: "",
      // loading: false,
    };
  },
  methods: {
    // getAnswer() {
    //   this.loading = true;
    //   this.axios
    //     .get("https://yesno.wtf/api")
    //     .then((response) => {
    //       this.answer = response.data.answer;
    //       this.image = response.data.image;
    //     })
    //     .catch((error) => {
    //       console.warn(error);
    //     });
    // },
    // getAnswer() {
    //   return this.$store.dispatch("getAnswer");
    // },
    clearText() {
      this.input = "";
    },
    ...mapActions(["getAnswer"]),
    // ...mapMutations(["setAnswer", "setImage", "setLoading"]),
  },
  computed: {
    ...mapState({
      loading: (state) => state.loading,
      answer: (state) => state.answer,
      image: (state) => state.image,
    }),
  },
};
</script>
<style scoped>
.questionInput {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.response {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
.answer {
  text-align: center;
  text-transform: uppercase;
}
</style>
