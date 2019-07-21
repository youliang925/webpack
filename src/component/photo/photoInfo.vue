<template>
  <div>
    <div v-for="item in info" :key="item.id">
      <h3>{{item.title}}</h3>
      <p>
        <span>发表时间：{{item.add_time}}</span>
        <span>点击：{{item.click}}</span>
      </p>

      <div class="thums-pic mui-clearfix">
        <vue-preview :slides="imgList"></vue-preview>
      </div>

      <div class="content" v-html="item.content"></div>
      <comment-box :id="id"></comment-box>
    </div>
  </div>
</template>

<script>
import comment from "../suncomponents/comment.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      info: [],
      imgList: []
    };
  },
  created() {
    this.getPhotoInfo();
    this.getImg();
  },
  methods: {
    getPhotoInfo() {
      this.$http
        .get("http://www.liulongbin.top:3005/api/getimageInfo/" + this.id)
        .then(res => {
          // console.log(res);
          if (res.body.status == 0) {
            this.info = res.body.message;
          }
        });
    },
    getImg() {
      this.$http
        .get("http://www.liulongbin.top:3005/api/getthumimages/" + this.id)
        .then(res => {
          // console.log(res);
          if (res.body.status == 0) {
            this.imgList = res.body.message;
            this.imgList.forEach(item => {
              item.w = 600;
              item.h = 400;
              item.msrc = item.src;
            });
          }
        });
    }
  },
  components: {
    "comment-box": comment
  }
};
</script>

<style>

.thums-pic {
  width: 92%;
  margin: 20px auto;
}

.thums-pic figure {
  float: left;
  width: 100px;
  margin: 0;
  margin-left: 10px;
}

.thums-pic figure img {
  width: 100%;
}
</style>
