# 请描述一下 cookies，sessionStorage 和 localStorage 的区别？

[参考一](https://www.cnblogs.com/yun1108/p/8561574.html)
[参考二](https://www.cnblogs.com/zqyanywn/p/7591377.html)

sessionStorage、localStorage、cookie都是在浏览器端存储的数据，其中sessionStorage的概念很特别，引入了一个“浏览器窗口”的概念。

## 有效期： 
- localStorage ———-永久存储，永不失效，除非手动删除 
- sessionStorage——–数据存储在窗口对象中，窗口关闭后，数据丢失 
- cookies—————–只在设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭 
## 作用域： 
- sessionStorage不在不同的浏览器窗口共享，即使是同一个页面 
- localStorage和cookies是在所有同源窗口中共享的 
## 适用情况： 
- cookies 数据始终在同源的http请求中携带（即使不需要），适合保存很小的数据 
- sessionStorage和localStorage 不会自动的将数据发送给服务器，仅在本地存储