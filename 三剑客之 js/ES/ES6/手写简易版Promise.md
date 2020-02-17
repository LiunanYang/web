```
  /**实现简易版 Promise*/
  // 创建三个常量表示状态，便于开发和后期维护
  const PENDING = 'pending'
  const RESOLVED = 'resolved'
  const REJECTED = 'rejected'

  function MyPromise(fn){
    // 创建常量 that ，代码可能会异步执行，用于获取正确的 this 对象
    const that = this
    // 一开始 Promise 的状态应该是 pending
    that.state = PENDING
    // value 变量用于保存 resolve 或者 reject 中传入的值
    that.value = null
    // resolvedCallbacks 和 rejectedCallbacks 用于保存 then 中的回调，当执行完 Promise 时状态可能还是等待中，这时候应该把 then 中的回调保存起来用于状态改变时使用
    that.resolvedCallbacks = []
    that.rejectedCallbacks = []

    function resolve(value){
      if(that.state === PENDING){
        that.state = RESOLVED
        that.value = value
        that.resolvedCallbacks.map(cb=>cb(that.value))
      }
    }
    function reject(value){
      if(that.state === PENDING){
        that.state = REJECTED
        that.value = value
        that.rejectedCallbacks.map(cb=>cb(that.value))
      }
    }
    // 实现如何执行 Promise 中传入的函数
    try{
      // 执行传入的参数，并将之前两个函数当做参数传进去
      fn(resolve,reject)
    }catch(err){
      // 执行过程中可能出现错误，需要捕获错误并执行 reject 函数
      reject(err)
    }
  }

  // 实现 then 函数
  MyPromise.prototype.then = function(onFulfilled,onRejected){
    const that = this
    // 判断两个参数是否为函数类型，若不是，创建一个函数赋值给对应参数
    onFulfilled = typeof onFulfilled ==='function'? onFulfilled :v=>v
    onRejected = typeof onRejected ==='function' 
      ? onRejected
      : r=>{
        throw r
      }
    // 接下来是判断状态的逻辑。当状态不是等待态时，就去执行相应的函数；是等待态，就往回调函数中 push 函数
    if(that.state === PENDING){
      that.resolvedCallbacks.push(onFulfilled)
      that.rejectedCallbacks.push(onRejected)
    } 
    if(that.state === RESOLVED){
      onFulfilled(that.value)
    }
    if(that.state === REJECTED){
      onRejected(that.value)
    }
  }

  new MyPromise((resolve,reject)=>{
    resolve(2)
  }).then(res=>{
    console.log(res)
  })
```

在写 then 函数时遇到了一个问题，将 then 赋值为了箭头函数，导致 then 函数没有效果。

解析：【this指向问题】
- 在 ES5 中，函数作为对象的方法调用时， this 指向的是调用的对象
- 在 ES6 箭头函数中，箭头函数没有自己的 this，它的 this 是继承而来，默认指向定义它时，它所处的对象，而不是执行时的对象，如果没有，就会一层层网上找，直到 window。 