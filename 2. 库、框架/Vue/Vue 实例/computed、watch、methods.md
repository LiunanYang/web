
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

# 计算属性computed vs 侦听属性watch
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
# 对比
类型
- computed、watch 是属性
    - computed 监听属性多个依赖项的变化
    - watch监听单个属性的变化执行回调函数
- methods 是方法，需要主动调用

返回值
- computed 的get方法里需要有返回值，表示属性依赖的结果
- watch 进行逻辑操作，没有返回值
- methods 看具体业务逻辑

缓存
- computed 求值结果会被缓存起来，方便下次使用，如果计算属性所依赖的任何数据，都没发生过变化，就不会对数据重新求值
- methods 在每次触发重新渲染，方法都会调用

