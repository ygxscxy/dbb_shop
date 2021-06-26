import request from "./request"

export function getHomeGoods(type, page) {
  return request({
    url: "/home/data",
    // 传递url参数
    params: {
      type,
      page
    }
  })
}

export function getSwiper() {
  return request({
    url: "/home/multidata"
  })
}

export function getHomeHeaderRequest(config) {
  return request(config)
}
