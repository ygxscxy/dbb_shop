import Vue from 'vue'
import App from './App.vue'
import router from "./router/index"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)

import store from "./store/index"

// 创建事件总线
Vue.prototype.$bus = new Vue()

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')