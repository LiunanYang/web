# 绑定class属性设置样式
```
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

## 方式一，传递一个数组，用 v-bind 实现数据绑定
```
<h1 :class="['red','thin']"></h1>
```

## 方式二 在数组中使用三目表达式
```
<h1 :class="['red' , flag?'active':'']"></h1>
```
## 方式三 在数组中使用对象来代替三元表达式
- 提高代码的可读性
```
<h1 :class="['red','thin',{'active':flag}]"></h1>
```
## 方式四 v-bind 绑定 ( {} )
- 对象的属性名是类名，对象的属性可带引号，也可不带引号
- 属性的值是一个标识符
```
<h1 :class="{red:true,thin:false,italic:true,active:true}"></h1>

<h1 :class="classObj"></h1>
``` 

# 使用内联样式,绑定style
```
data:{
    styleObj1:{ color:'red','font-weight':200 },
    styleObj2:{ 'letter-spacing':'0.5em' }
}
```

## 1. 直接样式名值对
```
<h1 :style="{ color:'red','font-weight':200 }">这是一个 h1</h1>
```
## 2. 单个样式对象
```
<h1 :style="styleObj1">这是一个 h1</h1>
```
## 3. 多个样式对象
```
<h1 :style="[styleObj1,styleObj2]">这是一个 h1</h1>
```
