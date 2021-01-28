setTimeout(() => {
  console.log(3)
  Promise.resolve().then(() => {
    console.log(2)
  });
});

console.log(1);

new Promise((resolve, reject) => {
  console.log(4)
  resolve(5)
}).then((data) => {
  console.log(data);
})

setTimeout(() => {
  console.log(6);
})
console.log(7);


// 1 4 7 5 3 2 6