// ES5的对象属性名都是字符串，这容易造成属性名的冲突。
// 比如，你使用了一个他人提供的对象，但又想为这
// 个对象添加新的方法（mixin模式），新方法的名字就有可能与现有
// 方法产生冲突。如果有一种机制，保证每个属性的名字都是独一无二
// 的就好了，这样就从根本上防止属性名的冲突。这就是ES6引入Symbol的原因。
let testSymbol = Symbol();
console.log(typeof testSymbol);  // symbol

// Symbol函数可以接受一个字符串作为参数，表示对Symbol实例的描述，主要是为了在控
// 制台显示，或者转为字符串时，比较容易区分。

let s1 = Symbol('foo');
let s2 = Symbol('bar');

console.log(s1, s1.toString(), s2, s2.toString());  
// Symbol(foo) "Symbol(foo)" Symbol(bar) "Symbol(bar)"


// 如果 Symbol 的参数是一个对象，就会调用该对象的 
// toString 方法，将其转为字符串，然后才生成一个 Symbol 值。

const obj = {
  toString() {
    return 'abc';
  }
};
const sym = Symbol(obj);
console.log(sym); // Symbol(abc)

// 由于每一个Symbol值都是不相等的，这意味着Symbol值可以作为标识符，用于
// 对象的属性名，就能保证不会出现同名的属性。这对于一个对象由多个
// 模块构成的情况非常有用，能防止某一个键被不小心改写或覆盖。

let mySymbol = Symbol();
let mySymbol2 = Symbol();

// 第一种写法
let a = {};
a[mySymbol] = 'Hello!';

// 第二种写法
a = {
  ...a,
  [mySymbol2]: 'world'
};

console.log(a[mySymbol], a[mySymbol2]);

var obj = {};

var foos = Symbol("foo");

Object.defineProperty(obj, foos, {
  value: "foobar",
});

console.log(objs);

for (var i in obj) {
  console.log(i); // 无输出
}

Object.getOwnPropertyNames(obj);
// []

Object.getOwnPropertySymbols(obj);
// [Symbol(foo)]


// Reflect.ownKeys方法可以返回所有类型的键名，包括常规键名和 Symbol 键名
let objs = {
  [Symbol('my_key')]: 1,
  enum: 2,
  nonEnum: 3
};

Reflect.ownKeys(objs) //  ["enum", "nonEnum", Symbol(my_key)]


console.log([1, [2, [3]]].flat(Infinity)); // [1, 2, 3] 将多维数组转化为一维数组