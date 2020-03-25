## getElementById()
通过id属性获取一个元素节点对象
## getElementsByTagName（）
可以根据标签名来获取一组元素节点对象
- 这个方法会给我们返回一个类数组对象，所有查询到的元素都会封装到对象中，
即使查询到的元素只有一个，也会封装到数组中返回。
>如果需要读取元素节点属性，直接使用**元素 . 属性名**，
>例如：元素 . id  
>
>注意：class属性不能采用这种方式，读取class属性时需要使用 元素 . className
## getElementsByName（）
通过name属性获取一组元素节点属性
## innerHTML 
通过这个属性获取到元素内部的html代码，对于自结束标签，这个属性没有意义。
## innerText
该属性可以获取到元素内部的文本内容，它和inner HTML类似，不同的是它会自动将html去掉

## childNodes属性
- 会获取包括文本节点在内的所有节点,根据DOM标准,标签间的空白也会当成文本节点。
- 注意：在IE8及以下的浏览器中，不会将空白文档当成子节点。
## children属性
可以获取当前元素的所有子元素
## firstChild
可以获取到当前元素的第一个子节点（包括空白文本节点）
## firstElementChild
获取当前元素的第一个子元素，不支持IE8及以下浏览器
## lastChild
## previousSibling
获取前一个兄弟节点（也可能获取到空白的文本）
## previousElementSibling
获取前一个兄弟元素，IE8下不支持

---
### 在document就有一个属性叫body，它保存的是body的引用。
```
var body = document.getElementsByTagName("body")[0]
等于 
var body = document.body
```
## documentElement 
代表的是html根标签
## document . all 
代表页面中所有的元素
## getElementsByClassName
根据class属性值获取一组元素节点的值，但是该方法不支持IE8及以下的浏览器
## document.querySelector
- 需要一个选择器的字符串作为参数，可以根据一个CSS选择器来查询元素节点对象
- 虽然IE8中没有getElementsByClassName，但是可以document.querySelector
- 使用该方法只会返回唯一的元素，如果满足条件的元素有多个，那么它只返回第一个。
## document.querySelectorAll
- 该方法和document.querySelector类似，不同的是它会将符合条件的元素封装到数组中；
- 即使符合条件的元素只有一个，它也返回数组