// 混入用于抽取组件相同的代码


// 下面抽取的是一个组件
import BackTopBtn from "components/content/backTopBtn/BackTopBtn.vue";

export const backBtn = {
  components: {
    BackTopBtn
  },

  data() {
    return {
      isShowBackBtn: false,
    }
  },
  methods: {
    clickBack() {
      this.$refs.scr.scrollToEnc(0, 0, 500);
    },
    backTop(position) {
      // 是否显示回到顶部按钮
      if (-position.y >= 1000) {
        // 判断回到顶部的按钮是否显示
        this.isShowBackBtn = true;
      } else {
        this.isShowBackBtn = false;
      }
    },
  },
}