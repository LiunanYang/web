# RegExp类型

var exp = /patten/ flags
- patten 是正则表达式
- flags
  - g:表示全局模式匹配
  - i：不区分大小写
  - m:多行匹配

## RegExp实例属性
- global:布尔值，表示是否设置了g标志
- ignoreCase:布尔值，表示是否设置了i标志
- lastIndex:整数，表示开始搜索下一个匹配项的字符位置，从0算
- multiline:布尔值，表示是否设置了m标志
- source:正则表达式的字符串表示，按照字面量形式而非传入构造函数中的字符串模式返回