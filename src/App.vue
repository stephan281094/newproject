<template>
  <div>
    <post-header />
    <post-footer />
  </div>
</template>
<script>
import PostHeader from "./components/PostHeader.vue";
import PostFooter from "./components/PostFooter.vue";

export default {
  components: { PostHeader, PostFooter },
  data() {
    return {};
  },
};
</script>
<style>
* {
  background-color: #191919;
  text-decoration: none;
}
</style>
