## form
表单的作用就是将用户的信息提交给远程服务器的

### form标签属性
- **action**：必须指定，指向一个服务器地址，提交表单时将会提交到action属性对应的地址
- **method**: 浏览器使用此HTTP方式来提交表单
  - post : 表单数据包含在表单体内发送给服务器
  - get : 表单数据附加在action属性的url后
  > url地址 ？查询字符串
  > 
  > 格式： 属性名=属性值，多个名值对结构间用 & 隔开
- **name**: 表单的名称，必须唯一且不为空
- **enctype**：当method属性为post时，enctype就是将表单的内容提交给服务器的MIME类型
- **target**：用来提示提交表单之后，在哪里显示收到的回复


## 文本框
- 使用 input 来创建一个文本框(行内块元素)，它的 type 属性是text
- 可以用 value 指定文本框内的默认值
## 提交按钮
- 提交按钮可以将表单中的信息提交给服务器
- 它的 type 属性是 submit
- value 属性指定按钮上的文字
- 除了使用 input ，也可以使用botton 标签创建按钮
## 密码框
- 使用 input 创建一个密码框，它的 type 属性是password
## 单选按钮
- 使用input来创建一个单选按钮，type值为 radio
- 单选按钮通过name 属性进行分组，name属性相同的是一组按钮
- 像这种需要用户选择，但不需要用户直接填写内容的表单项，还必须指定一个 value 属性，这样被选中的表单项的value属性值将被最终提交给服务器
- 如果希望指定默认选项，则在该选项中 添加 checked=" " 
## 多选按钮
- 使用input来创建一个单选按钮，type值为 checkbox
## 下拉列表
- 使用 select 标签创建一个下拉列表
- 在下拉列表中使用 option 标签创建列表项
- 下拉列表的 name 属性需要指定给 select ，value 属性指定给 option
- 在option 中添加 selected="selected" 来讲该选择作为默认选中
- 特有属性  multiple ="multiple" ，则下拉列表变成一个多选的下拉列表
- 使用 optgroup 标签对选项进行分组
- 使用 label 属性可以指定组名
## 文本域
- 使用 textarea 创建一个文本域
## 重置按钮
- 使用input来创建一个重置按钮，type值为 reset
- 点击重置按钮后，表单内容恢复默认值
- 除了使用 input ，也可以使用botton 标签创建按钮
## 按钮
- 使用input来创建一个单纯按钮，type值为 botton
- 这个按钮没有任何功能，只能被点击
- 除了使用 input ，也可以使用botton 标签创建按钮

在HTML中，还为我们提供了一个 label 标签，专门用来选中表单中的提示文字的
- label标签中有一个 for 属性，该属性的值需要指定一个表单项的id值

在表单中可以使用 fieldset 来对表单项进行分组 
-在 fieldset 中可以使用 legend 子标签来指定组名