export default {

  // mutaions每一个方法尽量完成的事情单一点, 此时的setBuyCar就完成了两件事，不单一
  // 可以将一些控制逻辑的代码也放入到action中
  /*  setBuyCar(store, payload) {
     if (store.buyCars.length == 0) {
       payload.buyCar.count += 1
       store.buyCars.push(payload.buyCar)
     } else {
       for (let item of store.buyCars) {
         if (item.iid == payload.buyCar.iid) {
           item.count += 1
         } else {
           store.buyCars.push(payload.buyCar)
         }
       }
     }
   }, */
  setBuyCar(state, payload) {
    // 给添加到购物车的商品添加一个属性,用于标识购物车中的商品是否被选中
    payload.isGoodsActive = true
    state.buyCars.push(payload)
  },
  // 加入购物车的数量
  addCount(state, payload) {
    payload.count += 1
  },
  // 减前购物车数量
  subCount(state, payload) {

  },

  // 修改是否选中
  alterIsActive(state, payload) {
    let buyCar = state.buyCars.find((val) => {
      return val.iid == payload.iid
    })
    buyCar.isGoodsActive = !buyCar.isGoodsActive
    console.log(state.buyCars);
  },

  // 全选与反全选
  allSelectGoods(state, payload) {
    if (payload) {
      let buyCars = state.buyCars.map((val) => {
        val.isGoodsActive = true
        return val
      })
      state.buyCars = buyCars
    } else {
      let buyCars = state.buyCars.map((val) => {
        val.isGoodsActive = false
        return val
      })
      state.buyCars = buyCars
    }
  },


  deleteBuyCar(store, payload) {

  }

}