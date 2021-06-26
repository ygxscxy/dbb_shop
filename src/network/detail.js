import request from "./request"

export function getDetailData(iid) {
  return request({
    url: "/detail",
    params: {
      iid
    }
  })
}

// 用于整合数据，给一个组件
export class GoodsDetailInfo {
  constructor(goodsDetailItemInfo, goodsDetaiiColumns, goodsDetailServices) {
    // 标题
    this.title = goodsDetailItemInfo.title
    this.discountBgColor = goodsDetailItemInfo.discountBgColor
    this.discountDesc = goodsDetailItemInfo.discountDesc
    this.oldPrice = goodsDetailItemInfo.oldPrice
    this.price = goodsDetailItemInfo.price
    this.columns = goodsDetaiiColumns.columns
    this.services = goodsDetailServices.services
  }
}

export class StoreDetailInfo {
  constructor(shopInfo) {
    this.storeName = shopInfo.name
    this.storeLogo = shopInfo.shopLogo
    this.cSells = shopInfo.cSells
    this.cGoods = shopInfo.cGoods
    this.score = shopInfo.score
  }
}


export class GoodsParamsInfo {
  constructor(info, rule) {
    this.info = info.set//数组
    this.rule = rule.tables//
    this.ruleDesc = rule.desc
  }
}

// 商品详情页的推荐商品数据展示
export function getGoodsRecommend() {
  return request({
    url: "/recommend"
  })
}