<template>
  <div class="goods-item flex j-c-s-b" @click="clickGoodsItem">
    <div class="flex j-c-c">
      <!-- @load="imgLoad"加你他那个当前图片是否加载完成，如果加载完成，就执行后面的回调函数imgLoad函数 -->
      <!-- <img :src="showImg" alt="" @load="imgLoad" /> -->
      <a v-if="goodsitem.link" :href="goodsitem.link">
        <img v-lazy="showImg" alt="" @load="imgLoad" />
      </a>
    </div>
    <div>
      <p class="goods-item-title">{{ goodsitem.title }}</p>
      <p class="price-cfav" v-if="goodsitem.price || goodsitem.cfav">
        <span class="goods-item-price">￥{{ goodsitem.price }}</span>
        <span class="goods-item-cfav-num flex a-c">
          <img src="~assets/image/home/收藏.png" alt="" />
          <span>{{ goodsitem.cfav }}</span>
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsitem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    imgLoad() {
      this.count += 1;
      if (this.count == this.showImg) {
        // 发送事件总线:但是有一个bug
        this.$bus.$emit("imgLoad");
      }
    },
    clickGoodsItem() {
      this.$router.push({
        path: "/detail",
        query: { iid: this.goodsitem.iid },
      });
    },
  },
  computed: {
    showImg() {
      return this.goodsitem.image || this.goodsitem.show.img;
    },
  },
};
</script>

<style scoped>
.goods-item {
  width: 45%;
  flex-direction: column;
  background-color: #fff;
  margin-bottom: 30px;
}
.goods-item img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
.goods-item-title {
  font-size: 14px;
  width: 100%;
  height: 22px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  padding: 10px 0;
  margin-bottom: 20px;
  text-align: center;
}
.goods-item-price {
  font-size: 12px;
  color: red;
  float: left;
}
.goods-item-cfav-num {
  font-size: 12px;
  float: right;
  margin-right: 10px;
}
.goods-item-cfav-num img {
  width: 15px;
  height: 15px;
}
.price-cfav {
  margin-bottom: 5px;
}
</style>