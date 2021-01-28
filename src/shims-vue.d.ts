/*
 * @Author: hyq
 * @Date: 2020-09-28 13:51:13
 * @LastEditTime: 2020-09-28 14:03:07
 */
import Vue from "vue";
import VueRouter, { Route } from "vue-router";

declare module '*.vue' {
  export default Vue
}

declare module "vue/types/vue" {
  interface Vue {
    $router: VueRouter;
    $route: Route;
    $https: any;
    $urls: any;
    $utils: any;
    $apis: any;
    $axios: any;
    $echarts: any;
    BASE_URL: string;
    $qs: any;
  }
}