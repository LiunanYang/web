- vue.js 的核心是 一个允许采用简洁的模板语法来声明式地将数据渲染进DOM的系统
- 响应式

## 框架和库的区别
- 框架：是一套完整的解决方案；对项目的入侵较大，项目如果需要更换框架，则需要架构整个项目。
- 库（插件）：提供某个小功能，对项目的侵入性较小，如果某个库无法完成某些需求，可以很容易切换其他库实现需求。

## Node（后端）中的MVC 与 前端中的MVVM之间的区别
- MVC是后端的分层开发概念
- MVVM是前端视图层的分层开发概念，主要关注于视图层分离，也就是说：MVVM把前端的视图层分成了三部分 -> Model，View，VM ViewModel。
    - VM 是 MVVM 思想的核心，因为 VM 是 M 和 V 之间的调度者

## Vue.js基本代码 和 MVVM之间的对应关系
```
<!-- 将来new的Vue实例会控制这个元素中的所有内容 -->
<!-- Vue 实例所控制的元素区域，就是 MVVM 中的 V-->
<div id="app">
    <p>{{msg}}</p>
</div>

<script>
    // 当我们导入包之后，在浏览器的内存中，就多了一个Vue构造函数
    // 注意：我们new出来的这个vm对象，就是MVVM 中的VM 调度者
    var vm = new Vue({
        // 表示当前我们 new 的这个 Vue 实例，要控制页面上的哪个区域
        el:'#app',
        // data 属性中，存放的是 el 中要用到的数据
        // 这里的data 就是 MVVM 中的M
        data:{
            msg:'欢迎学习Vue'
        }
    })
</script>
```
> 前端Vue之类的框架，不提倡我们去手动操作DOM元素了。

## 指令基本使用
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