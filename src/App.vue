<template>
  <div id="app">
    <!-- 保存路由的状态keep-alive exclude排除Detail组件-->
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <final-bar></final-bar>
  </div>
</template>

<script>
import FinalBar from "components/content/tabbar/FinalBar.vue";

export default {
  name: "App",
  components: {
    FinalBar,
  },
};
</script>

<style>
@import "assets/css/normalize.css";
@import url("assets/css/base.css");
</style>
