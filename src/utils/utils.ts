import { Message } from 'element-ui';

//获取cookie、
export function setCookie(name: string, value: string, day: number) {
  const Days = day || 365; //这里设置天数
  const exp = new Date();
  exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
  document.cookie = name + "=" + escape(value) + ";expires=" + exp.toUTCString();
}

export function getCookie(name: string) {
  let arr: any; const reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if (arr == document.cookie.match(reg)) {
    return unescape(arr[2]);
  } else {
    return null;
  }
}

export function clearAllCookie() {
  // const keys = document.cookie.match(/[^ =;]+(?=\=)/g);
  const keys = document.cookie.match(/[^ =;]+(?=)/g);
  if (keys) {
    for (let i = keys.length; i--;)
      document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
  }
}

//获取页面顶部被卷起来的高度
export function getScrollTop() {
  return Math.max(
    document.body.scrollTop,
    document.documentElement.scrollTop
  );
}
//获取页面文档的总高度
export function getDocumentHeight() {
  //现代浏览器（IE9+和其他浏览器）和IE8的document.body.scrollHeight和document.documentElement.scrollHeight都可以
  return Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight
  );
}
//页面浏览器视口的高度
export function getWindowHeight() {
  return document.compatMode === "CSS1Compat"
    ? document.documentElement.clientHeight
    : document.body.clientHeight;
}

/**
 * 获取时间
 * @param {*} day 0:当前时间 -1：过去一天 -30：过去一个月
 */
export function getDay(day: number) {
  let today = new Date();
  let targetday_milliseconds = today.getTime() + 1000 * 60 * 60 * 24 * day;
  today.setTime(targetday_milliseconds);
  return formatDate(today, "0")
}

/**
 * 时间格式化包含年月日时分秒
 * @param time 传入的时间
 * @param type 需要转化的格式（是否包含时分秒 0-包含 1-不包含 ）
 */
export function formatDate(time: any, type: string) {
  if (time != "" && time != null) {
    let date = new Date(time);
    let o: any = {
      "M+": date.getMonth() + 1, //月份
      "d+": date.getDate(), //日 
      "h+": date.getHours(), //小时
      "m+": date.getMinutes(), //分
      "s+": date.getSeconds(), //秒
      "q+": Math.floor((date.getMonth() + 3) / 3), //季度
      "S": date.getMilliseconds() //毫秒
    };
    let fmt = "yyyy-MM-dd hh:mm:ss"
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (let k in o)
      if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    let newTime = fmt;
    let newRime2 = fmt.split(" ")[0];
    if (type === "0") {
      //时间格式化包含年月日时分秒
      return newTime;
    } else if (type === "1") {
      //时间格式化只有年月日不含时分秒
      return newRime2;
    }
  }
}

// 排序
export function compare(property: any, type: string) {
  return function (a: Array<any>, b: Array<any>) {
    let value1;
    let value2;
    if (property === "time") {
      value1 = new Date(a[property]).getTime();
      value2 = new Date(b[property]).getTime();
    } else {
      value1 = a[property];
      value2 = b[property];
    }
    if (type === "0") {
      // 从小到大排序 
      return value1 - value2;
    } else if (type === "1") {
      // 从大到小排序 
      return value2 - value1;
    }
  }
}

export function getArray(data: Array<any>, preventEvent: any) {
  let departmenMap: any = {};
  data.forEach(item => {
    departmenMap[item.id] = item;
  });
  let val: Array<any> = [];
  data.forEach(item => {
    let parent = departmenMap[item[preventEvent]];
    if (parent) {
      (parent.children || (parent.children = [])).push(item);
    } else {
      val.push(item);
    }
  });
  return val;
}


/**
 * 按指定长度分段字符串
 * @param str 传入的字符串(非空)
 * @param num 指定长度(正整数)
 * @return Array(字符串数组)
 */
export function fixedLengthFormatString(str: string, num: number) {
  if (str == null || str == undefined) return null;
  if (!(/^[0-9]*[1-9][0-9]*$/.test(`${num}`))) return null;
  var array = new Array();
  var len = str.length;
  for (var i = 0; i < (len / num); i++) {
    if ((i + 1) * num > len) {
      array.push(str.substring(i * num, len));
    } else {
      array.push(str.substring(i * num, (i + 1) * num));
    }
  }
  return array;
}

// Element ui的消息提示
export function Msg(msg: any, title: string) {
  Message({
    type: msg,
    message: title,
    duration: 2000,
    offset: 120
  })
}

/**
   * 获取 @param page 天前的时间
   */
export function getLastDay(page: number) {
  let date: any = new Date();
  date.setDate(date.getDate() - page);
  return date;
}

/**
   * 获取 @param month 天前的时间
   */
export function getLastMonth(month: number) {
  let date: any = new Date();
  date.setMonth(date.getMonth() - month);
  return date;
}

/**
 * 获取 @param year 年前的时间
 */
export function getLastYear(year: number) {
  let date: any = new Date();
  date.setFullYear(date.getFullYear() - year);
  return date;
}

// 获取随机颜色
/**
 * 获取随机颜色
 * @return Array(r,g,b)
 */
export function getColor() {
  let r = Math.round(Math.random() * 255),
    g = Math.round(Math.random() * 255),
    b = Math.round(Math.random() * 255);
  return `rgb(${r},${g},${b})`
}

// 生成uuid
export function guid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (
    c
  ) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}


// 将数组转成树结构
export function concatArr(arr: Array<any>, label: string) {
  const s = new Set();
  //添加值（Set可以去掉重复数据
  arr.forEach(item => s.add(item[label]));
  let newData: Array<any> = Array.from({
    length: s.size
  }, () => []) //创建指定长度数组并添值
  arr.forEach(item => {
    let index = [...s].indexOf(item[label]); //找到指定下标
    if (!newData[index].children) {
      newData[index] = { name: item[label], children: new Array }
    }
    // delete item.timeName;
    newData[index].children.push(item) //添加数据
  })
  return newData;
}


/**
 * 显示base64地址的图片
 * @param src 图片的base64地址
 */
export function showBase64(src: string) {
  return "data:image/jpeg;base64," + src;
}

/**
 * 根据数组对象中的某个属性对数组进行去重
 * @param arr 需要去重的对象数组
 * @param type 去重的属性
 */
export function setArrayObj(arr: Array<any>, type: string) {
  let obj: any = {};
  arr = arr.reduce((cur, next) => {
    obj[next[type]] ? null : obj[next[type]] = true && cur.push(next);
    return cur;
  }, []);
  return arr;
}

export function getCount(arr: Array<number>) {
  let num: number = arr.reduce((acc:any, cur:any) => {  // acc 代表累加器 cur代表数组当前处理的值
    return parseInt(acc) + parseInt(cur)
  }, 0)
  return num;
}