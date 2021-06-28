import Toast from "./Toast.vue";

// 自定义插件...
const toast = {}

// 插件需要调用install方法
toast.install = (Vue, paras) => {
  /* 通过插件， */
  // 组件构造器
  const ToastContrustor = Vue.extend(Toast)
  // 通过组件构造器new出来一个组件对象
  const toast = new ToastContrustor()
  // 将组件构造器手动挂载到div中
  toast.$mount(document.createElement("div"))
  // 组件对象的根元素
  document.body.appendChild(toast.$el)

  // 给Vue实例this上挂载一个组件对象，一旦执行this.$toast组件就会被挂载到页面
  Vue.prototype.$toast = toast


}

export default toast