async function async1(params) {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}

async function async2(params) {
  console.log("async2");
}

console.log("script start");

setTimeout(() => {
  console.log("setTimeout");
}, 0)

async1();

new Promise(function(resolve) {
  console.log("promise1");
  resolve();
}).then(function() {
  console.log("promise2");
})

console.log("script end");



// script start
// async1 start
// async2
// promise1
// script end
// async1 end
// promise2
// setTimeout


// setTimeout 会在最后执行
// await 后面的语句会在promise执行完毕之后执行
// promise 的resolve之后跳出promise执行后面的语句，执行完毕之后执行 .then 的内容