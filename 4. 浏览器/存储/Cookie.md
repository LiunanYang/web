# Cookie
一组键值对，大小一般不超过4K(不同浏览器不同)

## Cookie 的基本属性
```js
// cookie 的名称为 username，值为 John
document.cookie = "username=John";
```

属性|作用
--|--
domain | 表示当前cookie所属于哪个域或子域下面。对于服务器返回的Set-Cookie中，如果没有指定Domain的值，那么其Domain的值是默认为当前所提交的http的请求所对应的主域名的。比如访问 http://www.example.com，返回一个cookie，没有指名domain值，那么其为值为默认的www.example.com。
path | 表示cookie的所属路径。
expires | cookie的有效期
max-age | cookie 存在的秒数
http-only | 不能通过JS访问操作此cookie的。减少xss攻击。
same-site | 浏览器不能在跨域请求中携带 cookie，减少了CSRF攻击。
secure | 只能在HTTPS协议的请求中携带，一般用于包含认证信息的cookie。

## Cookie的工作机制/运作流程
1. 用户在第一次提交请求后，由服务器生成 Cookie ，并将其封装到响应头 Set-Cookie 中，以响应的形式发送给客户端
2. 客户端收到这个响应后，将 Cookie 保存到客户端
3. 当客户端再次发送同类请求后，在请求中会使用请求字段 Cookie 将 Cookie 数据发送到服务端，由服务器对对话进行跟踪

## 作用
- 会话状态管理（登陆状态、购物车）
- 个性化设置（自定义主题、配置）
- 浏览器行为跟踪（分析用户行为）

## 分类：
- **会话cookie**：临时性 cookie，在浏览器关闭时失效，不设置过期时间即为会话cookie
- **持久cookie**：根据过期时间持久化存储

## cookie缺点
- 大小限制
- cookie是随 HTTP 一起发送的，因此会浪费一部分发送cookie时使用的带宽

## API
### 创建
```js
document.cookie="username=Joh"
```
添加一个过期时间
```js
document.cookie="username=Joh; expires=Thu, 18 Dec 2043 12:00:00 GMT"
```
可以使用 path 参数告诉浏览器 cookie的路径，默认情况下，属于当前页面
```js
document.cookie="username=John Doe; expires=Thu, 18 Dec 2043 12:00:00 GMT; path=/";
```
### 读取 
```js
document.cookie
```
### 修改
类似于创建 cookie，旧的cookie对应的属性的值将被覆盖
```js
document.cookie="username=John Smith;" 
```
### 删除
- cookie 名后面没有值，代表要删除这个 cookie
- 设置 expires 参数为以前的时间，path 和 domain 如果有的话要与原Cookie的值相同
```js
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
```

