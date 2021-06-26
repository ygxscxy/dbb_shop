<template>
  <div :class="headerNav">
    <div
      class="header-nav flex a-c j-c-s-a"
      :style="'backgroundColor:' + bgc + ';'"
    >
      <div class="nav-left">
        <slot name="nav-left"></slot>
      </div>
      <div class="nav-center">
        <slot name="nav-center"></slot>
      </div>
      <div class="nav-right">
        <slot name="nav-right"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    headerNav: {
      type: String,
      default: "header-nav",
    },
    bgc: {
      type: String,
      default: "skyblue",
    },
  },
};
</script>

<style >
.header-nav {
  width: 100vw;
  height: 44px;
  line-height: 44px;
  background-color: skyblue;
  position: relative;
  z-index: 3;

  /*  position: fixed;
  top: 0;
  left: 0;
  z-index: 2; */
}
.nav-left,
.nav-right {
  height: 100%;
  width: 60px;
  text-align: center;
}
.nav-center {
  text-align: center;
  flex: 1;
  height: 100%;
}
</style>
