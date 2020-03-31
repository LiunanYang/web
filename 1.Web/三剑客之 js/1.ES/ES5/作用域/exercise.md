1. 箭头函数this指向 
```
window.name = "A"
const obj = {
  name:"B",
  getName:()=>{
    console.log(this.name);
  }
}
const fn = obj.getName
fn() //A
obj.getName()  //A 
fn.call({name:"C"})   //A
```
2.
```
window.name = "A"
const obj = {
  name:"B",
  getName(){
    console.log(this.name);
  }
}
const fn = obj.getName
fn()    //A
obj.getName()   //B
fn.call({name:"C"})  //C
```
3.
```
window.name = "A"
const obj = {
  name:"B",
  getName:function(){
    console.log(this.name);
  }
}
const fn = obj.getName
fn()    //A
obj.getName()   //B
fn.call({name:"C"})  //C
```