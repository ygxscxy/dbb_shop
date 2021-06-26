import Vue from "vue"
import VueRouter from "vue-router"


// 一个路由按钮被多次点击后报错
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch((err) => err);
};


Vue.use(VueRouter)

const classify = () =>
  import("views/classify/Classify.vue")
const goodscar = () =>
  import("views/goodsCar/BuyGoodsCar.vue")
const profile = () =>
  import("views/profile/Profile.vue")
const detail = () => import("views/detail/Detail.vue")


const router = new VueRouter({
  routes: [{
    path: "/home",
    component: () =>
      import("views/home/Home.vue")
  },
  { path: "/classify", component: classify },
  { path: "/goodscar", component: goodscar },
  { path: "/profile", component: profile },
  { path: "/detail", component: detail },
  { path: "/", redirect: "/home" },

  ],
  mode: "history"
})

export default router