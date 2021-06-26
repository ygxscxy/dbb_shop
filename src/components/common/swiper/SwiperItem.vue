<template>
  <div :class="[swiperItemStyle]" ref="swiperItem">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    swiperItemStyle: {
      type: String,
      default: "swiperItemStyle",
    },
  },
};
</script>

<style scoped>
.swiperItemStyle {
  display: inline;
  font-size: 0;
}
.swiperItemStyle img {
  width: 100vw;
  height: 150px;
}
</style>