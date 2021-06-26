<template>
  <div class="settlement">
    <label @click="checkboxClick">
      <input
        type="checkbox"
        :checked="isSelect"
        class="settlement-checkbox"
        value="√"
      />&nbsp;全选
    </label>
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
      isSelect: true,
    };
  },
  methods: {
    goBuy() {
      console.log("aa");
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
    checkboxClick() {
      this.$store.commit("allSelectGoods", { isSelect: this.isSelect });
    },
  },
  computed: {
    ...mapGetters({
      len: "goodsCarLength",
    }),
    totalPrice() {
      return this.total();
    },

    selectGoodsCount() {
      return this.$store.state.buyCars.filter((val) => {
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