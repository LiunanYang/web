# v-model
- 使用 v-model 可以实现 表单元素和 Model中数据的双向数据绑定
- v-model 只能运用在 表单元素中
    - input(radio、text、address、emial) select、checkbox、textarea

```
<div id="app">
    <h4>{{msg}}</h4>
    <!-- v-bind 只能实现数据的单向绑定 ,M->V,无法实现数据的双向绑定 -->
    <input type="text" :value="msg">
    <!-- 使用 v-model 可以实现 表单元素和 Model中数据的双向数据绑定 -->
    <input type="text" v-model="msg">
</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    var vm = new Vue({
        el:"#app",
        data:{
            msg:"大家都是好学生"
        },
        methods:{}
    })
</script>
```

## 使用 v-model 实现计算器的案例
```
 <div id="app">
    <input type="text" v-model="n1">

    <select v-model="opt">
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
    </select>

    <input type="text" v-model="n2">

    <input type="button" value="=" @click="calc">

    <input type="text" v-model="result">
</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    var vm = new Vue({
        el:"#app",
        data:{
            n1:0,
            n2:0,
            result:0,
            opt:'+'
        },
        methods:{
            calc(){
                switch(this.opt){
                    case '+' :
                        this.result = parseInt(this.n1) + parseInt(this.n2)
                        break;
                    case '-' :
                        this.result = parseInt(this.n1) - parseInt(this.n2)
                        break;
                    case '*' :
                        this.result = parseInt(this.n1) * parseInt(this.n2)
                        break;
                    case '/' :
                        this.result = parseInt(this.n1) / parseInt(this.n2)
                        break;
                }
            }
        }
    })
</script>
```
投机取巧的方法 
```
calc(){
    var codeStr = 'parseInt(this.n1)' + this.opt + 'parseInt(this.n2)'
    this.result = eval(codeStr)
}
```

# 双向绑定的原理
Vue内部通过Object.defineProperty方法属性拦截的方式，把data对象里每个数据的读写转化成getter/setter，当数据变化时通知视图更新。