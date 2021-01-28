// 声明全局的 window ，不然使用 window.XX 时会报错
declare var document: Document;

declare module "element-ui/lib/transitions/collapse-transition";
declare module "element-ui/lib/locale"
declare module "element-ui/lib/locale/lang/zh-CN"
declare module "element-ui/lib/locale/lang/en"
declare module "element-ui";
declare module "echarts";
declare module "animate.css";
declare module "qs";
declare module "*.scss" {
  const value: any;
  export default value;
}

declare module "*.json" {
  const value: any;
  export default value;
}
