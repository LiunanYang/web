# 过滤
- 在jQuery对象中的元素 对象数组中过滤出一部分元素来
1. first()
2. last()
3. eq(index/-index)
4. filter(selector)
5. not(selector)
6. has(selector)

```
// ul下li标签中title属性为hello的
$('ul>li').filter('[title=hello]').css('background','red')
// ul下li标签中title属性不为hello的
$('ul>li').not('[title=hello]').css('background','red')
$('ul>li').filter('[title!=hello]').css('background','red')
// 有title的值，并且不为hello
$('ul>li').filter('[title][title!=hello]').css('background','red')
// ul下li标签中有span标签
$('ul>li').has('span').css('background','red')
```
# 查找
- 在已经匹配出的元素集合中根据选择器查找孩子/父母/兄弟标签
1. children():子标签中找
2. find():后代标签中找
3. parent()：父标签中找
4. prevAll()：前面所有的兄弟标签
5. nextAll()：后面所有的兄弟标签
```
$('ul').children('span:eq(1)').css('background','red')
```
