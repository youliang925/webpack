<template>
  <div>
    <ul class="mui-table-view">
      <router-link
        class="mui-table-view-cell mui-media"
        v-for="item in newsList"
        :key="item.id"
        :to="'/home/newsInfo/' + item.id"
      >
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" :src="item.img_url" />
          <div class="mui-media-body">
            <p class="mui-ellipsis">{{item.zhaiyao}}</p>
            <div class="down">
              <span>发表时间：{{ item.add_time }}</span>
              <span>点击：{{item.click}}次</span>
            </div>
          </div>
        </a>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newsList: []
    };
  },
  created() {
    this.getnewsList();
  },
  methods: {
    getnewsList() {
      this.$http
        .get("http://www.liulongbin.top:3005/api/getnewslist")
        .then(result => {
          this.newsList = result.body.message;
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.mui-table-view {
  .mui-media {
    h1 {
      font-size: 14px;
    }
    .down {
      font-size: 12px;
      color: #226aff;
      display: flex;
      justify-content: space-between;
    }
    span {
      font-size: 12px;
    }
  }
}
</style>