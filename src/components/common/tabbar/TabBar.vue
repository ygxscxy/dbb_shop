<template>
  <div class="tabbar flex j-c-s-a">
    <slot></slot>
  </div>
</template> 

<script>
export default {};
</script>

<style>
.tabbar {
  height: 49px;
  background-color: rgb(223, 220, 220);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 -1px 1px rgba(223, 220, 220, 0.8);
}
.tabbar img {
  width: 20px;
  height: 20px;
  margin-top: 5px;
  /* 消除图片多出的空隙 */
  /* vertical-align: middle; */
}
</style>