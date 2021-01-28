let person = {
  fullName: (city, country) => {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}
let person1 = {
  firstName: "Bill",
  lastName: "Gates"
}
let person2 = {
  firstName: "Steve",
  lastName: "Jobs"
}

console.log(person.fullName.call(person1, "Seatle", "USA")); // Steve Jobs Seatle USA
console.log(person.fullName.apply(person1))  // Bill Gates

// call和apply相比call可以传递参数

Math.max.apply(Math, [1,2,3]);   // 3 可以找出数组中的最大值


// 在 JavaScript 严格模式下，如果 apply() 方法的第一个参数不是对
// 象，则它将成为被调用函数的所有者（对象）。在“非严格”模式下，它成为全局对象。