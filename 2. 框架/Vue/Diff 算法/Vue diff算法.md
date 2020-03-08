- 产生原因：
渲染真实DOM开销很大，有时候修改了某个数据，如果直接渲染到DOM上会引起整个dom 树的重绘和重排。diff 可以只更新那一小块dom而不要更新整个 dom。

- 原理：先根据真实 DOM 生成一颗 virtual DOM，当 virtual DOM 某个节点改变后会生成一个新的 Vnode，然后 Vnode 和 oldVnode 作对比(同层比较)，发现有不一样的地方就直接修改在真实的 DOM 上，然后使 oldVnode 的值为 Vnode。

### virtual DOM 和真实DOM的区别

virtual DOM 就是将真实的 DOM 的数据抽取出来，以对象的形式模拟树形结构
```
<div id="app">
    哈哈
    <p>123</p>
</div>
```
```
var vNode = {
    tag: 'div',
    props: {id: 'app'},
    children: [
        {
            tag: 'p',
            props: {},
            children: [],
            context: '123'
        }
    ],
    context: '哈哈'
}

```