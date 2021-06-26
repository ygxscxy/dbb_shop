<template>
  <div>
    <header-nav :bgc="'#fff'">
      <template v-slot:nav-left>
        <div class="detail-prev" @click="backClick">
          <img src="~assets/image/detail/prev.png" alt="" />
        </div>
      </template>
      <template v-slot:nav-center>
        <div class="flex j-c-s-a a-c">
          <div
            class="header-title"
            v-for="(item, index) in headerTitles"
            :key="item"
            @click="activeClick(index)"
            :class="{ active: index === currentActive }"
          >
            <span>{{ item }}</span>
          </div>
        </div>
      </template>
    </header-nav>
  </div>
</template>

<script>
import HeaderNav from "components/common/headerNav/HeaderNav.vue";

export default {
  components: {
    HeaderNav,
  },
  data() {
    return {
      iid: "",
      headerTitles: ["商品", "参数", "评论", "推荐"],
      currentActive: 0,
    };
  },

  methods: {
    activeClick(index) {
      this.currentActive = index;
      this.$emit("activeClick", index);
    },
    backClick() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
.detail-prev img {
  width: 15px;
  height: 15px;
  text-align: center;
  line-height: 20px;
}
.header-title {
  font-size: 14px;
}
.active {
  color: skyblue;
}
</style>