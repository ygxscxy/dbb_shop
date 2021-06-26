<template>
  <div :class="[swiperStyle]" ref="swiper">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    swiperStyle: {
      type: String,
      default: "swiperDefaultStyle",
    },
  },
  mounted() {
    this.$store.commit("getNextImgae", this.nextImage);
    this.$store.commit("getPrevImage", this.prevImage);
    this.init();
  },

  data() {
    return {
      index: 1,
      a: 0,
      prevTime: "",
    };
  },

  methods: {
    // 初始化函数
    init() {
      let swiperWidth =
        this.$refs.swiper.children.length * parseInt(document.body.clientWidth);
      this.$refs.swiper.style.width = swiperWidth + 2 + "px";
      this.$store.commit(
        "swiperChildrenLength",
        this.$refs.swiper.children.length
      );
      this.$refs.swiper.style.left =
        "-" + document.body.clientWidth * this.index + "px";
      // this.autoMove();
    },
    nextImage() {
      this.transit();
      // console.log(this.index);
      this.index++;
      if (this.index == this.$refs.swiper.children.length - 1) {
        setTimeout(() => {
          this.index = 1;
          this.$refs.swiper.style.left =
            -document.body.clientWidth * this.index + "px";
          this.$refs.swiper.style.transition = "none";
        }, 1000);
      }
      this.$refs.swiper.style.left =
        -document.body.clientWidth * this.index + "px";
      this.$store.commit("getIndex", this.index);
      this.$store.state.setHeigh();
    },

    prevImage() {
      this.index--;

      this.transit();
      if (this.index == 0) {
        setTimeout(() => {
          this.index = this.$refs.swiper.children.length - 2;
          this.$store.state.setHeigh();
          this.$refs.swiper.style.left =
            -document.body.clientWidth * this.index + "px";
          this.$refs.swiper.style.transition = "none";
          this.$store.commit("getIndex", this.index);
        }, 1000);
      }
      this.$refs.swiper.style.left =
        -document.body.clientWidth * this.index + "px";
      this.$store.commit("getIndex", this.index);
      this.$store.state.setHeigh();
    },
    // 自动轮播

    autoMove() {
      this.a = setInterval(() => {
        this.nextImage();
        this.$store.commit("getIndex", this.index);
      }, 1000);

      this.$store.commit("getA", { a: this.a, autoMove: this.autoMove });
    },

    // 过渡效果
    transit() {
      this.$refs.swiper.style.transition = "all 1s";
    },
  },
};
</script>

<style scoped>
.swiperDefaultStyle {
  position: relative;
  top: 0;
  left: 0;
  height: 150px;
}
</style>