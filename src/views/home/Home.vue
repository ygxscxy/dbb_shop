<template>
  <div id="home">
    <header-nav>
      <template v-slot:nav-center>
        <div id="home-title">
          <h3>购物街</h3>
        </div>
      </template>
    </header-nav>
    <!-- 这个tab-control一开始是默认隐藏的 然后再滚动到一定的位置时进行显示并带有吸顶的效果 -->
    <tab-control
      :titles="['流行', '新款', '精选']"
      @activeIndex="activeIndex"
      ref="tabControl1"
      :class="{ tabControlFiexd: isTabControlFixed }"
      class="tab-control"
      v-show="isTabControlFixed"
    ></tab-control>
    <scroll
      class="scroll-region"
      ref="scr"
      :probeType="3"
      :pullUpLoad="true"
      @getScrollPosition="getScrollPosition"
      @getMoreData="getMoreData"
    >
      <home-swiper :banners="banners" @imgLoad="imgSwiperLoad"></home-swiper>
      <recommend :recommends="recommends"></recommend>
      <popular></popular>
      <!-- tab-control要进行黏性定位，就不能放到better-scroll中，会出bug -->
      <tab-control
        :titles="['流行', '新款', '精选']"
        @activeIndex="activeIndex"
        ref="tabControl2"
        :class="{ tabControlFiexd: isTabControlFixed }"
      ></tab-control>
      <goods-list :goods="showGoodsList" @imgLoad="imgLoad"></goods-list>
    </scroll>

    <back-top-btn
      @click.native="clickBack"
      v-show="isShowBackBtn"
    ></back-top-btn>
  </div>
</template>

<script>
import HeaderNav from "components/common/headerNav/HeaderNav.vue";
import HomeSwiper from "./homeChildComp/HomeSwiper";
import Recommend from "./homeChildComp/Recommend.vue";
import Popular from "./homeChildComp/Popular.vue";
import TabControl from "components/content/tabControl/TabControl.vue";
import GoodsList from "components/content/goods/GoodsList.vue";
import Scroll from "components/common/scroll/Scroll.vue";

// import BackTopBtn from "components/content/backTopBtn/BackTopBtn.vue";

import { fangdou } from "common/utils.js";

import {
  getHomeHeaderRequest,
  getHomeGoods,
  getSwiper,
} from "network/homeRequest.js";

// 导入混入对象
import { backBtn } from "mixins/mixin.js";

export default {
  // 使用混入对象
  mixins: [backBtn],
  components: {
    HeaderNav,
    HomeSwiper,
    Recommend,
    Popular,
    TabControl,
    GoodsList,
    Scroll,
    // BackTopBtn,
  },
  data() {
    return {
      // isShowBackBtn: false,
      recommends: [],
      banners: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentTitle: "pop",
      // 记录tab-control元素位于顶部的距离
      tabControlOffsetTop: 0,
      isTabControlFixed: false,
      listenImgLoad: null,
    };
  },

  computed: {
    showGoodsList() {
      return this.goods[this.currentTitle].list;
    },
  },
  // 组件创建完毕
  created() {
    // 调用请求方法
    this.getHomeHeaderRequest();
    this.getHomeGoods("pop");
    this.getHomeGoods("sell");
    this.getHomeGoods("new");
    this.getSwiper();
  },

  // 离开首页时触发的函数
  deactivated() {
    // 当离开首页后，就取消监听首页图片加载的函数
    this.$bus.$off("imgLoad", this.listenImgLoad);
  },

  methods: {
    // 请求方法
    getSwiper() {
      getSwiper().then((res) => {
        this.banners = res.data.data.banner.list;
      });
    },
    getHomeHeaderRequest() {
      getHomeHeaderRequest({
        baseURL: "http://localhost:5000/api/home",
        url: "/recommend",
      }).then((res) => {
        this.recommends = res.data;
      });
    },
    // 获取商品数据 根据商品类型
    getHomeGoods(type) {
      // 处理page，如果再次发送请求就在原来的page上加1
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page += 1;
      });
    },

    // ---------------

    // 事件处理函数
    clickBack() {
      // ref="scr"
      // this.$refs.scr ==>组件对象 ==>this.$refs.scr.scroll 是组件对象中的滚动对象
      this.$refs.scr.scrollToEnc(0, 0, 500); //.scrollTo(0, 0,500) 第一二个参数是到那里去，第三个参数是过程要多少毫秒
    },

    activeIndex(index) {
      switch (index) {
        case 0:
          this.currentTitle = "pop";
          break;
        case 1:
          this.currentTitle = "new";
          break;
        case 2:
          this.currentTitle = "sell";
          break;
      }

      this.$refs.tabControl1.selectIndex = index;
      this.$refs.tabControl2.selectIndex = index;
    },
    // 监听首页的滚动
    getScrollPosition(position) {
      this.backTop(position);

      // 判断tab-control是否吸顶
      if (this.tabControlOffsetTop < 558) {
        console.log(this.tabControlOffsetTop, "--");
        this.tabControlOffsetTop = 558;
        console.log(this.tabControlOffsetTop, "+++");
      }
      if (-position.y > this.tabControlOffsetTop) {
        this.isTabControlFixed = true;
      } else {
        this.isTabControlFixed = false;
      }
    },
    // 拉取更多数据
    getMoreData() {
      this.getHomeGoods(this.currentTitle);
      this.$refs.scr.finishPullUpEnc();

      fangdou(this.$refs.scr.refreshEnc(), 400);
    },

    // 监听轮播图图片加载，等到图片加载完成才能获取到准确的offsetTop，
    imgSwiperLoad() {
      // 所有的组件对象都有一个属性：$el 取出组件对象对应的DOM元素对象
      this.tabControlOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },

    imgLoad() {
      // 监听首页图片加载完毕的时间，加载完毕就会执行refreshEnc
      this.listenImgLoad = () => {
        // this.$refs.scr.refreshEnc(); //这个函数会执行多次，需要进行防抖操作
        fangdou(this.$refs.scr.refreshEnc, 400); //防抖操作
      };
      this.$bus.$on("imgLoad", this.listenImgLoad);
    },
  },

  /* backTop() {
    // 是否显示回到顶部按钮
    if (-position.y >= 1000) {
      // 判断回到顶部的按钮是否显示
      this.isShowBackBtn = true;
    } else {
      this.isShowBackBtn = false;
    }
  }, */
};
</script>

<style >
.tab-control {
  position: relative;
  z-index: 3;
  background-color: #fff;
}
.tabControlFiexd {
  position: fixed;
  left: 0;
  right: 0;
  top: 44px;
}
#home {
  height: 100vh;
}
.scroll-region {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}

#fangdajing {
  width: 35px;
  height: 35px;
  transform: translateX(-30px);
}

#home-title {
  color: #fff;
}
</style>