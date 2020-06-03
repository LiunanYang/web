 ## 绑定 class 属性设置样式
```html
<style>
    .red{
        color: red;
    }
    .thin{
        font-weight: 200;
    }
    .italic{
        font-style: initial;
    }
    .active{
        letter-spacing: 0.5em;
    }
</style>
<script>
    var vm = new Vue({
        el:"#app",
        data:{
            flag:false,
            classObj:{red:true,thin:false,italic:true,active:true}
        }
    })
</script>
```

### 1. 给 class 绑定类名数组
```html
<h1 :class="['red','thin']"></h1>
```

### 2. 在绑定的数组中使用三目表达式代替类名
```html
<h1 :class="['red' , flag?'active':'']"></h1>
```
### 3. 在绑定的数组中使用对象代替类名
- 提高代码的可读性
```html
<h1 :class="['red','thin',{'active':flag}]"></h1>
```
### 4. 直接绑定对象 类名及其标识符 
- 属性名是类名，对象的属性可带引号，也可不带引号
- 属性值是一个标识符
```html
<h1 :class="{red:true,thin:false,italic:true,active:true}"></h1>

<h1 :class="classObj"></h1>
``` 

## 绑定 style 属性设置内联样式
``` javascript
data:{
    styleObj1:{ color:'red','font-weight':200 },
    styleObj2:{ 'letter-spacing':'0.5em' }
}
```

### 1. 直接绑定对象 样式名值对
```
<h1 :style="{ color:'red','font-weight':200 }">这是一个 h1</h1>
```
### 2. 绑定单个样式对象
```
<h1 :style="styleObj1">这是一个 h1</h1>
```
### 3. 绑定数组-多个样式对象
```
<h1 :style="[styleObj1,styleObj2]">这是一个 h1</h1>
```

## 遇到的问题
1. 使用Vue绑定的样式，在渲染前会短暂的看到原本的样式

解决：引入 vue.js 文件的 script 标签放在了html的下面，应该放在页面的head中，优先加载。
