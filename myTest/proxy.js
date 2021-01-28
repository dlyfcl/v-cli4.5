// Proxy 对象的所有用法，都是上面这种形式，不同的只是handler参数的写法。
// 其中，new Proxy()表示生成一个Proxy实例，target参数表示所要拦截的目标对象，
// handler参数也是一个对象，用来定制拦截行为。

// let proxy0 = new Proxy(target, handler);
// 下面是另一个拦截读取属性行为的例子。

let proxy1 = new Proxy({}, {
  get: (target, property) => {
    return 35;
  }
});

proxy1.time; // 35
proxy1.name; // 35
proxy1.title; // 35


var person = { name: "张三", title: "test" };

var proxy2 = new Proxy(person, {
  get: (target, property) => {
    console.log(target, property);
    if (property in target) {
      return target[property];
    } else {
      throw new ReferenceError("Property \"" + property + "\" does not exist.");
    }
  }
});

proxy2.name // "张三"
proxy2.age // 抛出一个错误