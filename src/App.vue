<template>
  <div>
    <el-container :direction="direction">
      <page-header />
      <router-view />
      <page-footer />
    </el-container>
  </div>
</template>
<script>
import PageHeader from "./components/common/PageHeader.vue";
import PageFooter from "./components/common/PageFooter.vue";

export default {
  components: {
    PageHeader,
    PageFooter,
  },
  data() {
    return {
      direction: "vertical",
    };
  },
};
</script>
