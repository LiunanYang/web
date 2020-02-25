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

let http = require('http');
let url = require('url');
let querystring=require('querystring');//操作参数模块

let str='[{"name":"zhangSan","password":"999"},{"name":"yangliunan","password":"123"}]';

function onRequest(request, response){
  let urlStr = url.parse(request.url);
  let param=querystring.parse(urlStr.query);
  console.log("收到请求.");
  response.writeHead(200,{"Content-Type":'text/plain','charset':'utf-8','Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods':'PUT,POST,GET,DELETE,OPTIONS'});//可以解决跨域的请求
  console.log(param);  //输出  { name: '鲁班大师', iq: '250' }
  response.write(str);
  response.end();
}
http.createServer(onRequest).listen(8888);