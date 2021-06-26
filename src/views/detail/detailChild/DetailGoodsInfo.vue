<template>
  <div class="goods-info flex flex-column">
    <div class="title-price">
      <div class="detail-goods-title">
        <h3>{{ goodsDetailInfo.title }}</h3>
      </div>
      <div class="goods-price">
        <span class="price">{{ goodsDetailInfo.price }}</span>
        <span class="old-price">{{ goodsDetailInfo.oldPrice }}</span>
        <span
          class="discountDesc"
          :style="{ backgroundColor: goodsDetailInfo.discountBgColor }"
          >{{ goodsDetailInfo.discountDesc }}</span
        >
      </div>
    </div>

    <div class="other-info-columns flex a-c j-c-s-b">
      <span v-for="(item, index) in goodsDetailInfo.columns" :key="index">{{
        item
      }}</span>
    </div>

    <div class="other-info-services flex j-c-s-b">
      <span v-for="item in goodsDetailInfo.services" class="services flex a-c">
        <img :src="item.icon" alt="" /> <span>{{ item.name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsDetailInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.goods-info {
  border-bottom: solid rgb(233, 231, 231) 5px;
}
.title-price {
  margin-top: 5px;
  margin-bottom: 10px;
  padding-left: 5px;
}
.goods-price {
  margin-top: 10px;
}
.goods-price span {
  margin-right: 5px;
}
.price {
  color: red;
  font-size: 24px;
}
.old-price {
  text-decoration: line-through;
  color: rgb(209, 208, 208);
}

.discountDesc {
  display: inline-block;
  border-radius: 8px;
  color: white;
}
.other-info-columns {
  color: rgb(170, 168, 168);
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 10px;
  padding: 10px 5px;
  border-bottom: 5px solid rgb(233, 231, 231);
}
.services img {
  width: 15px;
  height: 15px;
}
.other-info-services {
  color: rgb(114, 113, 113);
  font-size: 10px;
  margin-bottom: 10px;
  padding: 10px 5px;
}
</style>