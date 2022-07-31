# **计算属性**
模板里的花括号表达式建议只进行简单运算，在模板中放入太多逻辑会难以维护。复杂逻辑应使用计算属性。

computed属性不需要在 data 中定义。

计算属性默认只有 getter，也可以自己定义 setter 函数。改变计算属性的值时，setter 会被调用。

- **注意1**：引用计算属性的时候，不要加()去调用，直接把它当作普通属性去使用就好了
- **注意2**：只要计算属性的 getter function 内部，用到的任何 data 中的数据发生了变化，就会立即重新计算这个计算属性的值
- **注意3**：计算属性的求值结果，会被缓存起来，方便下次直接使用；如果计算属性方法中，所依赖的任何数据，都没发生过变化，则不会对数据重新求值

```js
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
  }
})
```
