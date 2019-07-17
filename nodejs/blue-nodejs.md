```
const http = require('http')

var server = http.createServer(function(req,res){
    // console.log(req.url);
    // res.write("abc")
    switch(req.url){
        case '/1.html':
            res.write('1111')
            break;
        case '/2.html':
            res.write('2222')
            break;
        default:
            res.write('404')
            break;
    }
    res.end()
})

server.listen(8080)
```

## 文件操作 fs->file system
文件读取很慢，如果是同步的，那完蛋了。是异步的，结束后调用回掉函数。
### fs.readFile("文件名"，回调函数)

### fs.writeFile("文件名"，回调函数)

```

var fs = require("fs")
var http = require("http")

var server = http.createServer(function(req,res){
    var file_name = './www'+req.url
    fs.readFile(file_name,function(err,data){
        if(err){
            res.write('404')
        }else{
            res.write(data)
        }
        res.end()
    })
    
})  

server.listen(8080)
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








