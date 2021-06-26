<template>
  <div class="goods-info-box" v-if="Object.keys(showDetailGoodsImg).length">
    <div class="text-content">
      <div class="left-region">
        <span class="juxing"></span><span class="changtiao"></span>
      </div>
      <div class="detail-desc">
        <p>&nbsp;&nbsp;{{ showDetailGoodsImg.desc }}</p>
      </div>
      <div class="right-region">
        <span class="changtiao"></span><span class="juxing"></span>
      </div>
      <div class="show-key">
        <span>{{ showDetailGoodsImg.detailImage[0].key }}</span>
      </div>
    </div>
    <div>
      <div
        v-for="(item, index) in showDetailGoodsImg.detailImage[0].list"
        :key="index"
        class="detail-goods-img flex j-c-c a-c"
      >
        <img :src="item" alt="" @load="detailGoodsImgLoad" />
      </div>
    </div>
  </div>
</template>

<script>
import { fangdou } from "common/utils.js";
export default {
  data() {
    return {
      count: 0,
      imgLength: 0,
    };
  },
  props: {
    showDetailGoodsImg: {
      type: Object,
    },
  },

  methods: {
    detailGoodsImgLoad() {
      this.count += 1;
      if (this.count == this.imgLength) {
        this.$emit("detailGoodsImgLoad");
      }
    },
  },
  mounted() {
    fangdou(this.detailGoodsImgLoad, 400);
  },
  updated() {
    this.imgLength = this.showDetailGoodsImg.detailImage[0].list.length;
  },
};
</script>

<style scoped>
.show-key {
  margin-bottom: 10px;
}
.detail-goods-img img {
  width: 90vw;
}
.detail-desc p {
  padding: 10px 0;
}
.text-content {
  margin-left: 15px;
}
.left-region span {
  display: inline-block;
}
.right-region {
  position: relative;
  right: -200px;
}
.right-region span {
  display: inline-block;
}
.juxing {
  width: 5px;
  height: 5px;
  background-color: black;
}
.changtiao {
  width: 80px;
  height: 3px;
  border-bottom: 1px solid rgb(161, 163, 161);
}
.detail-desc {
  color: rgb(83, 83, 83);
  font-size: 14px;
}
</style>