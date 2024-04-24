在JavaScript中，函数也是对象，call、apply、bind就是函数对象的方法

它们可以切换函数执行的上下文环境，也就是改变this指向

[深入理解JavaScript——call、apply、bind三大将](https://zhuanlan.zhihu.com/p/569442894)

相同点：
- 第一个参数是this
  - 指向的对象指定为 null 或 undefined 时会自动替换为指向全局对象
  - 指定值为原始值（数字，字符串，布尔值）的 this 会指向该原始值的自动包装对象

不同点：
- call 有一个或多个参数，实参跟在第一个参数后面`fun.call(o2,1,2)`
- apply 需要将实参封装到一个数组中统一传递，第二个参数是参数数组`fun.apply(o1,[1,2,3])`
- bind 返回一个修改了this指向后的函数

bind的两种传参方式
1. 绑定函数时的参数：
调用bind时，在第一个参数后面，传递参数列表（同call）`foo.bind(null,1)()`
2. 调用绑定函数时的参数：像调用普通函数一样传递参数，这个参数跟在bind方法预设的参数后面 `foo.bind(null,1)(2,3,4)`
---
🌟实现call:
```js
Function.prototype.mycall = function(context = window, ...args) {
  if (this === Function.prototype) {
      return undefined // 防止 Function.prototype.mycall 直接调用
  }
  // 创建一个临时属性来间接调用函数
  const fn = Symbol()
  // mycall 是作为 Function.prototype 的一个方法定义的，当它被某个具体的函数对象调用时，this 将指向那个具体的函数对象
  // 换句话说，this 指的是调用 mycall 的那个函数实例本身
  context[fn] = this;
  // 通过临时属性调用函数，此时 this 将指向 context
  const result = context[fn](...args)
  // 删除临时属性，避免污染对象
  delete context[fn]
  return result
}
let bar = {
  name: 'johnny'
}
function foo(age) {
  this.age = age
  console.log(this.name, this.age)
}
foo.mycall(bar, 5);
```

🌟实现apply: 和call一样，把函数的第二个参数改动一下就可以
```js
Function.prototype.myApply = function(context = window, args=[]) {
  if(this == Function.prototype) {
    return 
  }
  const fn = Symbol()
  context[fn] = this
  const result = context[fn](...args)
  delete context[fn]
  return result
}
foo.myApply(bar, [5]);
```

🌟实现bind:
```js

```