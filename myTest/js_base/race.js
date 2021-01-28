
function race(promises) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      let promise = promises[i];
      if (!(promise instanceof Promise)) {
        promise = Promise.resolve(promise);
      }
      promise.then(res => {
        return resolve(res);
      }).catch(error => {
        return reject(error);
      })
    }
  })
}
const p1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1)
    }, 2000)
  })
};
const p2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2)
    }, 1000)
  })
}
race([p1(), p2()]).then(res => {
  console.log("res", res) //2
})
