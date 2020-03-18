# Array类型
- 索引：从0开始的整数
- 数组的存储性能比普通对象好，在开发中我们经常使用数组来存储一些数据。
- 向数组中添加元素 ： 数组【索引】 = 值，如果读取不存在索引，不会报错，而是返回undefined
- 获取数组的长度： 数组.length 。对于连续的数组，可以获取到数组的长度（元素的个数）；对于不连续数组，返回的是数组的最大索引加一。
### 创建数组的方式
- 使用Array构造函数
```
var colors = new Array(20) //可以省略new
```
- 向Array构造函数传递数组中应该包含的项
```
var colors = new Array("blue","red","green")
```
- 数组字面量表示法
```
var colors = ["red","green"]
```

## 检测数组
- 确定某个对象是不是数组：instanceof
```
if(value instanceof Array){
    //对数组执行某些操作   
}
```
instanceof操作符的问题：它假定只有一个全局执行环境。如果网页中包含多个框架，那实际上就存在两个以上不同的全局执行环境，从而存在两个以上不同版本的Array构造函数。如果你从一个框架向另一个框架传入一个数组，那么传入的数组与在第二个框架中原生创建的数组分别具有各自不同的构造函数。

- Array.isArray()方法
```
if(Array.isArray(value)){
    //对数组执行某些操作   
}
```
## 转换方法
- 调用数组的toString()方法会返回由数组中每个值得字符串形式拼接而成得一个以逗号分隔得字符串
- 调用valueOf()返回的还是数组

```
var colors = ["red","blue"]
alert(colors.toString())  //red,blue
alert(colors.valueOf())   //red,blue
alert(colors)             //red,blue
```
由于alert()要接收字符串参数，所以它会在后台调用toString()方法，由此会得到与直接调用toString()方法相同的结果。

- 当调用数组的 toLocalString()方法时，它和也会创建一个数组值的以逗号分隔的字符串，调用的是每一项的toLocalString()方法，而不是toString()方法。

## 栈方法
- 栈是一种后进先出的数据结构
- push()方法可以接收任意数量的参数，把它们逐个添加到数组末尾，并返回修改后数组的长度。
- pop()方法则从数组末尾移除最后一项，减少数组的length值，然后返回移除的项
```
var colors = new Array()
var count = colors.push("red","blue")
alert(count)  //2

count = colors.push("black")
alert(count)  //3

var item = colors.pop()
alert(item)    //"black"
alert(colors.length)  //2
```

## 队列方法
- 队列数据结构是先进先出
- 队列在列表的末端添加项，从列表的前端移除项
- shift()方法能够移除数组中的第一个项并返回该项
```
var colors = new Array()
var count = colors.push("red","blue")
alert(count)  //2

count = colors.push("black")
alert(count)  //3

var item = colors.shift()
alert(item)    //"red"
alert(colors.length)   //2
```
- unshift()能在数组前端添加任意个项并返回新数组的长度
```
var colors = new Array()
var count = colors.unshift("red","blue")
alert(count)   //2

count = colors.unshift("black")
alert(count)   //3

var item = colors.pop()
alert(item)   //"green"
alert(colors.lenghth)   //2
```
## 重排序方法
- reverse()，会反转数组项的顺序
- sort()，从小到大排序
- reverse()和sort()方法的返回值是经过排序之后的数组

## 操作方法
### concat()方法
- 先创建当前数组的一个副本，然后将接收到的参数添加到这个副本的末尾。
- 如果传递的是一个或多个数组，则该方法会将这些数组中的每一项都添加到结果数组中。

### slice
- 可以接收一个或两个参数，即要返回的起始和结束项的位置
- 只有一个参数时，返回从该参数指定位置开始到数组末尾的所有项
- 两个参数，返回起始和结束位置之间的项，不包括结束位置的项
- 不影响原数组

### splice

向数组中部插入项

#### 删除
- 删除任意数量的项
- 参数(要删除的第一项的位置，要删除的项数)

#### 插入
- 可以向指定位置插入任意数量的项
- 参数（起始位置，0，要插入的项，要插入的项，...）

#### 替换
- 插入的同时且删除
- 参数(起始位置，要删除的项数，要插入的项，....)
 
## 位置方法

### indexOf()、lastIndexOf()
- 参数( 要查找的项，表示查找起点位置的索引(可选) )
- indexOf从头开始，lastIndexOf从数组的末尾向前查找
- 没找到返回-1

## 迭代方法

- every():对数组中的每一项运行给定函数,如果该函数对每一项都返回true，则返回true
- filter():对数组中的每一项运行给定函数,返回该函数会返回true的项的数组
- forEach():对数组中的每一项运行给定函数,这个方法没有返回值
- map():对数组中的每一项运行给定函数,返回每次函数调用的结果组成的数组
- some()：对数组中的每一项运行给定函数,如果该函数对任一项返回true，则返回true

以上不会修改数组中的包含的值

## 归并方法
### reduce()、reduceRight()
- 迭代数组中的所有项，构建一个最终返回的值。
- reduce()方法从数组的第一项开始，逐个遍历到最后
- 而reduceRight()则从数组的最后一项开始，向前遍历到第一项
- 参数：一个在每一项上调用的函数和(可选的)作为归并基础的初始值
- 传给reduce()和reduceRight()的函数接收四个参数：前一个值，当前值，项的索引和数组对象