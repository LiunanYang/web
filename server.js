
// let http = require('http');
// let url = require('url');
// let querystring=require('querystring');//操作参数模块

// let str='[{"name":"zhangSan","password":"999"},{"name":"yangliunan","password":"123"}]';

// function onRequest(request, response){
//   let urlStr = url.parse(request.url);
//   let param=querystring.parse(urlStr.query);
//   console.log("收到请求.");
//   response.writeHead(200,{"Content-Type":'text/plain','charset':'utf-8','Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods':'PUT,POST,GET,DELETE,OPTIONS'});//可以解决跨域的请求
//   // console.log(param);  //输出  { name: '鲁班大师', iq: '250' }
//   response.write(str);
//   response.end();
// }
// http.createServer(onRequest).listen(8888); 

// function Product(name, price) {
//   this.name = name;
//   this.price = price;
// }
// function Food(name, price) {
//   // Product.call(this, name, price);
//   Product();
// 	this.category = 'food';
// }
// console.log(new Food('cheese', 5).name);  //cheese

  // let a = 12
  // let b = a
  // b = 13
  // console.log(a)  //12

  // let a = {n:12}
  // let b = a
  // b['n'] = 13
  // console.log(a.n)  //13

  // let a = {n:12}
  // let b = a
  // b = {n:13}
  // console.log(a.n)  //12

let arr=[1,20,88,3,4,5,[6,7,[8,9,[10]]]]
function flat1(arr){
  let res = []  
  for(let item of arr){
    if(Array.isArray(item)){
      // res = res.concat(flat(arr[i]))
      res.push(...flat1(item))
    }else{
      res.push(item)  
    }
  }
  return res
}
// console.log(flat1(arr).sort((a,b)=>a-b))

// Array.prototype.flat1 = flat
// console.log(flat1())
// function flat3(arr){
  // return 
  function flat3(arr){
    return arr.join(',').split(',').map(v =>parseInt(v));
    // return arr.toString().split(',').map(v =>parseInt(v));
  }
// }
console.log(flat3(arr))

// arr.reduce((prev,curv,i,list)=>{
//   return 
// },[])
