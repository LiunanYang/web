# Array类型
- 索引：从0开始的整数
- 数组的存储性能比普通对象好，在开发中我们经常使用数组来存储一些数据。
- 向数组中添加元素 ： 数组【索引】 = 值，如果读取不存在索引，不会报错，而是返回undefined
- 获取数组的长度： 数组.length 。对于连续的数组，可以获取到数组的长度（元素的个数）；对于不连续数组，返回的是数组的最大索引加一。
## 创建数组
### 使用Array构造函数
```
var colors = new Array(20) //可以省略new
```
- 向Array构造函数传递数组中应该包含的项
```
var colors = new Array("blue","red","green")
```
### 数组字面量表示法
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
### <font color="blue">toString()</font>
- 返回一个字符串，由数组中每个值的字符串形式拼接而成，以逗号分隔
- 调用valueOf()返回的还是数组
- 不改变原数组
### <font color="blue">toLocaleString()</font>
- 也会创建一个数组值的以逗号分隔的字符串
- 这些字符串将使用一个特定语言环境的字符串

### <font color="blue">join（）</font>
- 将数组转换成字符串，不会改变原数组，将转换后的字符串作为结果返回。
- 可以指定一个字符串作为参数，这个字符将作为数组中元素的连接符。
- 不改变原数组
```
console.log(colors.join("~")) //red~blue
```
### <font color="blue">flat()</font>
按照一个可指定的深度递归遍历数组，将遍历到的数组与子数组中的元素合并为一个元素返回
- 会移除数组中的空项
- 不改变原数组
> 语法：arr.flat(depth)
- **depth**:遍历的深度，默认为1,使用**Infinity**，展开任意深度的嵌套数组
> 返回：展开后的新数组，不改变原数组

```
var colors=[1,2,3,[5,6,[7,8]],10]
console.log(colors.flat(Infinity)) //[1, 2, 3, 5, 6, 7, 8, 10]
```

## <font color="orange">栈方法</font>
- 栈是一种后进先出的数据结构
### push（）
- 向数组末尾添加一个或多个元素
- 返回：新数组的长度
- 改变原数组
### pop（）
- 删除数组的最后一个元素
- 返回：删除的元素
- 改变原数组
## <font color="orange">队列方法</font>
- 队列数据结构是先进先出
- 队列在列表的末端添加项，从列表的前端移除项
### shift（）
- 删除数组的第一个元素
- 返回：被删除的元素
  - 如果数组为空，返回undefined
- 改变原数组
### unshift（）
- 将一个或多个元素添加到数组的开头
- 返回：该数组的新长度
- 改变原数组

## <font color="orange">重排序方法</font>
### reverse()
- 会反转数组项的顺序
- 改变原数组
### sort()
- 若没有使用参数，则默认按照Unicode编码来排序，不可以直接来对数组中的数字进行排序
- 改变原数组

我们可以自己来定义排序的规则，在sort（）添加一个回调函数，来指定规则，该函数要比较两个值，然后返回一个用于说明这两个值的相对顺序的数字。比较函数应该具有两个参数 a 和 b，其返回值如下：
- 若 a 小于 b，在排序后的数组中 a 应该出现在 b 之前，则返回一个小于 0 的值。
- 若 a 等于 b，则返回 0。
- 若 a 大于 b，则返回一个大于 0 的值。

## <font color="orange">操作方法</font>
### concat()方法
- 先创建当前数组的一个副本，然后将接收到的参数添加到这个副本的末尾。
- 连接两个或多个数组，并将新的数组返回
- 不改变原数组

### slice（）
- 从已有数组中选定返回的元素
- 不修改原数组
- 返回一个子数组

参数：
>（ 截取开始位置的索引，截取结束位置的索引）。

- 包含开始索引，不包括结束索引
- 索引可以传递一个负值，表示倒数第几个
### splice（）
- 可以添加/删除数组中的指定元素
- 返回被删除的元素的新数组
- 会改变原数组

参数：
- **index**:必需，添加/删除元素的位置，负数表示从结尾处开始
- **howmany**：必需，要删除的数量，为0则不删除
- **item1,item2,..**:向数组中添加新项目

- 新的元素会自动插到开始位置索引前面,可以添加、替换元素

## <font color="orange">位置方法</font>

### indexOf()
返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。

语法：
> arr.indexOf(searchElement)
>
> arr.indexOf(searchElement[, fromIndex = 0])
1. **searchElement**:要查找的元素
2. **fromIndex**： 可选，开始查找的位置。(可分几种情况)
```
var beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));   //1
console.log(beasts.indexOf('bison', 2));   //4
console.log(beasts.indexOf('giraffe')); //-1
```
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

### lastIndexOf()

## <font color="orange">归并方法</font>
### Array.prototype.reduce() 和 reduceRight()
- 迭代数组中的所有项，构建一个最终返回的值。
- reduce()方法从数组的第一项开始，逐个遍历到最后
- reduceRight()则从数组的最后一项开始，向前遍历到第一项
- 参数：一个在每一项上调用的函数和(可选的)作为归并基础的初始值
- 传给reduce()和reduceRight()的函数接收四个参数：前一个值，当前值，项的索引和数组对象

语法：
> arr.reduce(callback,[initialValue])

### 回调函数callback的参数
1. **previousValue** ：上一次调用回调返回的值，或者是提供的初始值（initialValue）
2. **currentValue** ：数组中当前被处理的元素
3. **index** ：当前元素在数组中的索引
4. **array** ：调用 reduce 的数组
### initialValue （作为第一次调用 callback 的第一个参数。）

> 例如：
```
var arr = [1, 2, 3, 4];
var sum = arr.reduce(function(prev, cur, index, arr) {
    console.log(prev, cur, index);
    return prev + cur;
})
console.log(arr, sum);
```
> 输出：
```
1 2 1
3 3 2
6 4 3
[1, 2, 3, 4] 10
```


