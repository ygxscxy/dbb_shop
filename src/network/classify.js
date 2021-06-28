import request from "./request";


// 获取商品分类名称
export function getClassifyName() {
  return request({
    url: "/category"
  })
}

export class ClassifyName {
  constructor(data) {
    this.list = data.data.data.category.list;
  }
}

// 商品分类对应的商品展示
export function getClassifyGoods(maitKey) {
  return request({
    url: "/subcategory",
    params: {
      maitKey
    }
  })
}

export class ClassifyGoods {
  constructor(data) {
    this.img = data.data.list
  }
}







