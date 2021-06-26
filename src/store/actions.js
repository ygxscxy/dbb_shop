
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
  setBuyCar(context, payload) {
    if (context.rootState.buyCars.length == 0) {
      context.commit("setBuyCar", payload.buyCar)
    } else {
      let newArr = context.rootState.buyCars.filter((val) => {
        if (val.iid == payload.buyCar.iid) {
          return true
        }
      })
      if (newArr.length != 0) {
        context.commit("addCount", newArr[0])
      } else {
        context.commit("setBuyCar", payload.buyCar)
      }
    }
  }

}
export default actions
