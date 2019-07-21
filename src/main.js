// 入口文件
import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)

import VueResource from "vue-resource"
Vue.use(VueResource)

import VuePreview from 'vue-preview'
Vue.use(VuePreview)

import "./lib/mui-master/dist/css/mui.min.css"
import "./lib/mui-master/dist/css/icons-extra.css"

import MintUI from 'mint-ui'
Vue.use(MintUI)
import "../node_modules/mint-ui/lib/style.css"
// import { Header,Swipe, SwipeItem, Button  } from 'mint-ui';
// import { Lazyload } from 'mint-ui';
// Vue.use(Lazyload);
// Vue.component(Header.name, Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);


import router from "./router.js"

import App from "./App.vue"
var vm = new Vue({
    el: "#app",
    render: c=>c(App),
    router
})