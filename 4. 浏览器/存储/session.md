# session
- 保存在服务器端
- 大小没有限制，可以保存任何类型的对象

## session工作机制
当服务器收到请求需要创建 session 对象时，首先会检查客户端请求中是否包含 sessionid 。如果有 sessionid ，服务器将根据该 id 返回对应 session 对象。如果客户端请求中没有 sessionid，服务器会创建新的 session 对象，并把 sessionid 在本次响应中返回给客户端。

## session作用

## session缺点
- session 保存的东西越多，越占用服务器内存，对于用户在线人数较多的网站，服务器的内存压力会比较大
- sessionId 保存在cookie，依赖于 cookie，如果禁用cookie，则要 URL 重写，不安全
- 创建 session 变量有很大的随意性，可随时调用，不需要开发者做精确的处理，所以，过度使用session变量将会导致代码不可读且不好维护