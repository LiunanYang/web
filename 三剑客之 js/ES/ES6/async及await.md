
## async及await的使用 & 与 Promise 的对比
```
<!-- 摇色子函数 -->
function shift(guess){
  return new Promise((resolve,reject)=>{
    let random = parseInt(Math.random()*6+1)
    if(random>3){
      if(guess === '大'){
        resolve(random)
      }else{
        console.log(`error`)
        reject(random)
      }
    }else{
      if(guess === '大'){
        console.log(`error`)
        reject(random)
      }else{
        resolve(random)
      }
    }
    setTimeout(()=>{
      resolve(random)
    },500)
  })
}
```
1.1 使用promise
```
new Promise((resolve,reject)=>{
  console.log(`start new Promise...`)
  resolve('大')
}).then(shift).then(res=>{
  console.log(`成功：${res}`)
}).catch(res=>{
  console.log(`失败：${res}`)
})
```
1.2 使用 async 和 await
```
async function test(){
  try{
    // 把 await 及获取它的操作放在 try 里
    let n = await shift('大')
    console.log(`猜对了：${n}`)
  }catch(error){
    // 失败的操作放在 catch 里
    console.log(`猜错了：${error}`)
  }
}
```
2.1 拿到多个Promise 都结束的结果（使用Promise）
```
Promise.all([shift('大'),shift('大')]).then((res)=>{
      console.log(res)
    },(err)=>{console.log(err)})
```
2.2 拿到多个Promise 都结束的结果（使用 async 和 await）
```
async function test(){
  try{
    let n = await Promise.all([shift('大'),shift('大')])
    console.log(`成功：${n}`)
  }catch(error){
    console.log(`失败：${error}`)
  }
}
test()
```

## async 函数的返回值
- async 函数会返回一个 Promise对象，并且 Promise 对象的状态值是 resolved

1. 如果没有在 async 函数中写 return，那么 Promise 对象 resolve 的值是 undefined
2. 写了 return ，那么 return 的值就是作为成功时传入的值

## await 等到之后

右边表达式的结果就是 await 要等的东西。

分两种情况：
- 1.不是 promise 对象。await 会阻塞后面的代码，先执行 async 外面的同步代码，同步代码执行完，再回到 async 内部，把这个非 promise 的东西，作为 await 表达式的结果。
- 2. 是 Promise 对象。await 会暂停 async 后面的代码，先执行 async 外面的同步代码，等着 Promise 对象 fulfilled，然后把 resolve 的参数作为 await 表达式的运算结果。

## 执行流程 同步/异步
- 如果 async 里的代码都是通过不得，那么函数被调用就会同步执行
- 如果在 await 后面接的这个 promise 都是同步的，后面的 promise 都会同步执行，但是拿到这个值还要等待，【划重点】如果 promise 没有一个成功的值传入，对 await 来说就算是失败了，下面的代码就不会执行。所以不管 await 后面的代码时同步还是异步，await 总是需要时间，从右往左执行，先执行右边的代码，执行完后，发现有 await 关键字，于是让出线程，阻塞代码


**例子1**
```
function fn(){
  return new Promise(resolve=>{
    console.log(1)
  })
}
async function f1(){
  await fn()
  console.log(2)
}
f1()
console.log(3)
// 1 3
```
解析：fn是属于同步的，所以先打印出1，然后是3，但是因为没有resolve结果，所以await拿不到值，因此不会打印2

**例子2**
```
function fn(){
  return new Promise(resolve=>{
    console.log(1)
    resolve()
  })
}
async function f1(){
  await fn()
  console.log(2)
}
f1()
console.log(3)
//   1 3 2
```
解析：有 resolve 说明 promise 成功了，所以 await 能拿到结果