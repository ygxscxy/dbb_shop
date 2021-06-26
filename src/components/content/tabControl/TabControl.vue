<template>
  <!-- 一般如果组件复用时，所有的地方都是文字方式变化时，就不需要使用插槽， -->
  <div class="tab-control flex j-c-s-a a-c">
    <div
      v-for="(item, index) in titles"
      class="tab-control-item"
      :class="{ active: index === selectIndex }"
      @click="bundle(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      // 选中的tab
      selectIndex: 0,
    };
  },
  methods: {
    bundle(index) {
      this.selectIndex = index;
      this.$emit("activeIndex", index);
    },
  },
};
</script>

<style>
.tab-control-item {
  height: 35px;
  line-height: 35px;
  font-size: 12px;
}
.active {
  color: skyblue;
}
.active span {
  border-bottom: 2px skyblue solid;
  padding: 3px;
  font-size: 1.3em;
}
</style>