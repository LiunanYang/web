## appendChild() 
把新的节点添加到指定节点
## document.createElement()
用于创建一个元素节点对象，它需要一个**标签名**作为参数，将会根据该标签名创建元素节点对象，并将创建好的对象作为返回值返回。
## document.createTextNode（）
可以用来创建一个文本节点对象，需要一个**文本内容**作为参数，将会根据该内容创建文本节点，并将新的节点返回。
## insertBefore（）
在指定节点面前插入新的节点。
>语法：父节点 . insertBefore（新节点，旧节点）
## replaceChild
可以使用指定的子节点替换已有的子节点。语法 ：父节点 . replaceChild（新节点，旧节点）
## removeChild
- 可以删除一个子节点。语法：父节点 . removeChild（子节点）
>语法：子节点 . parentNode . removeChild（子节点）

- 使用innerHTML也可以完成DOM的增删改的相关操作，一般我们会两种方式结合使用。
