<template>
  <div class="goodsList flex">
    <goods-item v-for="item in goods" :goodsitem="item"></goods-item>
  </div>
</template>

<script>
import GoodsItem from "./Goodsitem.vue";
export default {
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    GoodsItem,
  },
};
</script>

<style>
.goodsList {
  flex-wrap: wrap;
  justify-content: space-evenly;
  background-color: rgb(247, 247, 247);
  margin-top: 20px;
  align-content: space-around;
}
</style>