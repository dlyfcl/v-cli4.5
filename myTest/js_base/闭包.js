// ECMAScript中，闭包指的是：

// 从理论角度：所有的函数。因为它们都在创建的时候就将
// 上层上下文的数据保存起来了。哪怕是简单的全局变量也是
// 如此，因为函数中访问全局变量就相当于是在访问自由变量，这个
// 时候使用最外层的作用域。
// 从实践角度：以下函数才算是闭包：
// 即使创建它的上下文已经销毁，它仍然存在（比如，内部函数从父函数中返回）
// 在代码中引用了自由变量


var scope = "global scope";
function checkscope() {
  var scope = "local scope";
  function f() {
    return scope;
  }
  return f;
}

var foo = checkscope();
foo();