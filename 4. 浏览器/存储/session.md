# session
- 保存在服务器端
- 大小没有限制，可以保存任何类型的对象
- 使用：当服务器收到请求需要创建session对象时，首先会检查客户端请求中是否包含sessionid。如果有sessionid，服务器将根据该id返回对应session对象。如果客户端请求中没有sessionid，服务器会创建新的session对象，并把sessionid在本次响应中返回给客户端。

### session缺点
- session保存的东西越多，越占用服务器内存，对于用户在线人数较多的网站，服务器的内存压力会比较大
- sessionId保存在cookie，依赖于cookie，如果禁用cookie，则要URL重写，不安全
- 创建session变量有很大的随意性，可随时调用，不需要开发者做精确的处理，所以，过度使用session变量将会导致代码不可读且不好维护。