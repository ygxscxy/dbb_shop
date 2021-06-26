<template>
  <!-- 第一个div是滚动的区域 -->
  <div ref="wrapper">
    <!-- 第二个div是要滚动的内容 -->
    <div class="wrapper-content">
      <!-- 外部传入的需要实现滚动的区域 -->
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: true,
    },
  },
  mounted() {
    // 初始化BScroll
    this.scroll = new BScroll(this.$refs.wrapper, {
      // 有些情况下某些配置是不需要的，所以不能写死，让使用者传递
      probeType: this.probeType, //是否需要监听滚动 默认值是0不监测，1也是不监测，2是手指在滚动的过程中进行监测，手指离开后就不监测，3，监测滚动的全过程
      pullUpLoad: this.pullUpLoad, //开启滚动条到达底部的事件监听。
      observeDOM: true, //允许滚动
      click: true,
      // 通过observeImage和observeImage可以动态的拓展滚动区域的高度
      observeImage: true, //当检测到图像加载或加载失败时，自动刷新 BetterScroll 的高度。
      keepAlive: true, //自动保存滚动的状态信息
    });

    if (this.pullUpLoad) {
      // 监听滚顶条是否到达底部
      this.scroll.on("pullingUp", () => {
        //监听的事件 pullingUp触发的话，就代表需要拉取更多的数据
        this.$emit("getMoreData");

        // console.log("到达底部");
        //此时 上拉加载更多 发送ajax请求，
        /*  setTimeout(() => {
          this.scroll.finishPullUp();
        }, 2000); */
      });
    }

    // 监听滚动
    if (this.probeType == 2 || this.probeType == 3) {
      this.scroll.on("scroll", (position) => {
        // 向父组件传递position，那个组件只要绑定上getScrollPosition自定事件，这个position就会自动的携带过去
        this.$emit("getScrollPosition", position);
        // console.log(position); //position需要结合probeType使用
      });
    }
  },
  methods: {
    // 封装scroll对象的scrollTo方法
    scrollToEnc(x, y, timeout = 300) {
      this.scroll.scrollTo(x, y, timeout);
    },
    // 封装scroll的finishPullUp方法,用于再次监听滚动条到达底部
    finishPullUpEnc() {
      this.scroll.finishPullUp();
    },
    // 封装 refresh方法 重新计算高度，scroll在一开始的时候就给定了可滚动区域的高度，但是通过ajax请求过来更多的数据，导致原本的数据增多，原本可滚动的区域的高度增高，但是scroll不知道，导致无法往下继续拖动,如果调用refresh方法，scroll就会重新计算可滚动区域的高度
    refreshEnc() {
      console.log("---");
      // 这个方法一般在滚动区域发生变化后，调用
      this.scroll.refresh();
    },
  },
};
</script>


<style>
/* scoped当前样式只会在当前组件中生效 */
</style>