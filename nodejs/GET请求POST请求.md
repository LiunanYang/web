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