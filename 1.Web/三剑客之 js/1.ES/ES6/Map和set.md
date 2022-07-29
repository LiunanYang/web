## Map
- 键值对结构，没有重复的key
- 查找速度极快，可以像对象一样直接获取对应的键值，不需要遍历
- 创建：可以传入二维数组new Map([['lili',10],['tom',20]])，或者直接创建空Map

方法
- get( key ) 获取对应的键值
- set ( key, val)  向Map中添加/更改元素
- has( key) 是否存在key

## Set
是一组 key 的集合，不存储 value
Set 会自动去掉重复的值
创建：提供一个数组作为参数，或者直接创建空 set

方法
- add( val ) 向 Set 中添加元素
- delete ( val ) 删除 Set 的某元素
属性
- size 获取 Set 元素数量
和数组的转换
- var s=new Set(arr)  将数组转化为set
- var arr2=Array.from(s)  将set转化为数组