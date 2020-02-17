```
  function fun(a,b){
    console.log(`${this.name},a:${a},b:${b}`)
  }
  var o1 = {
    name:'yangliunan',
    age:12
  }
  var o2 = {
    name:"kanggege",
    age:30
  }
  fun.apply(o1,[1,2,3]) 
  fun.call(o2,1) 
  fun.bind(o2)(1,2)
```
# apply()
- 调用一个具有给定this值的函数，以及作为一个数组或类数组对象提供的参数。
- 接受的是**参数数组**
- apply（）方法需要将实参封装到一个数组中统一传递。

语法：
> func.apply(thisArg, [argsArray])
1. **thisArg**：可选，func运行时使用的this值
	- this可能不是该方法看到的实际值：若此函数处于非严格模式下，则指定为 null 或 undefined 时会自动替换为指向全局对象，原始值会被包装 (???)
2. **argsArray** :可选，一个数组或类数组对象，数组元素将作为单独的参数传给func函数。若为null 或 undefined ，则不需要传入任何参数
```
var numbers = [5, 6, 2, 3, 7];
var max = Math.max.apply(null, numbers);
console.log(max);  //7
```
> 例如：用apply将数组添加到另一个数组
```
var array = ['a', 'b'];
var elements = [0, 1, 2];
array.push.apply(array, elements);
console.info(array); // ["a", "b", 0, 1, 2]
```

# call() 
- 使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数。
- 接受的是**参数列表**
- call（）方法可以将实参在对象之后一次传递；

语法:
> fun.call(thisArg, arg1, arg2, ...)

1. **thisArg**:在 fun 函数运行时指定的 this 值。
	- 指定的 this 值并不一定是该函数执行时真正的 this 值，若此函数在非严格模式下运行，
		- 指定为 null 和 undefined 的 this 值会自动指向全局对象（浏览器中就是 window 对象）
		- 指定值为原始值（数字，字符串，布尔值）的 this 会指向该原始值的自动包装对象。
2. **arg1, arg2,**： ...指定的参数列表。

- call() 允许为不同的对象分配和调用属于一个对象的函数/方法。

> 使用 call 方法调用父构造函数
```
function Product(name, price) {
  this.name = name;
  this.price = price;
}
function Food(name, price) {
  Product.call(this, name, price);
	this.category = 'food';
}
console.log(new Food('cheese', 5).name);  //cheese
```
