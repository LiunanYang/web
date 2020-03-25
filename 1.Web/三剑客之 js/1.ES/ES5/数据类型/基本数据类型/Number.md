## Number
- number类型，包括整数和浮点数
- 如果Number表示的数字超过了最大值，则会返回一个Infinity 
  - Infinity 正无穷
  - -Infinity 负无穷

- 八进制字面值的第一位必须是0，十六进制字面值的前两位必须是0x
- 在进行算术计算时，所有以八进制和十六进制表示的数值最终都将被转换成十进制数值
1. 浮点数值
- 由于保存浮点数值需要的内存空间是保存整数值的两倍，因此ECMAScript会将浮点数值转换为整数值
- 对于那些极大或极小的数值，可以用e表示法(即科学计数法)表示的浮点数值表示。用e表示法表示的数值等于e前面的数值乘以10的指数次幂。

> var num = 3.125e7 //等于31250000

- 浮点数值的最高精度是17位小数，但在进行算术运算时其精度远远不如整数，例如：0.1+0.2的结果不是0.3。**永远不要测试某个特定的浮点数值**

### NaN
- 是一个特殊的数字，表示 not a number
    - typeof NaN ：Number
    - typeof Infinity ：Number
- 这个数值用于表示一个本来要返回数值的操作数未返回数值的情况(这样就不会抛出错误了)
- 任何值和NaN做任何比较都是false

```
alert(NaN==NaN)  //false
```
**isNaN()函数**：这个函数接受一个参数，该参数可以使任何类型，而函数会帮我们确定这个参数是否"不是数值"

```
alert( isNaN(NaN) )  //true
alert( isNaN(10) )  //false
alert( isNaN("10") )  //false
alert( isNaN("blue") )  //true,不能被转化为数值
alert( isNaN(true) )  //false
```
### 非数值转换为数值
- 有三个函数可以把非数值转换为数值：Number()、parseInt()、parseFloat()
1. **Number()函数**的转换规则如下：

参数 | 输出 
---|---|---
Boolean(true、false) | 1、0 
数字值 | 简单的传入和返回
null 值 | 返回0
undefined | 返回NaN
字符串 | 只包含数字->转换为十进制数； 包含浮点格式->对应的浮点数值；十六进制->转为相同大小的十进制整数值；空字符串->返回0；其他->返回NaN

```
var num = Number("hello")   //NaN
var num = Number("")   //0
var num = Number("000011")  //11
var num = Number(true)   //1
```

2. **parseInt()**
```
var num = parseInt("1234red")  //1234
var num = parseInt("")   //NaN
var num = parseInt("0xA")   //10 十六进制
var num = parseInt(22.5)  //22
var num = parseInt("070")   //56 八进制
var num = parseInt("70")  //70  十进制
var num = parseInt("0xf")  //15  十六进制数
```
- 为了消除在使用parseInt()函数时可能导致的上述困惑，可以为这个函数提供第二个参数：转换时使用的基数(即多少进制)
```
var num = parseInt("AF",16)  //175
```

3. 与parseInt()函数类似，parseFloat()也是从第一个字符(位置0)开始解析每个字符，字符串中的第一个小数点是有效的，第二个小数点无效。