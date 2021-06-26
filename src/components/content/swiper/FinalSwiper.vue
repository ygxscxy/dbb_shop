<template>
  <div
    :class="[swiperBoxStyle]"
    ref="fianlSwiper"
    @mouseenter="enter"
    @mouseleave="leave"
  >
    <swiper>
      <swiper-item>
        <img src="~assets/image/swiper/5.jpg" alt="" />
      </swiper-item>
      <swiper-item>
        <img src="~assets/image/swiper/1.jpg" alt="" />
      </swiper-item>
      <swiper-item>
        <img src="~assets/image/swiper/2.jpg" alt="" />
      </swiper-item>
      <swiper-item>
        <img src="~assets/image/swiper/3.jpg" alt="" />
      </swiper-item>
      <swiper-item>
        <img src="~assets/image/swiper/4.jpg" alt="" />
      </swiper-item>
      <swiper-item>
        <img src="~assets/image/swiper/5.jpg" alt="" />
      </swiper-item>
      <swiper-item>
        <img src="~assets/image/swiper/1.jpg" alt="" />
      </swiper-item>
    </swiper>
    <dot ref="dot"></dot>
    <prev ref="prev"></prev>
    <next ref="next"></next>
  </div>
</template>

<script>
import Swiper from "components/common/swiper/Swiper.vue";
import SwiperItem from "components/common/swiper/SwiperItem.vue";
import Next from "components/common/swiper/Next.vue";
import Prev from "components/common/swiper/Prev.vue";
import Dot from "components/common/swiper/Dot.vue";
export default {
  components: {
    Swiper,
    SwiperItem,
    Next,
    Prev,
    Dot,
  },
  data() {
    return {
      left: "left",
      right: "right",
    };
  },
  props: {
    swiperBoxStyle: {
      type: String,
      default: "swiperBoxStyle",
    },
  },
  methods: {
    enter() {
      clearInterval(this.$store.state.a);
      this.$refs.next.$el.style.display = "block";
      this.$refs.prev.$el.style.display = "block";
    },
    leave() {
      this.$refs.next.$el.style.display = "none";
      this.$refs.prev.$el.style.display = "none";
      this.$store.state.autoMove();
    },
  },
  mounted() {
    this.$refs.next.$el.style.display = "none";
    this.$refs.prev.$el.style.display = "none";
  },
};
</script>

<style>
.swiperBoxStyle {
  width: 100%;
  height: 150px;
  overflow: hidden;
  margin-top: 44px;
}
</style>