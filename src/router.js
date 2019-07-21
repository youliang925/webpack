import VueRouter from 'vue-router'

import homecomtainer from "./component/tabbar/homecomtainer.vue"
import membercomtainer from "./component/tabbar/membercomtainer.vue"
import shopcarcomtainer from "./component/tabbar/shopcarcomtainer.vue"
import searchcomtainer from "./component/tabbar/searchcomtainer.vue"

import newlist from "./component/news/newList.vue"
import newInfo from "./component/news/newInfo.vue"

import photoslist from "./component/photo/photoList.vue"
import photoInfo from "./component/photo/photoInfo.vue"

import goodsList from "./component/goodsList/goodsList.vue"
// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    {path: "/home",component: homecomtainer},
    {path: "/member",component: membercomtainer},
    {path: "/shopcar",component: shopcarcomtainer},
    {path: "/search",component: searchcomtainer},
    {path: "/home/news",component: newlist},
    {path: "/home/newsInfo/:id",component: newInfo},
    {path: "/home/photos", component: photoslist},
    {path: "/home/photoInfo/:id",component: photoInfo},
    {path: "/home/goodsList", component: goodsList}
  ],
  linkActiveClass: 'mui-active'

})

// 把路由对象暴露出去
export default router