// Promise.resolve('123').then(res=>{
//   console.log(res)
// })
// process.nextTick(()=>{
//   console.log('nextTick')
// })

// setTimeout(() => {
//   console.log('setTimeout')
// },0);
// setImmediate(()=>{
//   console.log('setImmediate')
// })

// setTimeout 和 setImmediate 执行顺序不固定，取决于 node 的准备时间

// 严格控制执行顺序
// const fs = require('fs')
// fs.readFile(__dirname,()=>{
//   setTimeout(()=>{
//     console.log('setTimeout')
//   },0)
//   setImmediate(()=>{
//     console.log('setImmediate')
//   })
// })

//  console.time("start")
//     setTimeout(()=>{
//       console.log(2)
//     },10)
//     setImmediate(()=>{
//       console.log(1)
//     })
//     new Promise(resolve=>{
//       console.log(3)
//       resolve()
//       console.log(4)
//     }).then(()=>{
//       console.log(5)
//       console.timeEnd('start')
//     })
//     console.log(6)
//     process.nextTick(()=>{
//       console.log(7)
//     })
//     console.log(8)

var express = require('express')

// 作为http服务
var app = express()
app.use(express.static(__dirname))
app.listen(90)

// 91端口服务 返回数据
var app2 = express()
// 方法1：修改响应头
app2.get("/",function(req,res){
  res.header("Access-Control-Allow-Origin","*")
  res.send("你好")
})
// 方法2： jsonp
app2.get("/",function(req,res){
  var funcname = req.query.callback
  res.send(`${funcname}('你好')`)
  // f('你好')
})

app2.listen(91)
