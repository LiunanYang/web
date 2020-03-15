# 实现 instanceof
1. 获取类型的原型
2. 然后获得对象的原型
3. 一直循环判断对象的原型是否等于类型的原型，直到对象原型为 null，因为原型链最终为 null
```
function myInstanceof(left,right){
  let prototype = right.prototype
  left = left.__proto__
  while(true){
    console.log(left)
    if(left===null || left===undefined){
      return false
    }
    if(prototype===left){
      return true
    }
    left=left.__proto__
  }
}
```
