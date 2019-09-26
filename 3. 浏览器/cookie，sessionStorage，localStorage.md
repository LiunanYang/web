
www.baidu.com/login 输入账号密码 request=>  response <= cookie: id=1000(s=9999);  session 1000-{status:true}

www.baidu.com/index request=> cookie 服务器检测 id => {status:true} 检测status值，if true 已经登陆，返回值

www.baidu.com/index 服务器查找cookie，找不到cookie id整个key，判断结果：未登陆，转跳到登录页

# cookie
- cookie是HTTP请求报文中的一个头部字段
- 一组键值对，大小一般不超过4K(不同浏览器不同)
### 一般cookie具有的属性：
- Domain：域，表示当前cookie所属于哪个域或子域下面。

对于服务器返回的Set-Cookie中，如果没有指定Domain的值，那么其Domain的值是默认为当前所提交的http的请求所对应的主域名的。比如访问 http://www.example.com，返回一个cookie，没有指名domain值，那么其为值为默认的www.example.com。

- Path：表示cookie的所属路径。

- **Expire** time/Max-age：表示了cookie的有效期。expire的值，是一个时间，过了这个时间，该cookie就失效了。或者是用max-age指定当前cookie是在多长时间之后而失效。如果服务器返回的一个cookie，没有指定其expire time，那么表明此cookie有效期只是当前的

- session，即是session cookie，当前session会话结束后，就过期了。对应的，当关闭浏览器的时候，此cookie就应该被浏览器所删除了。 

- secure：表示该cookie只能用https传输。一般用于包含认证信息的cookie，要求传输此cookie的时候，必须用https传输。

- httponly：表示此cookie必须用于http或https传输。这意味着，浏览器脚本，比如javascript中，是不允许访问操作此cookie的。

# session


