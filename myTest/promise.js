function runAsync1() {
  var p = new Promise((resolve, reject) => {
    //做一些异步操作
    setTimeout(() => {
      console.log('异步任务1执行完成');
      resolve('随便什么数据1');
    }, 1000);
  });
  return p;
}

function runAsync2() {
  var p = new Promise((resolve, reject) => {
    //做一些异步操作
    setTimeout(() => {
      console.log('异步任务2执行完成');
      resolve('随便什么数据2');
    }, 2000);
  });
  return p;
}

function runAsync3() {
  var p = new Promise((resolve, reject) => {
    //做一些异步操作
    setTimeout(() => {
      console.log('异步任务3执行完成');
      resolve('随便什么数据3');
    }, 2000);
  });
  return p;
}

runAsync1().then(data => {
  console.log(data);
  return runAsync2();
}).then((data) => {
  console.log(data);
  return runAsync3();
}).then((data) => {
  console.log(data);
});