# 钩子函数
一个指令定义对象提供了这几个钩子函数
- `bind`：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
- `inserted`：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
- `update`：所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新。
- `componentUpdated`：指令所在组件的 VNode 及其子 VNode 全部更新后调用。
- `unbind`：只调用一次，指令与元素解绑时调用。
# 钩子函数参数
- el：指令所绑定的元素，可以用来直接操作 DOM。
- binding：一个对象，包含以下 property：
    - name：指令名，不包括 v- 前缀。
    - value：指令的绑定值，例如：v-my-directive="1 + 1" 中，绑定值为 2。
    - oldValue：指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。
    - expression：字符串形式的指令表达式。例如 v-my-directive="1 + 1" 中，表达式为 "1 + 1"。
    - arg：传给指令的参数，可选。例如 v-my-directive:foo 中，参数为 "foo"。
    - modifiers：一个包含修饰符的对象。例如：v-my-directive.foo.bar 中，修饰符对象为 { foo: true, bar: true }。
- vnode：Vue 编译生成的虚拟节点。移步 VNode API 来了解更多详情。
- oldVnode：上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用。
> 除了 el 之外，其它参数都应该是只读的，切勿进行修改。如果需要在钩子之间共享数据，建议通过元素的 dataset 来进行。
# 动态指令参数
指令的参数可以是动态的。例如，在 `v-mydirective:[arg]="value"` 中，arg 参数可以根据组件实例数据进行更新。

可以传参，可以传值
```html
<p> v-color:[align]>{{name}} </p>
```
```javascript
directives:{
    color:{
        bind:function(el,binding,vNode,oldVnode){
        el.style.fontSize = "40px"
        el.style.textAlign = binding.arg
        }
    }
}
```

# 自定义指令
## 自定义全局指令 
- 参数一：指令的名称，注意：在定义的时候，指令的名称前面，不需要加 v- 前缀;在调用时，必须在指令的名称前 加 v- 前缀
- 参数二：是一个对象，这个对象有一些指令相关的钩子函数，这些函数可以在特定的阶段执行相关的操作
```javascript
Vue.directive('focus',{
    inserted:function(el){ 
        el.focus()                
    }
})
```
## 自定义局部指令
```javascript
new Vue({
    // ...
    directives:{
        focus:{
            inserted:function(el){
                el.focus
            }
        }
    }
})
```

# 实践
**实践**：自定义获取焦点指令 v-focus
- 在元素刚绑定了指令的时候，还没有插入到dom中去，这时候调用 focus 没有作用，元素在插入dom之后才能获取焦点，所以获取焦点的操作要写到 inserted 钩子函数中
```javascript
<input type="text" v-model=keywords id="search" v-focus>
Vue.directive('focus',{
    inserted:function(el){ 
        el.focus()                
    }
})
```
**实践**：定义一个设置字体颜色的指令 v-red
- 只要通过指令给元素绑定了样式，不管这个元素有没有被插入到页面中去，这个元素肯定有了一个内联的样式，将来元素显示到页面中去时，浏览器的渲染引擎必然会解析样式，应用给这个元素
- **和样式相关的操作，一般都可以在bind中执行**
```javascript
<input type="text" v-model=keywords id="search" v-red>

Vue.directive('color',{
    bind:function(el){
        el.style.color = 'red'
    }
})
```

