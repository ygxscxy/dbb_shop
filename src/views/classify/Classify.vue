<template>
  <div class="classify">
    <!-- header -->
    <header-nav>
      <template v-slot:nav-center>
        <div>
          <h3 class="classify-title">商品分类</h3>
        </div>
      </template>
    </header-nav>
    <div class="classify-main flex">
      <scroll class="classify-name-scroll">
        <!-- 左侧 -->
        <div class="classify-name flex flex-column a-c j-c-s-b">
          <ul @click="classifyNameClick">
            <li
              v-for="(item, index) in classifyNameList.list"
              :tag="item.maitKey"
              :key="index"
              :class="{ classifyActive: item.maitKey == activeMaitKey }"
            >
              {{ item.title }}
            </li>
          </ul>
        </div>
      </scroll>
      <scroll class="classify-goods-list-scroll">
        <!-- 右侧 -->
        <goods-list
          class="classify-goods-list"
          :goods="classifyGoodsList"
        ></goods-list>
      </scroll>
    </div>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll.vue";
import GoodsList from "components/content/goods/GoodsList.vue";
import {
  getClassifyName,
  ClassifyName,
  getClassifyGoods,
} from "network/classify.js";

import HeaderNav from "components/common/headerNav/HeaderNav.vue";

export default {
  data() {
    return {
      scroll: null,
      classifyNameList: {},
      classifyGoodsList: [],
      activeMaitKey: "3627",
    };
  },
  components: {
    Scroll,
    HeaderNav,
    GoodsList,
  },
  methods: {
    getClassifyName() {
      getClassifyName().then((res) => {
        this.classifyNameList = new ClassifyName(res);
      });
    },
    getClassifyMaitKey(maitKey) {
      getClassifyGoods(maitKey).then((res) => {
        this.classifyGoodsList = res.data.data.list;
      });
    },
    classifyNameClick(event) {
      let maitKey = event.target.getAttribute("tag");
      this.activeMaitKey = maitKey;
      this.getClassifyMaitKey(maitKey);
    },
  },
  created() {
    this.getClassifyName();
  },
  mounted() {
    getClassifyGoods("3627").then((res) => {
      this.classifyGoodsList = res.data.data.list;
    });
  },
};
</script>

<style scoped>
.classifyActive {
  color: skyblue;
  background-color: #fff;
}
.classify-title {
  color: white;
}
.classify-name {
  width: 100px;
  background-color: rgb(247, 247, 247);
}
.classify-goods-list {
  width: calc(100vw-100px);
}
.classify-name-scroll {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: calc(100vw-100px);
}
.classify-goods-list-scroll {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 100px;
  right: 0;
}
.classify-name ul li {
  margin-bottom: 20px;
  padding: 5px;
}
</style>