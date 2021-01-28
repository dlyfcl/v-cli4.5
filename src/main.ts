import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'font-awesome/css/font-awesome.css';
import '@/assets/scss/element-ui.scss';
import axios from 'axios';
import urls from "@/utils/urls";
import * as utils from "@/utils/utils";
import apis from "public/apis/apis.json";
import https from "@/utils/https";
import echarts from 'echarts';
import "echarts/map/js/world.js";
import "echarts/map/js/china.js";
import "echarts-wordcloud/dist/echarts-wordcloud";
import animate from 'animate.css'
import qs from "qs";
Vue.use(animate)
Vue.use(ElementUI);

Vue.config.productionTip = false

Vue.prototype.$axios = axios;
Vue.prototype.$urls = urls;
Vue.prototype.$utils = utils;
Vue.prototype.$apis = apis;
Vue.prototype.$https = https;
Vue.prototype.$echarts = echarts;
Vue.prototype.$qs = qs;


axios.get('./apis/apis.json').then((res: any) => {  // 生产环境
  Vue.prototype.BASE_URL = res.data.BASE_URL;
  store.commit("SAVE_BASE_URL", res.data.BASE_URL);
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})