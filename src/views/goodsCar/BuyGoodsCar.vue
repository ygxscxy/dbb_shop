<template>
  <div>
    <header-nav class="buy-car-header-nav">
      <template v-slot:nav-center>
        <div id="buy-car-title flex" style="color: white">
          <h3>
            购物车
            <span class="buy-number">({{ len }})</span>
          </h3>
        </div>
      </template>
    </header-nav>
    <scroll class="buy-car-scroll">
      <!-- 展示购物车中的商品列表 -->
      <goods-car-list :buyCars="buyCars"></goods-car-list>
    </scroll>
    <!-- 结算 -->
    <settlement></settlement>
  </div>
</template>

<script>
import HeaderNav from "components/common/headerNav/HeaderNav.vue";
import GoodsCarList from "./goodsCarChild/goodsCarsList.vue";
import Settlement from "./goodsCarChild/Settlement.vue";
import Scroll from "components/common/scroll/Scroll.vue";

import { mapGetters } from "vuex"; //将getter中导入到计算属性中
export default {
  components: {
    HeaderNav,
    GoodsCarList,
    Scroll,
    Settlement,
  },
  computed: {
    /* goodsCount() {
      return this.$store.getters.goodsCarLength;
    }, */
    // 将vuex中的getters全部导入到计算属性中
    // 使用对象展开运算符将 getter 混入 computed 对象中,有两种语法
    // 第一种：一一对应的关系
    // ...mapGetters(["goodsCarLength"]),
    // 第二种:键是别名 值是getter中定义的方法名
    ...mapGetters({
      len: "goodsCarLength",
    }),

    buyCars() {
      return this.$store.state.buyCars;
    },
  },
};
</script>

<style >
.buy-car-scroll {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 49px;
}
</style>