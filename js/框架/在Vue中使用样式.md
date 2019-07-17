## 通过class属性绑定的形式未元素设置class类样式
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

<div id="app">
    <h1 class="red thin">这是一个很大的h1</h1>
    <!-- 第一种使用方式，直接传递一个数组，用 v-bind 实现数据绑定 -->
    <h1 :class="['red','thin']">这是一个很大的h1</h1>
    <!-- 第二种 在数组中使用三目表达式-->
    <h1 :class="['red','thin',flag?'active':'']">这是一个很大的h1</h1>
    <!-- 第三种 在数组中使用对象来代替三元表达式，提高代码的可读性-->
    <h1 :class="['red','thin',{'active':flag}]">这是一个很大的h1</h1>
    <!-- 第四种 class使用 v-bind 绑定对象的时候，对象的属性名是类名，对象的属性可带引号，也可不带引号；属性的值是一个标识符 -->
    <h1 :class="{red:true,thin:false,italic:true,active:true}">这是一个很大的h1</h1>
    <h1 :class="classObj">这是一个很大的h1</h1>

</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    var vm = new Vue({
        el:"#app",
        data:{
            flag:false,
            classObj:{red:true,thin:false,italic:true,active:true}
        },
        methods:{

        }
    })
</script>
```

## 使用内联样式
```
<div id="app">
    <!-- 对象就是无序键值对的集合 -->
    <h1 :style="{ color:'red','font-weight':200 }">这是一个 h1</h1>
    <h1 :style="styleObj1">这是一个 h1</h1>
    <h1 :style="[styleObj1,styleObj2]">这是一个 h1</h1>


</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    var vm = new Vue({
        el:"#app",
        data:{
            styleObj1:{ color:'red','font-weight':200 },
            styleObj2:{ 'letter-spacing':'0.5em' }
        },
        methods:{

        }
    })
</script>
```
