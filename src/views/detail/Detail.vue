<template>
  <div id="detail">
    <detail-header-nav
      class="detail-nav"
      @activeClick="activeClick"
      ref="nav"
    ></detail-header-nav>
    <scroll
      ref="scr"
      class="content"
      :probeType="3"
      @getScrollPosition="getScrollPosition"
    >
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-goods-info :goodsDetailInfo="goodsDetailInfo"></detail-goods-info>
      <detail-store-info :storeDetailInfo="storeDetailInfo"></detail-store-info>
      <detail-show-goods-img
        :showDetailGoodsImg="showDetailGoodsImg"
        @detailGoodsImgLoad="detailGoodsImgLoad"
      ></detail-show-goods-img>
      <detail-goods-params-info
        ref="params"
        :goodsInfoRule="goodsInfoRule"
      ></detail-goods-params-info>
      <detail-user-comment
        :commentInfo="commentInfo"
        ref="comment"
      ></detail-user-comment>
      <goods-list :goods="goodsRecommend" ref="recommend"></goods-list>
    </scroll>
    <back-top-btn
      @click.native="clickBack"
      v-show="isShowBackBtn"
    ></back-top-btn>
    <detail-bottom-bar @addBuyCarClick="addBuyCarClick"></detail-bottom-bar>
  </div>
</template>

<script>
import DetailHeaderNav from "./detailChild/DetailHeaderNav.vue";
import DetailSwiper from "./detailChild/DetailSwiper.vue";
import DetailGoodsInfo from "./detailChild/DetailGoodsInfo.vue";
import DetailStoreInfo from "./detailChild/DetailStore.vue";
import DetailShowGoodsImg from "./detailChild/DetailShowGoodsImg.vue";
import DetailGoodsParamsInfo from "./detailChild/DetailGoodsParamsInfo.vue";
import DetailUserComment from "./detailChild/DetailUserComment.vue";
import GoodsList from "components/content/goods/GoodsList.vue";
import DetailBottomBar from "./detailChild/DetailBottomBar.vue";

import Scroll from "components/common/scroll/Scroll.vue";

import {
  getDetailData,
  GoodsDetailInfo,
  StoreDetailInfo,
  GoodsParamsInfo,
  getGoodsRecommend,
} from "network/detail.js";

import { backBtn } from "mixins/mixin.js";
export default {
  name: "Detail",
  mixins: [backBtn],
  data() {
    return {
      topImages: [], //轮播图照片
      goodsDetailInfo: {}, //
      storeDetailInfo: {},
      showDetailGoodsImg: {},
      goodsInfoRule: {},
      commentInfo: [],
      goodsRecommend: [],
      detailRecommendImgLoad: null,
      // 跳转到那个位置
      themeToY: [],
      activeNav: 0,
      currentIndex: 0,
    };
  },
  components: {
    DetailHeaderNav,
    DetailSwiper,
    DetailGoodsInfo,
    DetailStoreInfo,
    Scroll,
    DetailShowGoodsImg,
    DetailGoodsParamsInfo,
    DetailUserComment,
    GoodsList,
    DetailBottomBar,
  },
  created() {
    // 每一个商品都对应一个商品id
    this.iid = this.$route.query.iid;

    getDetailData(this.iid).then((res) => {
      let data = res.data.result;

      // 获取详情页的轮播图
      this.topImages = res.data.result.itemInfo.topImages;

      // 获取的是详情页的商品的信息数据(轮播图，标题，价格，。。。)
      this.goodsDetailInfo = new GoodsDetailInfo(
        data.itemInfo,
        data,
        data.shopInfo
      );
      console.log(this.goodsDetailInfo);
      // console.log("this.goodsDetailInfo", this.goodsDetailInfo);
      // 店铺的信息，店铺的描述，。。。
      this.storeDetailInfo = new StoreDetailInfo(data.shopInfo);
      // console.log("this.storeDetailInfo", this.storeDetailInfo);

      //保存详情页的商品的展示照片数据 (data.detailInfo需要这个对象中取出，desc,key,list)
      this.showDetailGoodsImg = data.detailInfo;
      // console.log("this.showDetailGoodsImg", this.showDetailGoodsImg);

      // 商品的尺寸，商品的产地...
      this.goodsInfoRule = new GoodsParamsInfo(
        data.itemParams.info,
        data.itemParams.rule
      );

      if (data.rate.cRate != 0) {
        this.commentInfo = data.rate.list;
      } else {
        this.commentInfo = [{ content: "还没有评论信息..." }];
      }

      // 获取详情页的推荐商品数据
      getGoodsRecommend().then((res) => {
        this.goodsRecommend = res.data.data.list;
        // console.log(res);
      });
      // console.log(data);

      // 等上面的代码都执行完毕后,才会执行这个方法中的回调函数,但是此时请求已经发送完毕,但是图片还没有渲染到页面
      // this.$nextTick(() => {
      //   this.themeToY.push(0);
      //   this.themeToY.push(this.$refs.params.$el.offsetTop + 20);
      //   this.themeToY.push(this.$refs.comment.$el.offsetTop + 20);
      //   this.themeToY.push(this.$refs.recommend.$el.offsetTop + 20);
      //   console.log(this.themeToY);
      // });
    });
  },
  methods: {
    activeClick(index) {
      // 点击了标题,就滚动到指定的位置
      this.$refs.scr.scrollToEnc(0, -this.themeToY[index], 100);
    },
    // 监听图片是否加载完毕,如果加载完毕,那么页面就会完成最终的加载
    detailGoodsImgLoad() {
      this.themeToY.push(0);
      this.themeToY.push(this.$refs.params.$el.offsetTop);
      this.themeToY.push(this.$refs.comment.$el.offsetTop);
      this.themeToY.push(this.$refs.recommend.$el.offsetTop);
      this.themeToY.push(Number.MAX_VALUE);
      console.log(this.themeToY);
    },
    getScrollPosition(position) {
      this.backTop(position);
      let length = this.themeToY.length;

      // for (let i = 0; i < length; i++) {
      // 商品区域 0-this.themeToY[1]
      // 参数区域:this.themeToY[1]-this.themeToY[2]

      // if (
      //   this.currentIndex != i &&
      //   ((i < length - 1 &&
      //     -position.y >= this.themeToY[i] &&
      //     -position.y < this.themeToY[i + 1]) ||
      //     (length - 1 == i && -position.y >= this.themeToY[i]))
      // ) {
      //   this.currentIndex = i;
      //   // console.log(this.currentIndex);
      //   this.$refs.nav.currentActive = this.currentIndex;
      // }
      // }
      for (let i = 0; i < length - 1; i++) {
        if (
          this.currentIndex != i &&
          -position.y >= this.themeToY[i] &&
          -position.y < this.themeToY[i + 1]
        ) {
          this.currentIndex = i;
          this.$refs.nav.currentActive = this.currentIndex;
        }
      }
    },
    addBuyCarClick() {
      // 获取当前商品到购物车
      /* 
      购物车中需要展示的信息是：商品的封面，商品的标题，商品的描述，商品的价格，加入购物车数量
      */
      let buyCar = {};
      buyCar.img = this.topImages[0]; //展示商品的封面
      buyCar.goodsTitle = this.goodsDetailInfo.title; //商品的标题
      buyCar.goodsDesc = this.showDetailGoodsImg.desc; //商品的描述
      buyCar.goodsDetailUrl = this.$route.fullPath;
      // 商品的价格
      if (this.goodsDetailInfo.price.indexOf("~") != -1) {
        let goodsPrice = this.goodsDetailInfo.price.split("~")[0].split("¥")[1];
        buyCar.goodsPrice = goodsPrice;
      } else {
        buyCar.goodsPrice = this.goodsDetailInfo.price.split("¥")[1];
      }
      // 商品id
      buyCar.iid = this.iid;
      console.log("buyCar:", buyCar);

      // 保存当前商品的加入购物车的数量
      buyCar.count = 1;
      // this.$store.commit("setBuyCar", { buyCar: buyCar });
      this.$store.dispatch("setBuyCar", { buyCar: buyCar });
    },
  },

  // 因为页面中会有图片没有加载完成,图片的请求是异步操作的,
  // mounted() {
  //   this.themeToY.push(0);
  //   this.themeToY.push(this.$refs.params.$el.offsetTop);
  //   this.themeToY.push(this.$refs.comment.$el.offsetTop);
  //   this.themeToY.push(this.$refs.recommend.$el.offsetTop);
  //   console.log(this.themeToY);
  // },
  // 此时的所有图片都已经加载完毕
  updated() {
    // this.themeToY = [];
    // this.themeToY.push(0);
    // this.themeToY.push(this.$refs.params.$el.offsetTop);
    // this.themeToY.push(this.$refs.comment.$el.offsetTop);
    // this.themeToY.push(this.$refs.recommend.$el.offsetTop);
    // console.log(this.themeToY);
  },
};
</script>

<style scoped>
#detail {
  /* 将首页的导航隐藏 */
  position: relative;
  background-color: #fff;
  z-index: 1;
  height: 100vh;
}
.content {
  /* scroll滚动包裹的元素必须要有高度 */
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>


