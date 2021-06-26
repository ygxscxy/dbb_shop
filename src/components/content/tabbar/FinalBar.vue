<template>
  <div>
    <tab-bar>
      <bar path="/home" TextColor="rgb(18, 150, 219)">
        <template v-slot:icon>
          <div>
            <img src="~assets/image/tabbar/首页.png" alt="" />
          </div>
        </template>
        <template v-slot:active-icon>
          <div>
            <img src="~assets/image/tabbar/活跃的首页.png" alt="" />
          </div>
        </template>
        <template v-slot:text>
          <div>首页</div>
        </template>
      </bar>
      <bar path="/classify" TextColor="rgb(18, 150, 219)">
        <template v-slot:icon>
          <div>
            <img src="~assets/image/tabbar/分类.png" alt="" />
          </div>
        </template>
        <template v-slot:active-icon>
          <div>
            <img src="~assets/image/tabbar/活跃的分类.png" alt="" />
          </div>
        </template>
        <template v-slot:text>
          <div>分类</div>
        </template>
      </bar>
      <bar path="/goodscar" TextColor="rgb(18, 150, 219)">
        <template v-slot:icon>
          <div>
            <img src="~assets/image/tabbar/购物车.png" alt="" />
          </div>
        </template>
        <template v-slot:active-icon>
          <div>
            <img src="~assets/image/tabbar/活跃的购物车.png" alt="" />
          </div>
        </template>
        <template v-slot:text>
          <div>购物车</div>
        </template>
      </bar>
      <bar path="/profile" TextColor="rgb(18, 150, 219)">
        <template v-slot:icon>
          <div>
            <img src="~assets/image/tabbar/我的.png" alt="" />
          </div>
        </template>
        <template v-slot:active-icon>
          <div>
            <img src="~assets/image/tabbar/活跃的我的.png" alt="" />
          </div>
        </template>
        <template v-slot:text>
          <div>我的</div>
        </template>
      </bar>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar.vue";
import Bar from "components/common/tabbar/bar.vue";
export default {
  components: {
    TabBar,
    Bar,
  },
};
</script>

<style>
</style>