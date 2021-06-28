import Vue from 'vue'
import App from './App.vue'
import router from "./router/index"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

import Toast from "components/common/toast/index.js"
// 调用自定义的插件
Vue.use(Toast)

import store from "./store/index"
import VUeLazyLoad from "vue-lazyload"
import FastClick from "fastclick"
// 创建事件总线
Vue.prototype.$bus = new Vue()
Vue.use(VUeLazyLoad)
// 解决移动端300ms延迟问题
FastClick.attach(document.body)


Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')