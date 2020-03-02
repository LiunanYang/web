## String类型
- String类型用于表示由零个或多个16位Unicode字符组成的字符序列，即字符串。
- 在js中使用字符串，要用引号引起来,引号不能嵌套，双引号不能套双引号，单引号不能套单引号
- 在字符串中，可以用\ 作为转义字符，当表示一些特殊符号时用\转义

##### 字符字面量
字面量 | 含义
---|---
\n | 换行
\t | 制表
\b | 空格
\r | 回车
\f | 进纸
两个斜杠 | 斜杠
 \' | 单引号
\" | 双引号
\xnn | 以十六进制代码nn表示一个字符(n为0~F)。例如：x41表示"A"
\unnn | 以十六进制代码nnnn表示一个Unicode字符(n为0~F)。

- 字符串一旦创建，它的值就不能改变。要改变某个变量保存的字符串，首先要销毁原来的字符串，然后再用另一个包含新值的字符串填充该变量。

##### 转换为字符串
- toString()方法
```
var a = 11
alert( a.toString() )  //字符串"11"
```
- 数值、布尔值、对象和字符串值都有toString()方法，但 null 和undefined没有。
- 在调用数值的toString()时，可以传递一个参数：输出数值的基数。默认以十进制格式返回数值的字符串形式。
```
var num = 10
alert( num.toString() )   //"10"
alert( num.toString(2) )  //"1010"
alert( num.toString(8) )  //"12"
alert( num.toString(16) )  //"a"
```

- 在不知道要转换的值是不是 null 或者 undefined 时，可以用转型函数 String() ,这个函数能够将任何类型的值转换为字符串。

值 | 输出
---|---
值有toString()方法 | 调用toString()方法
值是null | 返回 "null"
值是undefined | 返回 "undefined"