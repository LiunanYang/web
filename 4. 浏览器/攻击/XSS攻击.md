# xss
- cross-site-scripting 跨站脚本攻击：是一种安全漏洞，攻击者可以利用这种漏洞在网站上注入恶意的客户端代码
- 当被攻击者登陆这些网站时就会自动运行这些恶意代码

### 以下两种情况易发生xss
1. 数据从不一个不可靠的连接发送到 web 应用程序
2. 没有过滤掉恶意代码的内容被发送给用户

## xss分类
### 1. 存储型（持久型）
攻击的代码被服务端写入进数据库中，这种攻击危害性很大。如果网站访问量很大的话，就会导致大量正常访问页面的用户都收到攻击。

场景：对于评论功能来说，就得防范持久型XSS攻击。比如我在评论中输入“<script>alert(1)</script>”时，如果前后端没有做好防御的话，这段评论就会被存储到数据库中，每个打开网页的用户都会被攻击到。

### 2. 反射型（非持久型）
一般通过**修改URL参数**的方式加入攻击代码，诱导用户访问链接从而进行攻击。

例子:如果页面需要从URL中获取某些参数作为内容，不经过过滤就会导致攻击代码被执行
```
<!-- http://www.domain.com?name=<script>alert(1)</script> -->
<div>{{name}}</div>   
```
对于这种攻击方式来说，如果用户使用 Chrome 这类浏览器的话，浏览器就能自动帮用户防御攻击。


## xss 防御手段
### 1. 转义字符
首先，对用户的输入应该永远是不信任的。

最普遍的做法是转义输入输出的内容，对于引号、尖括号、斜杠进行转义
```
  function escape(str){
    str = str.replace(/&/g,'&amp')
    str = str.replace(/</g,'&lt')
    str = str.replace(/>/g,'&gt')
    str = str.replace(/"/g,'&quto')
    str = str.replace(/'/g,'&#39')
    str = str.replace(/`/g,'&#96')
    str = str.replace(/\//g,'&#x2F')
    return str
  }
  console.log(escape('<script>alert(1)< /script>'))
```
对于显示富文本来说，显然不能通过上面的办法来转义所有字符，因为这样会把需要的格式也过滤掉。
- 白名单过滤。（推荐使用，因为考虑到需要过滤的标签和标签属性实在太多）
- 黑名单过滤。

### 2.CSP (Content-Security-Policy)

CSP 的本质就是建立白名单。开发者明确告诉浏览器哪些外部资源可以加载和执行。

我们配置规则，如何拦截是由浏览器自己实现的。

**开启 CSP**
1. 设置 HTTP Header 中的 Content-Security-Policy
2. 设置 meta 标签的方式 <meta http-equiv="Content-Security-Policy">

示例:
```
<!-- 只允许加载本站资源 -->
Content-Security-Policy ：default-src ‘self’  
<!-- 只允许加载 HTTPS 协议图片 -->
Content-Security-Policy ：img-src https://*
<!-- 允许加载任何来源框架 -->
Content-Security-Policy ：child-src ‘none’
```