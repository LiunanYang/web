# window对象
代表整个浏览器的窗口，同时window 也是网页中的全局对象
## 全局作用域

window对象同时扮演着EMCAScript中Global对象的角色，因此所有在全局作用域中声明的变量、函数都会变成window对象的属性和方法。 

```
var a = 1
function f(){
    conosle.log(this.a)
}
alert(window.a)   //1
f()  //1
window.f()  //1 
```
我们在全局作用域中定义了一个变量a和一个函数f()，它们被自动归在了window对象名下。可以通过window.a访问a，通过window.f()访问函数f()。

定义全局变量与在window对象上直接定义属性还有差别：
- 全局变量不能通过 delete 操作符删除，而直接在 window 对象上定义的属性可以
```
var age = 2
window.color="red"

delete window.age   //返回 false
delete window.color  //返回 true

console.log(age)   //2
console.log(color)  //undefined
```

尝试访问未声明的变量会抛出错误，但是通过查询window对象，可以知道某个可能未声明的变量是否存在

```
var newValue = old  //报错,old is not defined
  
var newValue = window.old
console.log(newValue)  // undefined
```

## 窗口关系及框架

如果页面中包含框架，则每个框架都拥有自己的window对象，并且保存在frames集合中。可以通过数值索引(从0开始，从左至右，从上到下)，或者框架名称来访问相应的window对象。每个window对象都有一个name属性。

## 窗口位置

IE、Safari、Opera、Chrome都提供了 screenLeft 和 screenTop 属性，分别用来表示窗口相对于屏幕左边和上边的位置

Firefox 则在 screenX 和 screenY 属性中提供了相同的窗口信息，Safari和Chrome支持

下面代码可以跨浏览器取得窗口左边和上边的位置
```
var left = (typeof window.screenLeft=="number")?window.screenLeft : window.screenX
var top = (typeof window.screenTop=="number")?window.screenTop : window.screenY
```
无法在跨浏览器的条件下取得窗口左边和上边的精确坐标值

使用**moveto()**和**moveby()**方法有可能将窗口精确地移动到一个新位置

都有两个参数：
- moveto()接受 新位置的x和y坐标值
- moveby()接受的是在水平和垂直方向上移动的像素数
这两个方法可能会被浏览器禁用。不适合于框架，只能对最外层的window对象使用。

## 窗口大小

## 导航和打开窗口

## 间歇调用和超时调用

## 系统对话框



