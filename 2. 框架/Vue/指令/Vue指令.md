### v-cloak
- 可以解决 插值表达式闪烁的问题
```
<style>
    [v-cloak]{
        display: none;
    }
</style>

<div id="app">
    <p v-cloak>{{msg}}</p>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    var vm = new Vue({
        el:'#app',
        data:{
             msg:'123'
        }
    })
</script>
```
### v-text
```
<div id="app">
        <p v-cloak>{{msg}}</p>
        <h4 v-text="msg"></h4>
    </div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    var vm = new Vue({
        el:'#app',
        data:{
             msg:'123'
        }
    })
</script>
```
- 默认 v-text 没有闪烁问题
- v-text 会覆盖元素中原本的内容，但是 插值表达式 只会替换自己的占位符，不会把整个元素的内容清空

### v-html
- 会覆盖元素中原本的内容
- 把内容当做 html
```
<div id="app">
    <div >{{msg2}}</div>
    <div v-text="msg2"></div>
    <div v-html="msg2"></div>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
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
### v-bind 
- 是Vue中提供的用于绑定属性的指令
- v-bind 只能实现数据的单向绑定 ,M->V,无法实现数据的双向绑定
```
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
- v-bind 中可以写合法的 JS 表达式
- v-bind 可以被简写为 " ："
```
 <input type="button" value="按钮" v-bind:title="mytitle">
 等于
 <input type="button" value="按钮" :title="mytitle"> 
```
### v-on
- v-on 事件绑定机制
```
<div id="app>
    <input type="button" value="点击" :title="mytitle" v-on:click="say">
</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
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
> 缩写是 @ 

### v-if
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

### v-for 指令
- 可以绑定数组的数据来渲染一个项目列表
```
<div id="app-4">
    <ol>
        <li v-for="todo in todos">
            {{ todo.text }}
        </li>
    </ol>
</div>
var app4 = new Vue({
    el:"#app-4",
    data:{
        todos:[
            { text:'学习js' },
            { text:'学习Vue' },
            { text:'今天真开心呀' }
        ]
    }
})
app4.todos.push({ text:'猪'})
```