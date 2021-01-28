// 静态类型
// 在TS中指的类型一般是指的静态类型

//定义b的时候b存储的类型是数字类型，在未来b存储的类型也只能是数字类型
let b: number = 123;
b = 1234;

// TS定义函数三种方法
function hello() { }
const hello1 = function () { };
const hello2 = () => { };

// 函数里面的参数

//明确函数的参数是number，与结果也是number
function add(first: number, second: number): number {
  return first + second;
}
//void则是希望这个函数没有返回值
function sayHello(): void {
  console.log("123");
}

//永远执行不完的意思
function err(): never {
  while (true) { }
  //后面的代码是无法执行的
}

//如果传入的参数是对象，则传入的属性类型
function add1({ first, second }: { first: number; second: number }): number {
  return first + second;
}
const total = add1({ first: 1, second: 1 });

// 基础类型：Boolean,number,string void unfined symbol null
// 对象类型：{} class function []

// 数组与元组
// 数组

//表示每一个数组中的元素只能是number类型
const numberArr: number[] = [1, 2, 3];

//这样定义表示arr是数组，但数组元素可以是number类型也可以是string类型
const arr: (number | string)[] = ["1", 2, 3];

//表示数组里面的元素的数据类型必须为undefinded
const undefineArr: undefined[] = [undefined];

//表示数组中的元素是对象，但每一个对象里面只能有name属性，属性的类型是string类型
const objectArr: { name: string }[] = [{
  name: 'lsl'
}]

//表示数组中的元素是对象，但每一个对象里面只能有name属性与age类型，属性的类型是string类型
const objectArr1: { name: string, age: number }[] = [{
  name: 'lsl',
  age: 28
}]

//借用类型别名来定义数组元素是对象的数组
type User = { name: string, age: number }


//定义的数组表示每一个元素必须是User的数据类型，在数组里面的元素不可以有不同于User定义的数据类型
const objectArr2: User[] = [{ name: 'lsl', age: 28 }]


// 元组

//teacherInfo的类型是元组，元组的第一项是String类型，第二项也是string类型，第三项是number类型，数组的长度与数据类型是固定的
const teacherInfo: [string, string, number] = ['name1', 'male', 18]

//csv
const teacherList: [string, string, number][] = [
  ['name2', 'male', 18],
  ['name3', 'male', 18],
  ['name4', 'male', 18]
]
