# Promise

|思考|内容
|---|---
|是什么 |
|怎么用 | 
|特点 | 不能更改状态，构造函数内部内代码立即执行
|优点 | 在异步执行流程红，把执行代码和处理结果的代码清晰分离了（解决回调地狱的问题）
|缺点 | 无法取消Promise，错误需要通过回调函数捕获



Promise 实现了**链式调用**，也就是说每次调用 then 之后返回的都是一个 Promise，并且是一个全新的 Promise，原因也是因为**状态不可变**。如果你在 then 中 使用了 return，那么 return 的值会被 Promise.resolve() 包装
```
Promise.resolve(1).then(res=>{
    console.log(res)
    return 3   //包装成 Promise.resolve(2)
}).then(res=>{
    console.log(res)
})
```


**例1**：生成0-2之间的随机数，如果小于1，则等待一段时间后返回成功，否则返回失败
```
function test(resolve,reject){
    var timeOut = Math.random()*2
    console.log(`set timeout to:${timeOut} seconds.`)
    setTimeout(function(){
    if(timeOut<1){
        console.log(`call resolve()..`)
        resolve('200 OK')
    }else{
        console.log(`call reject()...`)
        reject(`timeOut in ${timeOut} seconds.`)
    }
    },timeOut*1000)
}
new Promise(test).then(res=>{
    console.log(`成功：${res}`)
}).catch(res=>{
    console.log(`失败：${res}`)
})
```
## Promise 串行执行若干异步任务
**例2**：进行一系列算数运算

疑问？:输出的时间间隔没整明白
```
function multiply(input){
    return new Promise((resolve,reject)=>{
    var time = new Date().getTime()
    console.log(`${input}x${input}：${time}`)
    setTimeout(resolve(input*input),3000)
    // resolve(input*input)
    })
}
function add(input){
    return new Promise((resolve,reject)=>{
    var time = new Date().getTime()
    console.log(`${input}+${input}：${time}`)
    setTimeout(resolve,1000,input+input)
    // resolve(input+input)
    })
}
var p = new Promise((resolve,reject)=>{
    var time = new Date().getTime()
    console.log(`start new Promise...${time}`)
    resolve(5)
})
p.then(multiply)
    .then(add)
    .then(multiply)
    .then(add)  
    .then(res=>{
    var time = new Date().getTime()
    console.log(`Got value：${res}, ${time}`)
    })
```

## Promise 并行执行异步任务
- 使用：Promise.all()
- 场景：一个页面聊天系统，我们需要从两个不同的URL分别获得用户的个人信息和好友列表，两个任务可以并行执行
- 结果：同时执行多个任务，都完成后执行 then(),得到结果为一个数组
```
var p1 = new Promise((resolve,reject)=>{
    setTimeout(resolve,500,'P1')
})
var p2 = new Promise((resolve,reject)=>{
    setTimeout(resolve,500,'P2')
})

Promise.all([p1,p2]).then(res=>{
    console.log(res)   //输出数组['P1','P2']
})
```

## Promise 只获取先返回的结果
- 使用：Promise.race()
- 背景：有时候，多个异步任务是为了容错。
- 场景：同时像两个URL读取用户的个人信息，只需要获得先返回的结果。
- 结果：Promise 的 then() 将获得执行快的任务的结果，执行慢的任务仍然执行，但是执行结果将被丢弃。
```
var p1 = new Promise((resolve,reject)=>{
setTimeout(resolve,700,'P1')
})
var p2 = new Promise((resolve,reject)=>{
    setTimeout(resolve,500,'P2')
})
Promise.race([p1,p2]).then(res=>{
    console.log(res)   //输出 P2
})
```