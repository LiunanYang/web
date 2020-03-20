- 当我们直接在页面中打印一个对象时，实际上是输出对象的toString（）方法的返回值
- 如果我们希望在输出对象时不输出【object object】，可以给对象添加一个toString（）方法

```
function Person(name,age,gender){
	this.name = name
	this.age = age
	this.gender = gender
}
var p1 = new Person("美楠",20,"女")

console.log(p1) 
console.log(p1.toString())

p1.toString = function(){
	return 'name：'+ this.name
}
console.log(p1)
console.log(p1.toString())

Person.prototype.toString = function(){
	return 'name：'+ this.name
}
var p2 = new Person("康康",20,"男")
console.log(p2.toString())
```