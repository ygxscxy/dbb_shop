<template>
  <swiper ref="swiper" v-if="banners.length">
    <swiper-item v-for="(item, index) in banners">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imgLoad" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/t-swiper";

export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isLoaded: false,
    };
  },
  components: {
    Swiper,
    SwiperItem,
  },
  methods: {
    startTimer() {
      this.$refs.swiper && this.$refs.swiper.startTimer();
    },
    stopTimer() {
      this.$refs.swiper && this.$refs.swiper.stopTimer();
    },
    imgLoad() {
      // 只发送一次事件
      if (!this.isLoaded) {
        this.$emit("imgLoad");
        this.isLoaded = true;
      }
    },
  },
};
</script>

<style scoped>
</style>