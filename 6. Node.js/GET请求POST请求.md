- GET请求传参数通过 URL；POST请求传参数通过 HTTP 上行报文。
- GET请求不安全，方便分享网址；POST请求安全，不方便分享网址，内容信息无限长。
 
get请求的参数在url中
> http://127.0.0.1/addStudent?id=100018&name=小明&sex=男

nodejs程序如果获得get请求，实际上就是如何解析URL。昨天已经讲解过了。

就是：
> url.parse(req.url,true).query

#### 安装一个小型服务器，因为只有服务器环境才能发出 Ajax 请求。
> $ cnpm install serve-static --save
>
> $ cnpm install finalhandler --save

- req.query GET
- req.body  POST
```
const express = require('express')
const bodyServer = require('body-parser')

var server = express()
server.listen(8080)

server.use(bodyServer.urlencoded({}))

server.use('/',function(req,res){
    console.log(req.body)  
})
```

## 请求方式
- get 请求数据在url中
- post 数据不在url中

form.html
```
<form action="http://localhost:8080/" method="get">
    用户：<input type="text" name="user" value=""><br>
    密码：<input type="password" name="pass" value=""><br>
    <input type="submit" value="提交">
</form>
```
nodejs文件
```
const http = require("http")

http.createServer(function(req,res){
    console.log(req.url)
    res.write("aaa")
    res.end()
}).listen(8080)
```
### url方法
```
var obj = url.parse("www.yangliunan.com/index?a=12&b=5",true)
```
它的pathname是 www.yangliunan.com/index ，query 是{a:'12',b:'5'}


#### post数据比get数据大的多

- data-有一段数据到达（很多次）
- end-数据全部到达（一次）


