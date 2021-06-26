<template>
  <a href="javascript:;" @click="bundle">
    <span id="next">&lt;</span>
  </a>
</template>

<script>
export default {
  props: {
    item: {
      type: String,
      default: "span",
    },
  },
  methods: {
    bundle() {
      this.$store.state.prevImage();
    },
  },
};
</script>

<style >
#next {
  position: absolute;
  top: 100px;
  width: 30px;
  height: 30px;
  left: -5px;
  border-radius: 10px;
  line-height: 30px;
  text-align: center;
  background-color: red;
}
</style>