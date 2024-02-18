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
    <el-row justify="center" v-loading="loading">
      <el-col :span="8"></el-col>
      <el-col :span="8">
        <div class="answer">
          <h1>{{ answer }}</h1>
          <img :src="image" /></div
      ></el-col>
      <el-col :span="8"></el-col>
    </el-row>
  </el-main>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      input: "",
    };
  },
  methods: {
    clearText() {
      this.input = "";
    },
    ...mapActions("yesOrNo", ["getAnswer"]),
  },
  computed: {
    ...mapState("yesOrNo", {
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
.answer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
</style>
