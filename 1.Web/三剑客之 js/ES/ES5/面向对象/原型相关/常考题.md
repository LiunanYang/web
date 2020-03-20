1.（虾皮笔试）
```
  var F = function(){ this.y=0 }
  F.prototype.x=1
  var a = new F()
  F.prototype ={
    x:2,
    y:3
  }
  var b = new F()

  console.log(a.x,a.y,b.x,b.y,F.x,F.y)   //1 0 2 0 undefined undefined
```
2.(虾皮笔试)
```
  function Animal(name){ this.name }
  let dog = new Animal('dog')

  dog.__proto__ === Animal.prototype  
  Animal.prototype.__proto__ === Object.prototype  
  Object.prototype.__proto__ === null   
  Function().prototype.__proto__ === Object.prototype 
```
3. (虾皮面试)
```
function Person(name) {
    this.name = name
}
let p = new Person('Tom');
p.__proto__
p.__proto__.__proto__
Person.__proto__
```
4.

```
function MyName(){

}
var mc = new MyName()
mc.age = 10
MyName.prototype.name = "我是原型对象中的name"

console.log(mc.name) //我是原型对象中的name
console.log("name" in mc)  //true
console.log(mc.hasOwnProperty("name"))  //false
console.log(mc.hasOwnProperty("age"))   //true

console.log(mc.hasOwnProperty("hasOwnProperty"))  //false
console.log("hasOwnProperty" in mc)  //true

console.log(MyName.__proto__ === Function.prototype) 
console.log(mc.__proto__.hasOwnProperty("hasOwnProperty"))	//false
console.log(mc.__proto__.__proto__.hasOwnProperty("hasOwnProperty"))  //true
console.log(mc.__proto__.__proto__.__proto__)  //null
console.log(mc.__proto__.__proto__ == Object.prototype)   //true
console.log(MyName instanceof Function) //true

```