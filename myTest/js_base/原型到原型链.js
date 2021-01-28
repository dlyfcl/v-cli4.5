// 使用构造函数创建一个对象：
function Person() {

}
let person = new Person();
person.name = 'test';
console.log(person.name) // test

// __proto__
// 这是每一个JavaScript对象(除了 null )都具有的一个属性，叫__proto__，这个属性会指向该对象的原型。
console.log(person.__proto__ === Person.prototype, Person.prototype); // true


// prototype
// 每个函数都有一个 prototype 属性

class Test {
  constructor() {
  }
}
// 虽然写在注释里，但是你要注意：
// prototype是函数才会有的属性
Test.prototype.name = 'test';
let person1 = new Test();
let person2 = new Test();
console.log(person1.name) // test
console.log(person2.name) // test


class Name {
  constructor(props) {
    this.age = props.age || 0;
    this.name = props.name || 'unnamed';
  }
  greeting() {
    console.log('Hi, this is ' + this.name);
  }
}

const tommy = new Name({name: 'Tommy'});
tommy.greeting();  // Hi, this is Tommy

