<template>
  <div v-if="commentInfo.length !== 0" class="user-comment">
    <div class="comment-title">
      <span>用户评价</span>
      <span>更多</span>
    </div>
    <div v-if="commentInfo[0].user != undefined">
      <div class="user-icon-name flex a-c">
        <img :src="commentInfo[0].user.avatar" alt="" />
        <span>{{ commentInfo[0].user.uname }}</span>
      </div>
      <div class="comment-content">
        <p>{{ commentInfo[0].content }}</p>
      </div>
      <div class="other-info">
        <p>
          <span>{{ commentInfo[0].created | formatDate("yyyy-mm-dd") }}</span>
          &nbsp; &nbsp;
          <span>{{ commentInfo[0].style }}</span>
        </p>
      </div>
    </div>
    <div
      class="user-show-goods"
      v-if="commentInfo[0].images && commentInfo[0].images != 0"
    >
      <img v-for="item in commentInfo[0].images" :src="item" alt="" />
    </div>
  </div>
</template>

<script>
import { formatDateChuo } from "common/utils.js";
export default {
  props: {
    commentInfo: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  methods: {},

  filters: {
    formatDate(val, format) {
      let newVal = formatDateChuo(val, format);
      return newVal;
    },
  },
};
</script>

<style>
.user-comment {
  border-bottom: 5px solid rgb(237, 238, 237);
}
.comment-title {
  height: 40px;
  line-height: 40px;
  border-top: 5px solid rgb(237, 238, 237);
  border-bottom: 5px solid rgb(237, 238, 237);
  margin-top: 15px;
  padding: 5px;
}
.comment-title span:nth-of-type(2) {
  float: right;
}
.user-icon-name {
  padding: 10px;
}
.user-icon-name img {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin-right: 10px;
}

.comment-content {
  font-size: 14px;
  color: rgb(107, 107, 107);
  padding: 10px 10px 0px 20px;
}
.other-info p {
  height: 40px;
  line-height: 40px;
  font-size: 12px;
  color: rgb(148, 147, 147);
  padding: 0 20px;
}
.user-show-goods img {
  width: 80px;
  height: 80px;
  padding-left: 20px;
  margin-bottom: 10px;
}
</style>