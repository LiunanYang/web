 1. 通过 document.createDocumentFrament()方法创建虚拟 DOM 树
 2. 一旦被检测到数据改变，会通过 Object.defineProperty 定义的数据拦截，截取到数据的变化
 3. 截取到数据变化，通过订阅-开发者模式，触发 watcher(观察者)，从而改变虚拟 DOM 中的具体数据
 4. 通过更新虚拟 DOM 的元素值，改变最后渲染 DOM 树的值，完成双向绑定

# 双向绑定的原理
Vue内部通过Object.defineProperty方法属性拦截的方式，把data对象里每个数据的读写转化成getter/setter，当数据变化时通知视图更新。

# 响应式原理：
每个组件实例都对应一个 watcher 实例，它会在组件渲染的过程中把“接触”过的数据 property 记录为依赖。之后当依赖项的 setter 触发时，会通知 watcher，从而使它关联的组件重新渲染。
