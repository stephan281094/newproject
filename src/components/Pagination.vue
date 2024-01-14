<template>
  <el-pagination
    v-loading="loading"
    layout="sizes, prev, pager, next"
    :page-sizes="[10, 20, 50, 100, 200]"
    :total="totalCount"
    @current-change="getData"
    @size-change="getData"
  />
</template>
<script>
export default {
  props: {
    getData: Function,
    totalCount: Number,
    loading: Boolean,
  },
};
</script>
<style>
.el-pagination {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 20px;
}
</style>
