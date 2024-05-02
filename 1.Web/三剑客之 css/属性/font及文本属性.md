# 文本属性
## font
简写的顺序以及定义是
1. `font-style` 字体的样式
  - normal：默认值，文字正常显示
  - italic：文字以斜体显示
  - oblique：文字以倾斜效果显示
2. `font-variant` 定义英文是否以小型大写字母文本展示
  - normal：默认，正常显示
  - small-caps：文本以小型大写字母显示

3. `font-weight` 字体的粗细
  - 关键字，如 normal、bold、bolder、lighter。
  - 数字值，范围从 100 到 900，其中 400 等同于 normal，700 等同于 bold
4. `font-size⭐️` / `line-height` 字体大小/行高
5. `font-family⭐️` 定义文本的字体

> 写缩写属性时，必须包含 font-size 和 font-family

行高 line-height：
- 顶线，中线，基线，底线
- 行高是指上下文本行基线间的垂直距离
- 行间距是指一行底线到下一行顶线的垂直距离，行间距 =  行高 - 字体大小

在chrome浏览器中，字体的最小像素是12px。

## text-overflow
- clip：修剪文本
- ellipsis：显示省略符号来代表被修剪的文本
- string：使用给定的字符串来代表被修剪的文本

## text-transform 设置文本大小写
- none：默认，不作处理
- capitalize：单词的首字母大写，通过空格来识别单词
- uppercase：所有字母都大写
- lowercase：所有字母都小写

## text-decoration 设置文本的修饰
- none：默认值，不添加任何修饰
- underline：为文本添加下划线
- overline：为文本添加上划线
- line-through：为文本添加删除线

超链接会默认添加下划线，是因为超链接的 text-decoration = underline

## letter-spacing 指定字符间距
- normal：默认，规定字符间没有额外的空间
- inherit：从父元素继承
- 一个长度值，定义字符间的规定空间

## word-spacing 设置文本中空格的大小
一般是只对英文文本有效，因为英文单词间会有空格，中文字符之间是没有空格的

## text-indent 设置首行缩进
- 一般使用em作为单位，1em相当于一个字体大小
- 指定正值时，会自动向右侧缩进指定元素；指定负值时，会向左侧缩进指定元素；通过这种方式可以将一些不想显示出来的字隐藏起来

## word-wrap/overflow-wrap
设置是否允许长单词或URL地址换行到下一行
- normal：只在允许的断字点换行
- break-word：换行

## word-break 设置单词在换行时如何断开
- normal: 默认值，对于中文，自动在容器内换行；对于长度超出的英文，浏览器会尝试在单词内部寻找合适的断点进行换行，但首选行为是在单词边界处换行
- break-all：在任意字符间插入换行符，包括单词内部
- keep-all：只在单词边界、空格、标点符号处进行换行

## white-space 控制元素内空白字符如何处理
- normal：默认，空白会被浏览器忽略
- pre：空白被浏览器保留，相当于pre标签
- nowrap：文本不会换行，会在同一行上继续，直到遇到br标签
- pre-wrap：保留空白符序列，正常的进行换行
- pre-line：合并空白符序列，保留换行符
- inherit：继承父元素

## 场景题
单行文本超出部分显示省略号
```css
{
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
```
多行文本超出部分显示省略号
```css
{
  display: -webkit-box;
  /* 设置弹性盒子中主轴的方向，vertical代表子元素从上到下垂直排列 */
  -webkit-box-orient: vertical;
  /* 限制在一个块元素内显示的文本行数 */
  -webkit-line-clamp: 3;
  overflow: hidden;
}
```