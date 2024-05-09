# async
async、await 可以使用同步的语法来写异步代码，使代码结构更清晰、易于阅读和维护

- async 声明一个函数是异步的，await 在函数内部等待一个Promise执行
- async 函数会返回一个 Promise对象，并且 Promise 对象的状态值是 resolved

```js
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
```
解析：fn是属于同步的，所以先打印出1，然后是3，但是因为没有resolve结果，所以await拿不到值，因此不会打印2

```js
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
```


