/**
 * 
 * @param labelledObj 接收到的参数， 检查@param 其label属性是否为string类型
 */
function printLabel(labelledObj: { label: string }) {
  console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);


// 使用接口重写上面函数
interface LabelledValue {
  label: string;
}

function printLabel2(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}

let myObj2 = { size: 10, label: "Size 10 Object" };
printLabel2(myObj);


interface SearchFunc {
  (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
}

mySearch("test", "4");


// 接口的继承
interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;

// 一个接口可以继承多个接口，创建出多个接口的合成接口。
interface PenStroke {
  penWidth: number;
}

interface Square extends Shape, PenStroke {
  sideLength: number;
}

let square2 = <Square>{};
square2.color = "blue";
square2.sideLength = 10;
square2.penWidth = 5.0;
console.log(square2);

// 先前我们提过，接口能够描述JavaScript里丰富的类型。 因为JavaScript其动态灵活的特点，有时你会希望一个对象可以同时具有上面提到的多种类型。
interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}

function getCounter(): Counter {
  let counter = <Counter>function (start: number) { };
  counter.interval = 123;
  counter.reset = function () {
    counter.interval = 111;
  };
  return counter;
}

let c = getCounter();
console.log(c(10), c.interval);

// 接口继承类

class Control {
  private state: any;
}

interface SelectableControl extends Control {
  select(): void;
}

class Button extends Control implements SelectableControl {
  select() { }
}

class TextBox extends Control {
  select() { }
}

// 错误：“Image”类型缺少“state”属性。
// class Image implements SelectableControl {
//   select() { }
// }

// class Location {

// }