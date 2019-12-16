# v-if 与 v-show
- **v-if** 的特点：每次都会重新删除或者创建元素
    - v-if 有较高的切换性能消耗

- **v-show**的特点：每次不会重新进行DOM的删除和创建操作，只是切换了元素的 display：none 样式
    -  v-show有较高的初始渲染消耗 

> 如果元素涉及到频繁的切换，最好不要使用 v-if，而是使用 v-show
>
> 如果一个元素可能永远也不会被显示出来被用户看到，则推荐使用 v-if

```
<div id="app">
    <!-- <input type="button" value="点击" @click="toggle"> -->
    <input type="button" value="点击" @click="flag=!flag">

    <h3 v-if="flag">这是用v-if控制的元素</h3>
    <h3 v-show="flag">这是用v-show控制的元素</h3>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    var app = new Vue({
        el:"#app",
        data:{
            flag:true
        },
        methods:{
            toggle(){
                this.flag = !this.flag
            }
        }
    })
</script>
```
没点按钮前（显示）:
```
<h3>这是用v-if控制的元素</h3>
<h3>这是用v-show控制的元素</h3>
```
点了按钮 隐藏后:
```
<!---->
<h3 style:"display:none;">这是用v-show控制的元素</h3>
```

# v-else-if

```
<div v-if="type === 'A'">
    A
</div>
<div v-else-if="type === 'B'">
    B
</div>
<div v-else-if="type === 'C'">
    C
</div>
<div v-else>
    Not A/B/C
</div>
```
## v-else渲染可能有延迟
延迟原因：v-if 切换的时候是重新渲染DOM结构的

解决方法：
    
1. 加定时器
2. Vue.nextTick()，在下次DOM更新循环结束后执行