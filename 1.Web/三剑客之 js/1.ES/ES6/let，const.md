## let
- let 声明的变量只在let声明所在的代码块内有效
```
{
  let a=1;
  var b=2;
}
a //ReferenceError: a is not defined.
b // 2
```

- for循环，设置循环变量的那部分是一个父作用域，循环体内部是一个单独的子作用域

### let 不存在变量提升
- 变量提升：变量可以在声明之前使用，值为undefined
- let 所声明的变量一定要在声明后使用，否则报错
```
// var 的情况
console.log(foo); // 输出undefined
var foo = 2;

// let 的情况
console.log(bar); // 报错ReferenceError
let bar = 2;
```
### 暂时性死区

- 如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡在声明之前使用这些变量，就会报错
- 在死区中，typeof运行时就会抛出一个ReferenceError
比较隐蔽的死区：
```
function bar(x = y, y = 2) {
  return [x, y];
}

bar(); // 报错
```
原因：参数x默认等于参数y，而此时y还没有声明，属于死区

### 不允许重复声明
```
function func(arg) { 
  let arg;
}
func() // 报错

function func(arg) {
  {
    let arg;
  }
}
func() // 不报错
```

## 块级作用域
- ES5只有全局作用域和函数作用域
  - 缺点：
  - 1.内层变量可能会覆盖外层变量
  - 2.循环变量泄露为全局变量


## const 命令
- const声明一个只读的常量，一旦声明，常量的值就不能改变，改变则报错
  - 声明时必须赋值
- const 与 let 一样，只在声明所在的作用域内有效、声明不提升、存在暂时性死区
 
- 对于简单类型的数据(数值、字符串、布尔值)，值就保存在变量指向的那个内存地址
- 对于复合类型(对象和数组)，变量指向的内存地址，保存的只是一个指向实际数据的值，const 总是指向另一个固定的地址，它指向的数据结构可能会变化
```
const foo = {};

// 为 foo 添加一个属性，可以成功
foo.prop = 123;
foo.prop // 123

// 将 foo 指向另一个对象，就会报错
foo = {}; // TypeError: "foo" is read-only

```
## ES6声明变量的6种方法
- var
- function
- let 
- const
- import
- class

## 顶层对象的属性
- 在浏览器环境指的是window对象，在Node指的是global对象
