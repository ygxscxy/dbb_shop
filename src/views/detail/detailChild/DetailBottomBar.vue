<template>
  <div class="detail-bottom-bar flex a-c j-c-s-b">
    <div class="left-bar flex a-c j-c-s-a">
      <div class="store flex flex-column a-c">
        <img src="~assets/image/detail/店铺.png" alt="" />
        <span>店铺</span>
      </div>
      <div class="service flex flex-column a-c">
        <img src="~assets/image/detail/客服.png" alt="" />
        <span>客服</span>
      </div>
      <div class="collection flex flex-column a-c">
        <img src="~assets/image/detail/收藏.png" alt="" />
        <span>收藏</span>
      </div>
    </div>

    <div class="right-bar flex a-c" id="right-box">
      <div class="add-buy-car flex j-c-c a-c" @click="addBuyCarClick">
        <span>加入购物车</span>
      </div>
      <div class="buy flex j-c-c a-c">
        <span>立即购买</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    addBuyCarClick() {
      console.log("addBuyCarClick");
      this.$emit("addBuyCarClick");
    },
  },
};
</script>

<style >
.detail-bottom-bar {
  height: 49px;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  z-index: 10;

  flex: 1;
  background-color: #fff;
}
.left-bar {
  width: 45%;

  color: rgb(102, 102, 102);
}
.left-bar span {
  font-size: 12px;
}
.left-bar img {
  width: 18px;
  height: 18px;
  margin-bottom: 5px;
}

.add-buy-car,
.buy {
  width: 50%;
  height: 100%;
}

.right-bar .add-buy-car {
  background-image: linear-gradient(to right, yellow, orange);
}
.right-bar .buy {
  background-color: rgb(245, 102, 36);
}
.detail-bottom-bar #right-box {
  width: 55%;
  font-size: 14px;
  height: 80%;
  color: white;
}
</style>