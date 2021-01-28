class Test {
  // 字段
  testStr: string;

  // 构造函数 
  constructor(testStr: string) {
    this.testStr = testStr;  // 转化成实例
  }

  // 方法
  testPrint() {
    console.log("myTest:" + this.testStr);
    return "str"
  }
}

const testClass = new Test("hello world")
console.log(testClass);
console.log(testClass.testPrint());