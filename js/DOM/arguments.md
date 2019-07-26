# arguments
- 定义：传递给函数的参数 的**类数组对象**
- arguments对象是所有非箭头函数中都可用的局部变量
- arguments对象不是一个Array，只有 length 属性 和索引元素
	- 它可以被转为真正的Array再当做数组使用
```
var args = Array.prototype.slice.call(arguments);
var args = [].slice.call(arguments);
// ES2015
const args = Array.from(arguments);
const args = [...arguments];
```
- 可以使用索引确定单个参数的类型
> typeof arguments[0]

## arguments.callee
指向当前执行的函数

**在调用函数时，浏览器每次都会传进两个隐含的参数。**
1. 函数的上下文对象this
2. 封装实参的对象arguments
- arguments是一个**类数组对象**(和数组很像，但不是数组)，它可以通过索引来操作数据，也可以获取长度；
- 在调用函数时，我们所传递的实参都会在arguments中保存；
- arguments.length可以获取实参的个数，arguments【0】返回第一个实参。
    - 它有一个属性**callee**，这个属性对应一个函数对象，就是当前正在指向的函数对象

```
function fun(a,b,c){
	console.log(arguments instanceof Array)  //false 类数组对象，不是数组
	console.log(Array.isArray(arguments))  //false
	console.log(arguments.length)  //2  实参个数
	console.log(arguments[1])  //1
	console.log(arguments.callee == fun) //true
}
fun("hello",1)
```