<template>
  <div class="toast" v-show="isShow">
    <div>{{ msg }}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  /* props: {
    msg: {
      type: String,
      default: "",
    },
    isShow: {
      type: Boolean,
      default: true,
    },
  }, */
  data() {
    return {
      msg: "",
      isShow: false,
    };
  },

  methods: {
    show(msg, timeout = 1500) {
      this.isShow = true;
      this.msg = msg;
      console.log("=====");
      setTimeout(() => {
        this.isShow = false;
        this.msg = "";
      }, timeout);
    },
  },
};
</script>

<style>
.toast {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -70%);
  text-align: center;
  line-height: 30px;
  padding: 15px;
  color: white;
  background-color: rgb(0, 0, 0, 0.8);
  z-index: 999;
}
</style>