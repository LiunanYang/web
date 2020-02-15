# Generator

|思考|内容
|--|--
定义| 是一种特殊的函数，可以返回多次
背景| 传统的 javascript 异步是通过回调函数实现，但它有两个明显的缺点：见(1)
用法| generator由 function* 定义，除了return语句还可以用 yield 返回数次,见(2)
场景| [generator 使用场景](https://www.jianshu.com/p/c7f4129d7794)；异步、自增ID


## (1)回调函数实现异步的两个缺点
1. **缺乏信任性**：我们发起 ajax 请求的时候把回调函数交给第三方处理，期待它能执行函数，实现正确的功能。**解决**：Promise
2. **缺乏顺序性**：回调函数嵌套使用，执行顺序不符合我们大脑的逻辑，嵌套较深耦合性强，修改和调试代码也不方便。**解决**：Generator，以一种看似顺序、“同步”的方式实现异步控制流程，增强代码可读性。


## (2)调用Generator对象有两个方法
1. 不断地调用 generator 对象的 next() 方法，每次遇到 yield x，就返回一个对象 {value:x，done：true/false} ，然后“暂停”。返回的value 就是 yield 的返回值，done 表示 这个 generator 是否执行结束。如果 done 为 true，则 value 就是 return 的返回值。
2. 直接用 for... of 循环迭代 generator 对象，不需要自己判断 done

例一：Generator 实现斐波那契函数，一次返回一个数
```
function* fib1(x){
  var a = 0,b=1,n=0,t
  while(n<x){
    yield a  
    t = a
    a = b  
    b = t+b
    n++
  }
  return 
}
var f = fib1(10)
console.log(f.next())
console.log(f.next())
console.log(f.next())
console.log(f.next())

// for(var x of fib1(10)){
//   console.log(x)
// }

```

例二：使用 generator 实现一个自增的 ID
```
function* next_id(){
  for(var i = 1;i<1000;i++){
    yield i
  }
}
var f = next_id()
console.log(f.next())
console.log(f.next())
```