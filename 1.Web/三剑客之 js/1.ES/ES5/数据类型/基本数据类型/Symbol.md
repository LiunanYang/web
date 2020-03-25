# Symbol
ES6 新增，表示独一无二的值。

**每个 Symbol 实例都是唯一的**，当比较两个 Symbol 实例时总是返回 false。

## 创建 Symbol
通过调用 Symbol 函数创建一个 Symbol 实例,可以在创建时传入一个字符串参数，相当于是创建的 Symbol 实例的一个描述信息。
```
let s = Symbol()
let s = Symbol(symbol test)
```