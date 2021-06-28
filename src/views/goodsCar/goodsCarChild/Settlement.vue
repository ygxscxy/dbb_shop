<template>
  <div class="settlement">
    <input
      type="checkbox"
      class="settlement-checkbox"
      value="√"
      id="checkbox"
      :checked="isAllSelect"
      @click="checkedCkick"
    />
    <label for="checkbox">全选 </label>
    &nbsp;&nbsp;
    <span>合计:￥{{ totalPrice }}</span>
    <span class="go-buy" @click="goBuy">去结算({{ selectGoodsCount }})</span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      isSelect: false,
    };
  },
  methods: {
    goBuy() {
      this.total();
    },
    total() {
      return this.$store.state.buyCars
        .filter((val) => {
          return val.isGoodsActive;
        })
        .reduce((pervVal, newVal) => {
          return pervVal + parseFloat(newVal.goodsPrice) * newVal.count;
        }, 0);
    },
    checkedCkick() {
      // 判断是否全部选中
      let tag = !this.isAllSelect;
      this.$store.commit("allSelectGoods", tag);
    },
  },
  computed: {
    ...mapGetters({
      len: "goodsCarLength",
      getGoodsCars: "getGoodsCars",
    }),
    totalPrice() {
      return Math.floor(this.total() * 100) / 100;
    },
    isAllSelect() {
      if (this.$store.state.buyCars.length === 0) return false;
      return !this.$store.state.buyCars.find((res) => {
        return res.isGoodsActive == false;
      });
    },

    selectGoodsCount() {
      return this.getGoodsCars.filter((val) => {
        return val.isGoodsActive;
      }).length;
    },
  },
};
</script>

<style>
.settlement {
  width: 100%;
  height: 30px;
  background-color: rgb(207, 206, 206);

  position: fixed;
  bottom: 49px;

  line-height: 30px;
  vertical-align: middle;
  padding-left: 5px;
}
.go-buy {
  float: right;
  width: 30%;
  height: 35px;
  background-color: skyblue;
  text-align: center;
  color: white;
  font-size: 14px;
}
.settlement-checkbox {
  width: 15px;
  height: 15px;
  background-color: skyblue;
}
</style>