## 1. 准确说出'1,2,3,4'.split()的结果是什么（包括类型和值）？ 
类型是：数组；值是["1,2,3,4"]
> 如果省略或不出现分隔符，则返回的数组包含一个由整个字符串组成的元素。
 
## 2.去除字符串中最后一个指定的字符
```
function delLastStr(str, delStr) {
  for (let i = str.length - 1; i >= 0; i --) {
    if (delStr === str[i]) {
      return str.substring(0, i) + str.substring(i+1);
    }
  }
  return str;
}
```
## 3.把多维数组降维