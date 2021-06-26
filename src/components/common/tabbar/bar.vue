<template>
  <div class="bar flex flex-column a-c" @click="btnClick">
    <slot v-if="!isActive" name="icon"></slot>
    <slot v-else name="active-icon"></slot>
    <div :style="{ color: activeTextColor }">
      <slot name="text"></slot>
    </div>
  </div>
</template>  

<script>
export default {
  props: {
    // path切换路由的路径
    path: {
      type: String,
      default: "/",
    },
    // activeTextColor选中按钮的颜色
    TextColor: {
      type: String,
      default: "black",
    },
  },
  data() {
    return {};
  },
  computed: {
    // 计算属性就相当于data中的数据
    isActive() {
      // 返回值是isActive这个属性的值
      return this.$route.path.indexOf(this.path) != -1 ? true : false;
      // this.$route.path是处于活跃的路由对象的路径
      // this.path是当前bar按钮的路由的路径
    },
    activeTextColor() {
      return this.isActive ? this.TextColor : null;
    },
  },
  methods: {
    btnClick() {
      this.$router.push(this.path);
    },
  },
};
</script>

<style>
.bar {
  font-size: 12px;
}
.textColor {
  color: rgb(18, 150, 219);
}
</style>