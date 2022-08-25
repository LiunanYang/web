// 1.
for(var i=0;i<5;i++){
  setTimeout(()=>{console.log(i)},1000)
}

// 2.
console.log(a)
console.log(b)
let a = 10
console.log(a)
a = function f(){}
console.log(a)
var b = 30
console.log(b)

// 3.
let length = 10
function fn(){
  console.log(this.length)
}
let obj = {
  length:5,
  method(fn){
    console.log(this.length)
    fn()
    arguments[0]()
  }
}
obj.method(fn,1)
  
// 4.
setTimeout(()=>{
  console.log('set1')
  new Promise(function (resolve){
    resolve()
  }).then(function(){
    new Promise(function(resolve){
      resolve()
    }).then(function(){
      console.log('then4')
    })
    console.log('then2')
  })
})
new Promise(function(resolve){
  console.log('pr1')
  resolve()
}).then(function(){
  console.log('then1')
})
setTimeout(function(){
  console.log('set2')
})
console.log(2)
new Promise(function(resolve){
  resolve()
}).then(function(){
  console.log('then3')
})
  