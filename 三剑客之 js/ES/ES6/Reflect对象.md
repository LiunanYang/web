- 是什么：ES6 中操作对象的API
- 为什么要设计Reflect：
1. 将Object对象内部的方法放到 Reflect 对象上，即从Reflect 对象上拿到 Object 内部方法
2. 将用Object方法报错的情况，改为返回 false
3. 让Object操作变成函数行为
4. 与Proxy 相辅相成，Proxy 上有的方法，在 Reflect 上一定有

## Reflect.apply()
即 ES5 中 Function.prototype.apply()的替身

- 参数
  - 第一个：需要执行的函数
  - 第二个：需要执行函数的上下文 this
  - 第三个：执行函数的参数列表
```
let fn = function(){
  this.attr = [0,1,2,3]
}
let obj = {}
Reflect.apply(fn,obj,[])
console.log(obj)
```

## Reflect.construct()

Reflect.construct 是实例化构造函数。和 new 构造函数一样。

参数：
- 第一个：构造函数
- 第二个：参数组成的数组或伪数组

```
var Fn = function(arg){
  this.args = [arg]
}
console.log( new Fn(1),Reflect.construct(Fn,[1]))
var d = Reflect.construct(Date, [1776, 6, 4]);
d instanceof Date; // true
d.getFullYear(); // 1776
```