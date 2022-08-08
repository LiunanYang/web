# session
- 保存在服务器端
- 大小没有限制，可以保存任何类型的对象

## session工作机制
当服务器收到请求需要创建 session 对象时，首先会检查客户端请求中是否包含 sessionid 。如果有 sessionid ，服务器将根据该 id 返回对应 session 对象。如果客户端请求中没有 sessionid，服务器会创建新的 session 对象，并把 sessionid 在本次响应中返回给客户端。

## 传递 sessionId 的方式
### 使用 cookie 保存
服务端向客户端发送一个名为 JSESSIONID 的cookie，值为对应的session id
### URL 地址重写
如果客户端浏览器将 cookie 功能禁用，或者不支持cookie，可以使用 url 地址重写方法

- **第一种**:在 url 路径后面拼接`;jsessionid=XXX` 
- 第二种：放在 url 的查询字符串中`?jsessionid=`

这两种方式对用户来说没有区别，只是服务器解析方式不同，采用第一种方法有利于把 session id 和正常的参数区分开

## session作用
- 记录客户端状态

## session缺点
- session 保存的东西越多，越占用服务器内存，对于用户在线人数较多的网站，服务器的内存压力会比较大
- sessionId 保存在cookie，依赖于 cookie，如果禁用cookie，则要 URL 重写，不安全
- 创建 session 变量有很大的随意性，可随时调用，不需要开发者做精确的处理，所以，过度使用session变量将会导致代码不可读且不好维护

## session 和 cookie 的区别
**存储位置不同**
- cookie 存在客户端
- session 存储在服务端
**数据大小**
- cookie 4k左右
- session 没有限制
**安全**
- cookie 可以分析存在本地的cookie，并进行cookie欺骗
- session 较安全
**性能**
- session 在一段时间会保存在服务器上，当访问增多，服务器压力增大
