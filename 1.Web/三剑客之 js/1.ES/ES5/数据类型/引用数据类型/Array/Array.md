# Array类型
- 索引：从0开始的整数
- 数组的存储性能比普通对象好，在开发中我们经常使用数组来存储一些数据。
- 向数组中添加元素 ： 数组【索引】 = 值，如果读取不存在索引，不会报错，而是返回undefined
- 获取数组的长度： 数组.length 。对于连续的数组，可以获取到数组的长度（元素的个数）；对于不连续数组，返回的是数组的最大索引加一。
## 创建数组
### 使用Array构造函数
```
var colors = new Array(5) //可以省略new
[empty × 5] => [,,,,]
var colors = Array(20,10)
[20,10]
```
### 数组字面量表示法
```
var colors = ["red","green"]
```
### Array.of()
```
Array.of(5)  //[5]
```

## 检测数组
- arr instanceof Array
- Array.isArray(arr)
- Object.prototype.toString.call(arr) == '[object Array]'
- arr.constructor == Array

## 数组API
### 1.toString()  
- 返回一个字符串，由数组中每个值的字符串形式拼接而成，以逗号分隔
- 调用valueOf()返回的还是数组
- 不改变原数组
### 2.toLocaleString()  
- 也会创建一个数组值的以逗号分隔的字符串
- 这些字符串将使用一个特定语言环境的字符串

### 3.join（）  
- 将数组转换成字符串，不会改变原数组，将转换后的字符串作为结果返回。
- 可以指定一个字符串作为参数，这个字符将作为数组中元素的连接符。
- 不改变原数组
```
console.log(colors.join("~")) //red~blue
```
### 4.flat()  
按照一个可指定的深度递归遍历数组，将遍历到的数组与子数组中的元素合并为一个元素返回
- 会移除数组中的空项
- 不改变原数组
> 语法：arr.flat(depth)
- **depth**:遍历的深度，默认为1,使用**Infinity**，展开任意深度的嵌套数组
> 返回：展开后的新数组，不改变原数组

### 5.push（...items）
- 向数组末尾添加一个或多个元素
- 返回：新数组的长度
- 改变原数组
### 6.pop（）
- 删除数组的最后一个元素
- 返回：删除的元素
- 改变原数组
### 7.unshift（...items）
- 将一个或多个元素添加到数组的开头
- 返回：该数组的新长度
- 改变原数组
### 8.shift（）
- 删除数组的第一个元素
- 返回：被删除的元素
  - 如果数组为空，返回undefined
- 改变原数组
### 9.splice（start,?deleteCount,...items）
- 可以添加/删除数组中的指定元素
- 返回被删除的元素的新数组
- 会改变原数组
- 新的元素会自动插到开始位置索引前面,可以添加、替换元素

### 10.concat(...items)方法
- 先创建当前数组的一个副本，然后将接收到的参数添加到这个副本的末尾。
- 连接两个或多个数组，并将新的数组返回
- 不改变原数组

### 11.slice（start,?end）
- 从已有数组中选定返回的元素
- 不修改原数组
- 返回一个子数组
- 包含开始索引，不包括结束索引
- 索引可以传递一个负值，表示倒数第几个

### 12.reverse()
- 会反转数组项的顺序
- 改变原数组
### 13.sort()
- 若没有使用参数，则默认按照Unicode编码来排序，不可以直接来对数组中的数字进行排序
- 改变原数组  

### 14.indexOf(searchElement,?fromIndex)
返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。

> 例：找出指定元素出现的所有位置节
```
var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var idx = array.indexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}
console.log(indices);
// [0, 2, 4]
```

### 15.lastIndexOf(searchElement,?fromIndex)

### 16.includes(searchElement,?fromIndex)
- 返回值 Boolean
