# Symbol
ES6 新增，表示独一无二的值。

每次调用symbol都会返回一个新的、唯一的值，可以为对象定义私有属性或方法

私有属性或方法是指只能从对象内部访问的对象或方法，而不能从外部直接访问

## 创建 Symbol
通过调用 Symbol 函数创建一个 Symbol 实例,可以在创建时传入一个字符串参数，相当于是创建的 Symbol 实例的一个描述信息。
```
let s = Symbol()
let s = Symbol(symbol test)
```