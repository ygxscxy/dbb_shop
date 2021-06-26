<template>
  <div v-if="Object.keys(goodsInfoRule).length !== 0">
    <div class="rule">
      <table id="rule-table">
        <tr v-for="(item, index) in rule" :key="index">
          <td>{{ item[0] }}</td>
          <td>{{ item[1] }}</td>
          <td>{{ item[2] }}</td>
          <td>{{ item[3] }}</td>
          <td>{{ item[4] }}</td>
        </tr>
      </table>
    </div>

    <div class="info">
      <table>
        <tr v-for="(item, index) in this.goodsInfoRule.info" :key="index">
          <td>{{ item.key }}</td>
          <td>{{ item.value }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    rule() {
      return this.goodsInfoRule.rule[0];
    },
  },
  props: {
    goodsInfoRule: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.rule table,
.info table {
  width: 100%;
}

.rule table tr,
.info table tr {
  height: 50px;
}
.rule table tr td,
.info table tr td {
  text-align: left;
  padding-left: 10px;
}
.info table tr td:nth-of-type(1) {
  width: 80px;
}

.info table tr td:nth-of-type(2) {
  padding: 10px;
  color: skyblue;
}
tr:hover {
  background-color: #f5f5f5;
}
th,
td {
  border-bottom: 1px solid #ddd;
}
</style>