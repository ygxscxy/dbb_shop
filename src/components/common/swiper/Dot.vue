<template>
  <div class="swiper-dot">
    <ul ref="ulDot" id="ul"></ul>
  </div>
</template>

<script>
export default {
  mounted() {
    let ul = this.$refs.ulDot;
    let liLength = this.$store.state.swiperChildrenLength;
    for (let i = 0; i < liLength - 2; i++) {
      let li = document.createElement("li");
      ul.append(li);
    }
    this.$store.commit("setHeigh", this.setHeigh);
    this.$refs.ulDot.children[0].classList.add("active");
  },
  methods: {
    setHeigh() {
      let liLength = this.$store.state.swiperChildrenLength;
      for (let i = 0; i < liLength - 2; i++) {
        if (this.$store.state.index <= 0) {
          this.$refs.ulDot.children[0].classList.remove("active");
          this.$refs.ulDot.children[
            this.$store.state.swiperChildrenLength - 3
          ].classList.add("active");
        } else if (
          this.$store.state.index >=
          this.$store.state.swiperChildrenLength - 1
        ) {
          this.$refs.ulDot.children[
            this.$store.state.swiperChildrenLength - 3
          ].classList.remove("active");
          this.$refs.ulDot.children[0].classList.add("active");
        } else {
          if (i == this.$store.state.index - 1) {
            this.$refs.ulDot.children[i].classList.add("active");
          } else {
            this.$refs.ulDot.children[i].classList.remove("active");
          }
        }
      }
    },
  },
};
</script>

<style >
.swiper-dot ul {
  position: absolute;
  top: 165px;
  left: 50%;
  transform: translateX(-50%);
}
.swiper-dot ul li {
  list-style: none;
  display: inline-block;
  width: 10px;
  height: 10px;
  margin-right: 5px;
  border-radius: 50%;
  background-color: red;
}

.swiper-dot .active {
  background-color: white;
}
</style>