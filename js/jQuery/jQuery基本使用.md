# jQuery
- jQuery 是一个优秀的JS函数库
- 封装简化的DOM操作（CRUD）/Ajax
- 核心功能： 查询 
## 为什么使用它/优点
- 强大的选择器
- 隐式遍历（迭代）：一次操作多个元素
- 读写合一：读数据/写数据 用一个函数
- 事件处理
- 链式调用
- DOM的操作（CUD）
- 样式操作
## 如何使用
- 引入jQuery库->js文件
    - 本地引入和CDN远程引入
    - 测试版本和生产版（压缩版）
- 使用jQuery
    - 使用jQuery核心函数
    - 使用jQuery对象

---
## 获取文本框中的内容
- 使用原生dom实现
```
var username = document.getElementById("username")
var btn1 = document.getElementById("btn1")
btn1.onclick = function(){
    alert(username.value)
}
```
- 使用jQuery实现p
```
$(function(){
    // 给btn2绑定监听（回调函数）
    $('#btn2').click(function(){
        var username = $('#username').val()
        alert(username)
    })
})
```
# jQuery核心函数
- $/jQuery
# jQuery核心对象
- 执行$（）返回的对象