## Object类型
```
var 0 = new Object()
```
Object 的每个实例都具有下列的属性和方法
- constructor: 保存着用于创建当前对象的函数
- hasOwnProperty(propertyName):用于检查给定的属性在当前对象实例中是否存在(而不是在实例的原型中)。参数必须以字符串形式指定。
- isPrototypeOf(object):用于检查传入的对象是否是传入对象的原型
- propertyIsEnumerable(propertyName):用于检查给定的属性是否能够使用for-in语句来枚举。作为参数的属性名必须以字符串形式指定。
- toLocaleString():返回对象的字符串表示，该字符串与执行环境的地区对应。
- toString():返回对象的字符串表示
- valueOf():返回对象的字符串、数值或布尔值表示。通常与toString()方法的返回值相同。

# Object类型
### 创建方式
- 使用new操作符后跟Object构造函数
```
var person = new Object()
person.name = "tom"
```
- 使用对象字面量表示法
```
var person = {
    name:"tom",
    age:29
}
```
使用对象字面量语法时，如果留空其花括号，则可以定义只包含默认属性和方法的对象
```
var person = {} //new Object() 相同
```
如果属性名中包含导致语法错误的字符，或者属性名使用的是关键字或保留字，也可以使用方括号表示法。
```
person["first name"] = "tom"
```
例：
```
  function test(person) {
    person.age = 26
    person = {
      name: 'yyy',
      age: 30
    }
    return person
  }
  var p1 = {
    name: 'yck',
    age: 25
  }
  
  var p2 = test(p1)
  console.log(p1) // name:'yck',age:26
  console.log(p2) // name:'yyy',age:30
```