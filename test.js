var person = {
  name:"liunan",
  age:20
}

Object.defineProperty(person,"fullname",{
  get: function(){
    return `${this.name}Yang`
  },
  set:function(newValue){
    this.name=newValue
  }
})
console.log(person.fullname);
person.fullname="aaa"
console.log(person.fullname);
console.log(person.name);
