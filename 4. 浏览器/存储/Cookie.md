# Cookie
- cookie 是 HTTP 请求报文中的一个首部字段 Set-Cookie
- 保存在客户端浏览器，每次请求都带上它
- 大小：一组键值对，大小一般不超过4K(不同浏览器不同)
- 作用：记录客户端的用户信息，网络回话状态跟踪

## Cookie的工作机制/运作流程
1. 用户在第一次提交请求后，由服务器生成 Cookie ，并将其封装到响应头中，以响应的形式发送给客户端。
2. 客户端收到这个响应后，将 Cookie 保存到客户端。
3. 当客户端再次发送同类请求后，在请求中会使用请求字段Set-cookie将 Cookie 数据发送到服务端，由服务器对对话进行跟踪。

## Cookie 的基本属性
属性|作用
--|--
value | 如果用于保存用户登录状态，应该将值加密，不能使用明文的用户标识。
domain | 表示当前cookie所属于哪个域或子域下面。对于服务器返回的Set-Cookie中，如果没有指定Domain的值，那么其Domain的值是默认为当前所提交的http的请求所对应的主域名的。比如访问 http://www.example.com，返回一个cookie，没有指名domain值，那么其为值为默认的www.example.com。
path | 表示cookie的所属路径。
expire | cookie的有效期
size | 此 cookie 的大小
http-only | 此cookie必须用于http或https传输。不能通过JS访问操作此cookie的。减少xss攻击。
same-site | 浏览器不能再跨域请求中携带 cookie，减少了CSRF攻击。
secure | 只能在协议为HTTPS的请求中携带，一般用于包含认证信息的cookie。


## 分类：
- **回话cookie**：临时性 cookie，cookie保存在内存中，记录了用户访问站点时的设置和偏好，用户退出浏览器时，回话 cookie 就被删除。
- **持久cookie**：在浏览器中设置了cookie的过期时间，cookie被保存在硬盘中，关闭浏览器后，cookie数据仍然存在，直到过期时间结束才消失。

## cookie缺点
- 大小限制
- cookie是随 HTTP 一起发送的，因此会浪费一部分发送cookie时使用的带宽

## API
### 创建
```
document.cookie="username=Joh"
```
添加一个过期时间
```
document.cookie="username=Joh; expires=Thu, 18 Dec 2043 12:00:00 GMT"
```
可以使用 path 参数告诉浏览器 cookie的路径，默认情况下，属于当前页面
```
document.cookie="username=John Doe; expires=Thu, 18 Dec 2043 12:00:00 GMT; path=/";
```
### 读取 
```
document.cookie
```
### 修改
类似于创建 cookie，旧的cookie对应的属性的值将被覆盖
```
document.cookie="username=John Smith;" 
```
### 删除
设置 expires 参数为以前的时间即可
```
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
```

