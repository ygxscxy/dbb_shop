<template>
  <div class="goods-car-item flex">
    <div class="flex a-c">
      <div class="select">
        <span
          @click="selectGoodsClick(goods.iid)"
          :class="{ goodsActive: isGoodsActive }"
          >√</span
        >
      </div>
      <div class="buy-car-goods-img" @click="buyCarGoodsClick">
        <img :src="goods.img" alt="" />
      </div>
    </div>
    <div
      class="buy-car-goods-title-desc flex flex-column j-c-s-b"
      @click="buyCarGoodsClick"
    >
      <h4>{{ goods.goodsTitle }}</h4>
      <p>{{ goods.goodsDesc }}</p>
      <div class="price-number">
        <span>{{ goods.goodsPrice }}</span>
        <span>x{{ goods.count }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goods: Object,
    default() {
      return {};
    },
    /* 是否选中,默认是选中 */
    isGoodsActive: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {};
  },
  methods: {
    selectGoodsClick(iid) {
      // this.isGoodsActive = !this.isGoodsActive;
      this.$store.commit("alterIsActive", { iid: iid });
    },
    buyCarGoodsClick() {
      this.$router.push(this.goods.goodsDetailUrl);
      console.log(this.goods, "---");
    },
  },
};
</script>

<style >
.goods-car-item {
  width: 100%;
  background-color: #fff;
  border-bottom: 2px solid rgb(209, 208, 208);
}
.select {
  width: 20px;
  height: 100%;
  padding-left: 5px;
}
.select span {
  display: inline-block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 1px solid rgb(214, 213, 213);
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  color: white;
  text-align: center;
  line-height: 15px;
}
.buy-car-goods-img img {
  width: 70px;
  height: 100%;
  border-radius: 10px;
  margin: 3px 10px;
}
.goods-car-item p {
  margin-top: -15px;
  font-size: 14px;
  color: rgb(150, 148, 148);
}
.goods-car-item h4 {
  margin-top: 5px;
  font-weight: 600;
  color: rgb(75, 74, 74);
}
.goods-car-item .price-number {
  margin-bottom: 10px;
}
.buy-car-goods-title-desc h4,
.buy-car-goods-title-desc p {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}
.price-number span:nth-child(1) {
  color: rgb(238, 141, 62);
}
.price-number span:nth-child(2) {
  float: right;
  margin-right: 15px;
}
.goodsActive {
  background-color: skyblue;
}
</style>