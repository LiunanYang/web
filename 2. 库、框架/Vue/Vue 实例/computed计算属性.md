# 计算属性
模板里的花括号表达式很便利，但是最好只用它进行简单运算，在模板中放入太多逻辑会使得难以维护。

对于复杂的逻辑，应使用 计算属性。

计算属性本质就是一个方法，计算属性默认只有 getter，也可以自己定义setter 函数。改变计算属性的值时，setter 会被调用。

- **注意1**：引用计算属性的时候，一定不要加()去调用，直接把它当作普通属性去使用就好了
- **注意2**：只要计算属性的getter function 内部，用到的任何 data 中的数据发生了变化，就会立即重新计算这个计算属性的值
- **注意3**：计算属性的求值结果，会被缓存起来，方便下次直接使用；如果计算属性方法中，所依赖的任何数据，都没发生过变化，则不会对数据重新求值

例子：
```javascript
var vm = new Vue({
  el: '#app',
  data: {
    msg: 'Hello',
    firstname:"yang",
    lastname:"liunan"
  },
  computed:{
    msgNew:function(){
      return this.msg + "~"
    },
    fullname:{
      get:function(){
        return this.firstname + " " + this.lastname
      },
      set:function(newValue){
      this.firstname = "first"
      this.lastname = "last"
    }
  }
})
```
# 计算属性缓存 vs 方法

```javascript
methods:{
    fullname:function(){
        return this.firstname + " " + this.lastname
    }
}
```
- 计算属性是基于属性的响应式依赖进行缓存的，只在相关响应式依赖发生改变的时候它们才会重新求值，只要没有改变的话，多次访问计算属性会立即返回执行之前的结果，不会再次执行计算。
- 而使用普通方法，每当触发重新渲染时，调用方法总会再次执行函数。

为什么需要缓存？
假设我们有一个性能开销比较大的计算属性 A，它需要遍历一个巨大的数组并做大量的计算。然后我们可能有其他的计算属性依赖于 A。如果没有缓存，我们将不可避免的多次执行 A 的 getter。

# 计算属性 vs 侦听属性
将计算属性与侦听属性举例比较

侦听属性的代码是命令式且重复的
```javascript
// 侦听属性 watch
watch: {
    firstName: function (val) {
        this.fullName = val + ' ' + this.lastName
    },
    lastName: function (val) {
        this.fullName = this.firstName + ' ' + val
    }
}
```
```javascript
// 计算属性 computed
computed: {
    fullName: function () {
        return this.firstName + ' ' + this.lastName
    }
}
```
# 总结
- 计算属性的结果会被缓存，除非依赖的响应式属性变化才会重新计算,主要当作属性来使用；
- methods 方法表示一个具体的操作，主要是写业务逻辑；
- 侦听属性中，键是需要观察的表达式，值是对应的会调函数。主要用来监听特定数据的变化，从而进行某些具体的业务逻辑操作,可以看做是"computed"和"methods"的结合体。

