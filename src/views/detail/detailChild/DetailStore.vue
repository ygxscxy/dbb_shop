<template>
  <div class="store-info">
    <div class="store-name-logo flex a-c">
      <img :src="storeDetailInfo.storeLogo" alt="" />
      <span>{{ storeDetailInfo.storeName }}</span>
    </div>
    <div class="flex a-c j-c-s-a">
      <div class="flex a-c j-c-s-a cSellscGoods">
        <p class="flex flex-column">
          <span>{{ storeDetailInfo.cSells | fotmatSells }}</span>
          <span>总销量</span>
        </p>
        <p class="flex flex-column a-c cGoods">
          <span>{{ storeDetailInfo.cGoods }}</span>
          <span>全部宝贝</span>
        </p>
      </div>

      <div class="shuxian"></div>

      <div class="store-score">
        <table>
          <tr v-for="(item, index) in storeDetailInfo.score" :key="index">
            <td>{{ item.name }}：</td>
            <td>{{ item.score }}</td>
            &nbsp; &nbsp;
            <td class="betterG" v-if="item.isBetter">高</td>
            <td class="betterD" v-else>低</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="intoStoreLink">
      <a href="https://m.jd.com/">进店逛逛</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    storeDetailInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    fotmatSells(val) {
      if (val <= 9999) return val;
      else {
        let newValue = (val / 10000).toFixed(2);
        return newValue + "万";
      }
    },
  },
};
</script>

<style>
.shuxian {
  width: 3px;
  height: 55px;
  border-radius: 1px;
  background-color: rgb(225, 230, 230);
}
.intoStoreLink {
  width: 150px;
  height: 30px;
  line-height: 30px;
  background-color: rgb(224, 222, 222);
  position: relative;
  left: 50%;
  text-align: center;
  transform: translateX(-50%);
  border-radius: 10px;
  margin-bottom: 15px;
}
a {
  color: rgb(105, 105, 105);
}
.store-score table {
  border-spacing: 0px 10px;
}
.store-info {
  color: rgb(105, 105, 105);
  border-bottom: 10px solid rgb(233, 231, 231);
}
.store-score {
  padding: 20px;
  font-size: 14px;
}
.cSellscGoods p:nth-of-type(1) {
  margin-right: 5px;
}
.cSellscGoods p span:nth-of-type(1) {
  margin-bottom: 5px;
}
.cSellscGoods {
  padding: 20px;
  font-size: 14px;
}
.store-name-logo {
  margin-left: 10px;
  margin-top: 10px;
}
.store-name-logo img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid #eee;
}
.store-name-logo span {
  font-size: 18px;
}
.betterG {
  background-color: rgb(218, 70, 70);
  color: white;
}
.betterD {
  background-color: rgb(38, 163, 38);
  color: white;
}
</style>