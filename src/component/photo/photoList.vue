<template>
  <div>
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            v-for="item in titArr"
            :key="item.id"
            :class="['mui-control-item',item.id==0? 'mui-active':'']"
            href="#item1mobile"
            data-wid="tab-top-subpage-1.html"
          >{{item.title}}</a>
        </div>
      </div>
    </div>

    <ul class="photoList">
      <router-link tag="li" v-for="item in list" :key="item.id" :to="'/home/photoInfo/'+item.id">
        <img v-lazy="item.img_url" />
        <div class="info">
          <h1 class="info-title">{{item.title}}</h1>
          <div class="info-body">{{item.zhaiyao}}</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
import mui from "../../lib/mui-master/dist/js/mui.js";

export default {
  data() {
    return {
      titArr: [],
      list: []
    };
  },
  created() {
    this.getAllCategory();
    this.getPhotoListByCategory(0);
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  methods: {
    getAllCategory() {
      this.$http
        .get("http://www.liulongbin.top:3005/api/getimgcategory")
        .then(res => {
          if (res.body.status == 0) {
            res.body.message.unshift({ title: "全部", id: 0 });
            this.titArr = res.body.message;
          }
        });
    },
    getPhotoListByCategory(cateId){
      this.$http
      .get("http://www.liulongbin.top:3005/api/getimages/"+cateId)
      .then(res=> {
        // console.log(res);
        
        if(res.body.status == 0){
          this.list = res.body.message
        }
      })
    }
  }
};
</script>
<style scoped>
* {
  touch-action: pan-y;
}
img[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
.photoList {
  margin: 0;
  padding: 0;
  list-style: none;
}
.photoList li{
  background-color: #ccc;
  text-align: center;
}
img{
  width:100%;
  vertical-align: middle;
}
.info {
      color: white;
      text-align: left;
      position: absolute;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.4);
      max-height: 84px;
}
li {
    background-color: #ccc;
    text-align: center;
    margin-bottom: 10px;
    box-shadow: 0 0 9px #999;
    position: relative;
}
.info-title {
  font-size: 14px;
}
.info-body {
  font-size: 13px;
}
</style>
