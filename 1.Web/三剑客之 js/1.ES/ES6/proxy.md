Proxy 是 ES6 中新增的功能，可以用来自定义对象中的操作。

Vue3.0 将回使用 Proxy 来替换原本的 **Object.defineProperty** 来实现数据响应式。

使用 proxy 实现数据响应式，自定义 set 和 get 函数，在原本的逻辑中加入我们的函数逻辑，实现了在对对象任何属性进行读写时发出通告。
```js
let onWatch = (obj,setBind,getLogger) =>{
  let handler = {
    set(target,property,value,receiver){
      setBind(value,property)
      return Reflect.set(target,property,value)
    },
    get(target,property,receiver){
      getLogger(target,property)
      return Reflect.get(target,property,receiver)
    }
  }
  return new Proxy(obj,handler)
}
let obj = { a:1 }
let p = onWatch(
  obj,
  (v,property)=>{
    console.log(`监听到属性${property}改变为${v}`)
  },
  (target,property)=>{
    console.log(`'${property}'=${target[property]}`)
  }
)
p.a = 2
console.log(p.a)
```
