import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)//安装插件

import mutations from "./mutations"
import actions from "./actions"
import getters from "./getters"

const state = {
  buyCars: [],
}

var store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

//导出vuex 再main中
export default store