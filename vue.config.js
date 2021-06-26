module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        // 默认配置了src的别名：@
        "assets": "@/assets",
        "common": "@/common",
        "network": "@/network",
        "views": "@/views",
        "components": "@/components",
        "mixins": "@/mixins"
      }
    }
  }
}