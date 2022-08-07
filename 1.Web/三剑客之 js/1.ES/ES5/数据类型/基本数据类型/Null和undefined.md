## null
- 表示一个**空对象指针**
```
var car = null
alert(typeof car)
```
- 如果定义的变量在将来用于保存对象，那么最好将该变量初始化为 null 而不是其他值。这样只要直接检查 null 值就可以知道相应的变量是否已经保存了一个对象的引用
- underfined 值是派生自 null 值的，因此
> alert(null == underfined) //true
> alert(null == underfined) //false

Q：typeof null 为啥是object?
A：历史遗留问题。不同的对象在底层原理的存储是用二进制表示的，在js中，如果二进制的前三位都为0的话，系统会判定为是 Object 类型。null的存储二进制是 000，所以系统判定null为Object类型。


## undefined 
- 声明变量但未对其初始化时，为 undefined

## null 和 undefined 区别
### 类型不同
- typeof null 为 object
- undefined 为 undefined
### 代表意义不同
- undefined 是声明未定义的值
- null是对象，表示对象被定义，但是值是空值
### 使用场景不同
- undefined：变量、函数没有赋值；函数没有返回值；函数没有传参数
- null：作为对象原型链的终点
### 转为数字结果不同
- null 为 0
- undefined 为 NAN

