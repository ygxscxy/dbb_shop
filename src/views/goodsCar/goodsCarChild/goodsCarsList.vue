<template>
  <!-- 展示商品列表 -->
  <div class="goodsCars">
    <goods-car-item
      v-for="(item, index) in buyCars"
      :key="index"
      :goods="item"
      :isGoodsActive="item.isGoodsActive"
    ></goods-car-item>
  </div>
</template>

<script>
import GoodsCarItem from "./goodsCarItem.vue";
export default {
  components: {
    GoodsCarItem,
  },

  props: {
    buyCars: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
</style>