# Promise

|思考|内容
|---|---
|是什么 |异步编程的一种解决方案：从语法上讲，promise是一个对象，封装异步操作的结果，通过状态和回调函数来管理这些异步操作；从本意上讲，它是承诺，承诺它过一段时间会给你一个结果。
|怎么用 | 可以使用Promise 的then和catch方法来注册回调函数，Promise状态变为成功，就执行then回调函数，Promise状态变为失败，就执行catch回调函数。在Promise 实现了链式调用，可以按照顺序处理异步操作的结果。每次调用 .then() 都会返回一个新的 Promise 对象，如果在 .then() 回调函数中使用的 return 语句，返回的值会成为新 Promise 的解析值。
|特点 | Promise 是promise有三种状态：pending(等待态)，fulfiled(成功态)，rejected(失败态)。状态一旦改变，就不会再变。创造promise实例后，它会立即执行。
|优点 | 在异步执行流程中，把执行代码和处理结果的代码清晰分离了，有助于解决回调地狱的问题。
|缺点 | Promise 无法从外部取消，一旦开始执行就不能停止。Promise 的错误处理需要回调函数来捕获。

```js
Promise.resolve(1).then(res=>{
    console.log(res)
    return 3   //包装成 Promise.resolve(3)
}).then(res=>{
    console.log(res)
})
```
生成0-2之间的随机数，如果小于1，则等待一段时间后返回成功，否则返回失败
```js
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
## Promise.all()
并行执行多个异步操作并等待都完成
- 使用：Promise.all()
- 同时执行多个任务，都完成后执行 then()，得到结果为一个数组，如果 Promise.all() 接收的 Promise 数组中有一个被 reject 了，整个 Promise.all() 的结果会立即变为 rejected，并将第一个被拒绝的 Promise 的错误传递给 .catch() 方法中的回调函数
- 场景：一个页面聊天系统，我们需要从两个不同的URL分别获得用户的个人信息和好友列表，两个任务可以并行执行
```js
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

## Promise.race()
多个异步操作中，只获取最新完成的那个的状态和结果
- 使用：Promise.race()
- 背景：有时候，多个异步任务是为了容错。
- 场景：同时像两个URL读取用户的个人信息，只需要获得先返回的结果。
- 结果：Promise 的 then() 将获得执行快的任务的结果，执行慢的任务仍然执行，但是执行结果将被丢弃。
```js
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