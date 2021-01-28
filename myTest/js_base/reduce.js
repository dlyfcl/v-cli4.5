
// reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，
// 最终计算为一个值。
// reduce() 接受四个参数：初始值（或上一次回调函数的返回值），当前元素值，当前索引，调用 reduce() 的数组。

// reduce() 的几个强大用法：

// 数组求和
let arr1 = new Array(0, 1, 2, 3);
let total = arr1.reduce((acc, cur) => {  // acc 代表累加器 cur代表数组当前处理的值
  return acc + cur
}, 0);
console.log(total);   // 6


// 二维数组转为一维数组
let array = [[1, 2], [3, 4], [5, 6]].reduce((acc, cur) => {
  return acc.concat(cur)
}, []);
console.log(array);  // [ 1, 3, 4, 5, 6 ]


// 计算数组中每个元素出现的次数
// 方法一
let names = new Array('tom', 'jim', 'jack', 'tom', 'jack');
const countNames = names.reduce((allNames, name) => {
  if (name in allNames) {
    allNames[name]++;
  }
  else {
    allNames[name] = 1;
  }
  return allNames;
}, {});

console.log(countNames)  // { tom: 2, jim: 1, jack: 2 }



// // 方法二
const arraySum = (arr, val) => arr.reduce((acc, cur) => {
  return cur == val ? acc + 1 : acc + 0
}, 0);

let arr = new Array(0, 1, 3, 0, 2, 0, 2, 3);
console.log(arraySum(arr, 0)) // 数组arr中 0 元素出现的次数为3


