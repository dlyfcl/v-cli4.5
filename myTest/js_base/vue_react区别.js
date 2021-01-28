// 4、Vue 和 React设计模式对比
// Vue的设计模式
// Vue 的data必须事先声明属性，在这些状态发生变化的时候，菜户触发re-render。因为在组件挂载的时候，Vue会遍历data的所有属性，利用Object.defineProperty()定义getter和setter。

// React的设计模式
// React主要是依靠Redux来管理数据，React只是View层的js库。React中的state是不可直接修改的，它是通过setState来异步地改变状态。React的diff算法会合并间隔时间很短的状态变化，从而提高页面的性能。

// Vue数据模式
// Vue的响应式主要是 发布订阅模式，使用Object.defineProperty 定义getter setter，从而实现组件响应数据变化的MVVM模式。