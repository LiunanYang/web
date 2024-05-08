# let、var、const

var：
- var 声明的变量会在全局作用域和函数作用域里变量声明提升，在声明之前就可以获取到，值为 undefined
- 可以被重新声明，重新赋值

let、const：
- ES6 引入的变量声明方式
- 形成块级作用域，只在被声明的代码块内有效
- let 可以重新赋值，在同一作用域内不能重新声明
- const 声明一个只读的常量，声明时必须赋值，一旦声明，如果是基本数据类型，值就不能改变，如果引用数据类型，可以改变它的内部属性，改变则报错。不可以重新赋值和声明。

```js
const foo = {};
foo.prop = 123; // 为 foo 添加一个属性，可以成功
foo = {}; // 将 foo 指向另一个对象，就会报错
```

> 声明提升：变量的声明提升在代码顶部，可以在声明之前使用变量，值为 undefined
> 
> 暂时性死区：let 和 const 不存在声明提升，凡在声明之前使用，就会报错

```js
console.log(foo); // 输出undefined
var foo = 2;
console.log(bar); // 报错ReferenceError
let bar = 2;
```

比较隐蔽的死区：
```js
function bar(x = y, y = 2) {
  return [x, y];
}

bar(); // 报错
```
原因：参数 x 默认等于参数 y，而此时 y 还没有声明，属于死区

```js
var a=10;
(function(){
  console.log(a);
  a=5;
  console.log(window.a);
  var a= 20;
  console.log(a);
})();
```
```js
  let x = [12,23]
  function fn(y){
    y[0]=100
    y=[100]
    y[1]=200
    console.log(y)    
  }
  fn(x)
  console.log(x) 
```

## 相关
如何实现一个const？