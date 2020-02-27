
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