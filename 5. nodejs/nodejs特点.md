# Nodejs特点
## 单线程
    - Nodejs不为每一个客户连接创建一个新的线程，而仅仅使用一个线程（thread），当用户连接了，就触发一个内部事件，通过非阻塞I/O，事件驱动机制，让Nodejs程序宏观上也是并行的。
    - 使用Nodejs，一个8GB内存的服务器。可以同时处理超过4万用户的连接 
```
// 证明Nodejs 单线程

var http = require("http")
var a = 0
var server = http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    a++
    // end 里面必须是字符串或者buffer
    res.end("你好"+ a.toString())
})

server.listen(3000)
// 我们发现全班同学共享了一个a，每个人访问的时候看到的都是别人刷过的a
```

```
//侧面证明nodejs是单线程
var http = require("http")

var server = http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    // 来一个访问者，就随机一个数字
    var num = parseInt(Math.random()*10)
    // 如果随机到了6666，则主动抛出错误
    // 如果因为程序有错误，此时唯一的node进程将停止，此时将导致所有访问者无法访问
    if(num===6){
        throw new Error("错误！6出现了！，IP地址为："+ req.connection.remoteAddress)
    }
    res.end("你的数字是："+num)
})

server.listen(3000)
console.log("服务器已经运行在3000端口")
```

>小知识：Nodejs 中拥有Jd的语言的核心语法，甚至拥有所有ES2016的新语法。但是Nodejs没有所有Bom的东西，比如Window对象，window对象的一切函数也没有。

## 异步I/O
```
var http = require("http")
var fs = require("fs")
var server = http.createServer(function(req,res){
    var ip = req.connection.remoteAddress
    console.log(ip + "来了！开始计算！")
    // 设置response响应头部
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});    
    fs.readFile("./public/a.html",function(err,data){
        // 把文本文件的内容进行传递
        res.end(data)  
        // 提示
        console.log(ip + "读取文本文件完毕！")
    })
})

server.listen(3000)
console.log("服务器已经运行再3000端口")
```
- nodejs 适合I/O多的业务，而不适合计算任务繁重的业务

### 因为nodejs想在破机器上也能够高效运行，所以采用了单线程的模式，既然单线程就必须异步。
- 传统机制中，在执行了访问数据库代码之后，整个线程都将暂停下来，等待数据库返回结果，I/O阻塞了代码的执行
- nodejs采用了非阻塞型的I/O机制，因此在执行了访问数据库的代码后，将立即转而执行后面的代码，把数据库返回结果的处理代码放在回调函数中，从而提高了程序的执行效率。

## 事件驱动
- 事件驱动是nodejs的底层机制

## nodejs 适合开发的业务
当应用程序需要处理大量并发的I/O，而在向客户端发出响应之前，应用程序内部并不需要进行非常复杂的处理的时候，Node.js非常时候。Nodejs也非常适合与 web socket 配合，开发长连接的实时交互应用程序。

比如：
- 用户表单收集
- 考试系统
- 打分系统
- 聊天室
- 图文直播
- 提供JSON的API（为前台Angular等使用）





