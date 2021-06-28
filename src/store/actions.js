
// 可以将一些控制逻辑的代码也放入到action中
//但是操作的state的代码不能出现再action中，需要写在mution中，在action中通过context.commit("调用mution中的方法")
const actions = {
  /* setBuyCar(context, payload) {
    if (context.rootState.buyCars.length == 0) {
      payload.buyCar.count += 1
      // store.buyCars.push(payload.buyCar)
      context.commit("setBuyCar", payload.buyCar)
    } else {
      for (let item of context.rootState.buyCars) {
        if (item.iid == payload.buyCar.iid) {
          context.commit("addCount", item)
        } 
      }
    }
  } */
  // 添加商品到购物车
  setBuyCar(context, payload) {
    // 如果在vuex中完成了某个操作，想让外界知道，就可以使用Promise将结果返回出去，通过dispatch函数.then进行接收
    return new Promise((resolve, reject) => {
      if (context.rootState.buyCars.length == 0) {
        resolve("添加购物车成功~")
        context.commit("setBuyCar", payload.buyCar)
      } else {
        let newArr = context.rootState.buyCars.filter((val) => {
          if (val.iid == payload.buyCar.iid) {
            return true
          }
        })
        if (newArr.length != 0) {
          resolve("此商品已存在购物车,商品数量+1~")
          context.commit("addCount", newArr[0])

        } else {
          resolve("添加购物车成功~")
          context.commit("setBuyCar", payload.buyCar)
        }
      }
    })

  }

}
export default actions
