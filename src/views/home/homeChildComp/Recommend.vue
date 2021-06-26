<template>
  <div class="recommend flex a-c">
    <div class="recommendItem" v-for="item in recommends">
      <img :src="item.recommend_img" alt="" />
      <p>{{ item.recommend_name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.recommend {
  flex-wrap: wrap;
  font-size: 12px;
  text-align: center;
  padding: 15px 0 25px;
  border-bottom: 10px solid #eee;
}
/*   width: 20%;一行显示五个 */
.recommendItem {
  width: 20%;
  height: 50px;
}
.recommendItem img {
  width: 30px;
}
</style>