## v-cloak
- 可以解决 插值表达式闪烁的问题
``` html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<style>
    [v-cloak]{
        display: none;
    }
</style>

<div id="app">
    <p v-cloak>{{msg}}</p>
</div>


<script>
    var vm = new Vue({
        el:'#app',
        data:{
             msg:'123'
        }
    })
</script>
```
## v-text
- 默认 v-text 没有闪烁问题
- 插值表达式只会替换自己的占位符，不会把整个元素的内容清空,v-text 会覆盖元素中原本的内容
```html
<div id="app">
    <p v-cloak>{{msg}}</p>
    <h4 v-text="msg"></h4>
</div>

<script>
    var vm = new Vue({
        el:'#app',
        data:{
             msg:'123'
        }
    })
</script>
```
## v-html
- 没有闪烁问题
- 会覆盖元素中原本的内容
- 把内容当做 html
```html

<div id="app">
    <div >{{msg2}}</div>
    <div v-text="msg2"></div>
    <div v-html="msg2"></div>
</div>

<script>
    var vm = new Vue({
        el:'#app',
        data:{
             msg:'123',
             msg2:'<h1>我是h1</h1>'
        }
    })
</script>
```
显示结果：
```
<h1>我是h1</h1>
<h1>我是h1</h1>
我是h1
```
## v-bind 
- 是Vue中提供的用于绑定属性的指令
- v-bind 只能实现数据的单向绑定,M->V,无法实现数据的双向绑定
- v-bind 中可以写合法的 JS 表达式
- v-bind 可以被简写为 " ："
```html
<div id="app-2">
  <span v-bind:title="message">
    鼠标悬停几秒钟查看此处动态绑定的提示信息！
  </span>
</div>

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: '页面加载于 ' + new Date().toLocaleString()
  }
})
```
## v-on
- v-on 事件绑定机制
- 简写为 @
```
<div id="app>
    <input type="button" value="点击" :title="mytitle" v-on:click="say">
</div>

<script>
    var vm = new Vue({
        el:'#app',
        // 在methods属性中定义了当前Vue实例所有可用的方法
        methods:{
            say:function(){
                alert("hello")
            }
        }
    })
</script>
```
## v-if
- 条件渲染。这块内容只会在指令的表达式为true值时渲染。
```
<div id="app-3">
    <p v-if="seen" v-on:click='seen=false' id="see">现在你看到我了</p>
</div>
var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
})
```

> Vue 提供一个强大的效果系统，可以在Vue插入、更新、移除元素时自动应用**过度效果**
## v-show
- 条件渲染
- v-show 不支持 `<template>` 元素，也不支持 v-else
## v-for 指令
- 列表渲染。
## v-model
- 表单输入绑定