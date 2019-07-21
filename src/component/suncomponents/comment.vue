<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr />
    <textarea placeholder="请输入要发表的内容（做多吐槽120字）" maxlength="120" v-model="msg"></textarea>

    <mt-button class="mui-btn mui-btn-primary" size="large" @click="postComent()">发表评论</mt-button>

    <div class="cmt-list">
      <div class="cmt-item" v-for="(item, i) in comments" :key="i">
        <div
          class="cmt-title"
        >第{{ i+1 }}楼&nbsp;&nbsp;用户：{{ item.user_name }}&nbsp;&nbsp;发表时间：{{ item.add_time }}</div>
        <div class="cmt-body">{{ item.content === 'undefined' ? '此用户很懒，嘛都没说': item.content }}</div>
      </div>
    </div>

    <mt-button class="mui-btn mui-btn-danger" size="large" plain @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      pageIndex: 1,
      comments: [],
      msg: ""
    };
  },
  created() {
    this.getComments();
  },
  methods: {
    getComments() {
      this.$http
        .get(
          "http://www.liulongbin.top:3005/api/getcomments/" +
            this.id +
            "?pageindex=" +
            this.pageIndex
        )
        .then(result => {
          if (result.body.status === 0) {
            this.comments = this.comments.concat(result.body.message);
          } else {
            // Toast("获取评论失败！");
          }
        });
    },
    getMore() {
      this.pageIndex++;
      this.getComments();
    },
    postComent() {
      this.$http
        .post("http://www.liulongbin.top:3005/api/postcomment/" + this.id, {
          content: this.msg
        })
        .then(res => {
          console.log(res);
          if(res.status=200){
            let info = {
            user_name: "匿名用户",
              add_time: Date.now(),
              content: this.msg.trim()
            }
            this.comments.unshift(info);
            this.msg = "";
          }
        });
    }
  },
  props: ["id"]
};
</script>

<style lang="scss" scoped>
.cmt-container {
  h3 {
    font-size: 18px;
  }
  textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
  }

  .cmt-list {
    margin: 5px 0;
    .cmt-item {
      font-size: 13px;
      .cmt-title {
        line-height: 30px;
        background-color: #ccc;
      }
      .cmt-body {
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
}
</style>
