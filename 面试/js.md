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
1. 方法1：
- 使用数组的**flat**方法
```
arr.flat(Infinity)
```
2.方法2： 
- 使用 **reduce、concat** 和**递归**无限反嵌套多层嵌套的数组
```
var arr1 = [1,2,3,[1,2,3,4, [2,3,4]]];

function flattenDeep(arr1) {
   return arr1.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
}
flattenDeep(arr1);
// [1, 2, 3, 1, 2, 3, 4, 2, 3, 4]
```
3.方法3：使用栈

## 4.分析('b' + 'a' + +'a' + 'a').toLowerCase()返回的结果
> **+'a'**  这个加号是一元操作符，相当于 Number('a'),即NaN

所以加后的结果为 baNaNa，toLowerCase后为 banana