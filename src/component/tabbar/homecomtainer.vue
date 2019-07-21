<template>
    <div>
        <mt-swipe :auto="4000" class="mt-swipe">
            <mt-swipe-item v-for="item in LuoBoList.message" :key="item.img">
                <img :src="item.img" alt="">
            </mt-swipe-item>
        </mt-swipe>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <router-link to="/home/news" class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu1.png" alt="">
                    <div class="mui-media-body">新闻列表</div></a></router-link>
            <router-link to="/home/photos" class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu2.png" alt="">
                    <div class="mui-media-body">图片分享</div></a></router-link>
            <router-link to="/home/goodsList" class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu3.png" alt="">
                    <div class="mui-media-body">商品购买</div></a></router-link>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu4.png" alt="">
                    <div class="mui-media-body">location</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu5.png" alt="">
                    <div class="mui-media-body">Search</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu6.png" alt="">
                    <div class="mui-media-body">Phone</div></a></li>
        </ul> 
    </div>
</template>
<script>

export default {
    data() {
        return {
            LuoBoList: []
            }
    },
    created() {
        this.getLunBoData()
    },
    methods: {
        getLunBoData() {
            this.$http.get("http://www.liulongbin.top:3005/api/getlunbo")
            .then( result=> {
                this.LuoBoList = result.body
                
            })
        }
    },
}
</script>
<style lang="scss" scoped>
    .mt-swipe {
        height: 200px;  
        img {
            width: 100%;
            height: 100%;
        }
    }
    .mui-grid-view {
        background-color: #fff;
        .mui-table-view-cell {
            border: 0;
        }
        img {
            width: 60px;
            width: 60px;
        }
    }
</style>
