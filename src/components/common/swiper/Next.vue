<template>
  <a href="" @click.prevent="hundle">
    <span id="prev">&gt;</span>
  </a>
</template>

<script>
export default {
  methods: {
    hundle() {
      this.$store.state.nextImage();
    },
  },
};
</script>

<style >
#prev {
  position: absolute;
  top: 100px;
  width: 30px;
  height: 30px;
  right: -5px;
  border-radius: 10px;
  line-height: 30px;
  text-align: center;
  background-color: red;
}
</style>