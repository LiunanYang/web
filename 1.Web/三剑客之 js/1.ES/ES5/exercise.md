1.
```
let _name = 'MyName'
let obj = {}
Object.defineProperty(obj, 'name', {
    get(){
        return _name
    },
    set(value){
        _name = value
    }
})

obj.name = 'NewName'
console.log(_name)   
```
2.
```
  function getSomething(){
    setTimeout(function(){
        return 'hello'
    })
  }

  let something = getSomething()
  console.log(something)
```
3.
```
class A{
    constructor(){
        this.name = 'A'
    }
    sayName(){
        console.log(this.name)
    }
}
class B extends A{
    constructor(){
        super()
        this.name = 'B'
    }
}

let obj = new B()
console.log(obj.sayName())
```
4.
```
window.n = 'window name'
let obj = {
    n: 'obj name',
    sayN: () => {
        console.log(this.n)
    }
}

obj.sayN()
```
5.
```
window.n = 'window name'
let obj = {
    n: 'obj name',
    sayN(){
        console.log(this.n)
    }
}

let fn = obj.sayN
fn()
```