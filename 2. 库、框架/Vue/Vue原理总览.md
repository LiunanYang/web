 1. 通过 document.createDocumentFrament()方法创建虚拟 DOM 树
 2. 一旦被检测到数据改变，会通过 Object.defineProperty 定义的数据拦截，截取到数据的变化
 3. 截取到数据变化，通过订阅-开发者模式，触发 watcher(观察者)，从而改变虚拟 DOM 中的具体数据
 4. 通过更新虚拟 DOM 的元素值，改变最后渲染 DOM 树的值，完成双向绑定

 