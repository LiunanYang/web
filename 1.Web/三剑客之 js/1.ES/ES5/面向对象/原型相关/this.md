# this
this 是什么：
- 当一个函数被调用时，JavaScript 会创建执行上下文，携带所有的信息（包括 this、词法环境、变量环境）。this 就是执行上下文（context）中的一条信息，它代表是谁调用它。
- this 是在运行时进行绑定的，并不是在编写时绑定，this 的指向只取决于函数调用方式

this的作用：
- 全局执行上下文中，this指向window对象，方便调用全局window对象
- 函数执行上下文中，this指向调用该函数的对象，减少参数传递

不同函数调用方式中的 this 指向：
1. 以函数形式调用时，this指向全局对象window
2. 以对象方法形式调用时，this指向调用方法的对象
3. 当以构造函数形式调用时，如果构造函数中的返回值是一个对象，那么this就指向这个对象；如果返回的不是一个对象，那么this就指向新创建的这个对象。(扩展问题：new 操作符调用构造函数的具体过程)
4. 当事件的响应函数中，响应函数绑定的是谁，this就指向谁
5. 使用call()、apply()、bind()调用时，this是指定的那个对象

改变this指向：
1. call、apply、bind 方法
2. 在指定位置定义this存为变量
3. 延时器。因为将一个函数作为参数传给setTimeout时，该函数将在全局作用域中被调用，所以this被设置为全局对象。
```js
var obj = {
  name: 'name',
  foo: function () {
      console.log(this); // Object {name: "name"}
      setTimeout(function () {
          console.log(this);  // Window
      }, 1000);
  },
  foo2: function () {
      console.log(this); // Object {name: "name"}
      setTimeout(() => {
          console.log(this);  // Object {name: "name"}
      }, 2000);
  }
}
```
4. 箭头函数


输出题：
```js
let length = 10
function fn(){
  console.log(this.length)
}
let obj = {
  length:5,
  method(fn){
    console.log(this.length)
    fn()
    arguments[0]()
  }
}
obj.method(fn,1)
```
