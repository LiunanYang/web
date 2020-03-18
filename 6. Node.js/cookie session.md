# cookie和session

http 无状态->两次请求，http无法识别是同一个人

## cookie
- 在**浏览器**保存一些数据，每次请求都会带过来 
    - 不安全，
    - 大小有限(4k),空间非常小-省着用
    
1. 读取：用到组件 cookie-parse
2. 发送

发送cookie
```
server.use('/',function(req,res){
    res.cookie('user','blue',{path:'/aaa',maxAge:30*24*3600*1000})
    res.send('ok')
})
```
获取cookies
```
server.use(cookieParser())

server.use('/',function(req,res){
    console.log(req.cookies)
    res.send('ok')
})
```
删除cookie
```
server.use(cookieParser())
server.use('/',function(req,res){
    res.clearCookie('user')
    res.send('ok')
})
```
**签名**做不到加密，但是可以做到不被篡改
```
//签名
server.use(cookieParser())

server.use('/',function(req,res){
    req.secret='asdf'
    res.cookie('user','blue',{signed:true})
    res.send('ok')
})
```
对所有cookie都签名，非常浪费

解析签名后的cookie:
```
server.use(cookieParser('asdf'))

server.use('/',function(req,res){
    req.secret='asdf'  //在cookieParser中写字符串了就可以不用写secret
    res.cookie('user','blue',{signed:true})


    console.log("签名cookie："+req.signedCookies)
    console.log("无签名cookie："+req.cookies)

    res.send('ok')
})
```


### cookie-encrypter
对cookie加密&解密


## session
- 基于cookie实现的，存在于**服务器**
    - 安全、无限空间
    - 不能独立
    - 用到组件cookie-session，需要写在cookie-parser后

cookie中会有一个session的ID，服务器利用sessionId找到session文件、读取、写入

> 隐患：session劫持

删除session->delete
```
delete res.session
```

```
const express = require('express')
const cookieParser = require('cookie-parser')
const cookieSession = require('cookie-session')

var server = express()

var arr = []
for(var i = 0 ; i <100000 ;i++){
    arr.push('sig_' + Math.random())
}

server.use(cookieParser())
server.use(cookieSession({
    name:'sess',
    keys:arr,
    maxAge:2*3600*1000
}))

server.use('/',function(req,res){
    if(req.session['count']==null){
        req.session['count']=1
    }else{
        req.session['count']++
    }
    console.log(req.session)
    res.send('ok')
})
console.log('我爱你')
server.listen(8080)
```












