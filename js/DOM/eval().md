# eval()
- 将传入的字符串当做js代码进行执行
- 全局对象的函数属性
```
console.log(eval('2+2'))  //4
console.log(eval(new String('2+2')))  // 2+2
console.log(eval('2 + 2') === eval('4'));  //true
console.log(eval('2 + 2') === eval(new String('2 + 2')));  //false
```
语法：
> eval(string)
- **string** :一个表示js表达式、语句或者一系列语句的字符串。
  - 表达式可以包含*变量*和*已存在对象*的属性
- 返回值：返回字符串中代码的返回值，如果返回值为空，则返回 undefined