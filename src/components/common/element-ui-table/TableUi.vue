<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column
      v-if="isShowTitle"
      v-for="(data, index) in tableData"
      :prop="Object.keys(data)[index]"
      :width="width"
      :label="Object.keys(data)[index]"
    ></el-table-column>
    <el-table-column
      v-else
      v-for="(data, index) in tableData"
      :prop="Object.keys(data)[index]"
      :width="width"
    ></el-table-column>
  </el-table>
</template>

<script>
export default {
  props: {
    tableData: {
      type: Array,
      default() {
        return [];
      },
    },
    width: {
      type: String,
    },
    isShowTitle: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {};
  },
};
</script>