# xss
cross-site-scripting 跨站脚本攻击，是代码注入攻击

由于网站没有对恶意代码进行过滤，攻击者在网站上注入恶意的客户端代码，与正常代码混在一起，用户登陆网站时就导致了恶意代码的执行

## xss 攻击方式类型
### 1. 存储型（持久型）
恶意代码被存储在目标服务器上，当浏览器请求数据时，脚本从服务器返回并被执行

场景：比如我在评论中输入“<script>alert(1)</script>”时，如果前后端没有做好防御的话，这段评论就会被存储到数据库中，每个打开网页的用户都会被攻击到

### 2. 反射型（非持久型）
恶意代码存储在 URL 中。攻击者构造出含恶意代码的URL，用户打开URL，服务器接受数据，然后将将恶意代码从 URL 中取出，拼接在 HTML 中返回给浏览器，浏览器解析执行

例子:如果页面需要从URL中获取某些参数作为内容，不经过过滤就会导致攻击代码被执行
```js
<!-- http://www.domain.com?name=<script>alert(1)</script> -->
<div>{{name}}</div>   
```
对于这种攻击方式来说，如果用户使用 Chrome 这类浏览器的话，浏览器就能自动帮用户防御攻击。

### DOM型
修改页面的 DOM 节点形成 XSS


## xss 防御手段
### 1. 转义字符
首先，对用户的输入应该永远是不信任的。

最普遍的做法是转义输入输出的内容，对于引号、尖括号、斜杠进行转义
```js
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
对于显示富文本来说，显然不能通过上面的办法来转义所有字符，因为这样会把需要的格式也过滤掉

### 2.CSP (Content-Security-Policy)

CSP 的本质就是建立白名单。开发者明确告诉浏览器哪些外部资源可以加载和执行。

我们配置规则，如何拦截是由浏览器自己实现的。

**开启 CSP**
1. 设置 HTTP Header 中的 Content-Security-Policy
2. 设置 meta 标签的方式 <meta http-equiv="Content-Security-Policy">

示例:
```js
<!-- 只允许加载本站资源 -->
Content-Security-Policy ：default-src ‘self’  
<!-- 只允许加载 HTTPS 协议图片 -->
Content-Security-Policy ：img-src https://*
<!-- 允许加载任何来源框架 -->
Content-Security-Policy ：child-src ‘none’
```

### 3.cookie 设置 http-only
敏感信息保护，使得脚本无法操作cookie
