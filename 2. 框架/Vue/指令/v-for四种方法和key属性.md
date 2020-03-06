# v-for 四种用法
## 1.v-for循环普通数组
```
<div id="app">
    <p>{{list[0]}}</p>
    <p>{{list[1]}}</p>

    <h2>v-for</h2>
    <p v-for="item in list">{{item}}</p>

    <p v-for="(item,i) in list">{{i}}---{{item}}</p>

</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    var app = new Vue({
        el:"#app",
        data:{
            list:[1,2,3,4,5,6]
        }
    })
</script>
```
输出是：
```
1
2
v-for
1
2
3
4
5
6
0---1
1---2
2---3
3---4
4---5
5---6
```

## 2.v-for 循环对象数组
```
<div id="app">
    <p v-for="user in list">{{user.id}}--{{user.name}}</p>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    var app = new Vue({
        el:"#app",
        data:{
            list:[
                {id:1,name:"yln1"},
                {id:2,name:"yln2"},
                {id:3,name:"yln3"},
                {id:4,name:"yln4"}

            ]
        }
    })
</script>
```
输出是：
```
1--yln1
2--yln2
3--yln3
4--yln4
```

## 3.v-for 循环对象
```
<div id="app">
    <!-- 在遍历对象身上的键值对的时候，除了有 val、key ，还有第三个值 索引  -->
    <p v-for="(val,key) in user">{{val}}--{{key}}</p>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    var app = new Vue({
        el:"#app",
        data:{
            user:{
                id:1,
                name:"柳楠",
                gender:"男"
            }
        }
    })
</script>
```
输出是：
```
1--id
柳楠--name
男--gender
```

## 4.v-for 迭代数字
> 注意：使用v-for迭代数字，起始值从1开始

```
<div id="app">
    <!-- in后面我们放过 普通数组、对象数组、对象，还可以放数字 -->
    <p v-for="count in 10">这是第 {{count}} 次循环</p>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    var app = new Vue({
        el:"#app",
        data:{

        },
        methods:{

        }
    })
</script>
```
输出是：
```
这是第 1 次循环
这是第 2 次循环
这是第 3 次循环
这是第 4 次循环
(....)
```

## v-for 的 key
> 在2.2.0+ 版本里，当在组件中使用 v-for 时，key现在是必须的

>当Vue.js 用v-for 正在更新已渲染过的元素列表时，它默认用**"就地复用"**策略。如果数据项的顺序被改变，Vue 将**不是移动DOM 元素来匹配数据项的顺序**，而是**简单复用此处每个元素**，并且确保它在特定索引下显示已被渲染过的每个元素。
>
>为了给Vue一个提示，**以便它能跟踪每个节点的身份，从而重用和重新排序现有元素**，你需要为每项提供一个唯一的 key 属性

- 注意：v-for 循环的时候，key属性只能属于 number或string
- 注意：key在使用的时候，必须使用 v-bind 属性绑定的形式，指定 key的值
- 在组件中使用 v-for循环时，或者在一些特殊情况中，如果v-for有问题，必须在使用 v-for 的同时，指定唯一的 字符串\数字 类型 ：key值

```
<div id="app">
    <div>
        <label for="">Id:
            <input type="text" v-model="id">
        </label>
        <label for="">Name:
            <input type="text" v-model="name">
        </label>
        <input type="button" value="添加" @click="add">
    </div>

    <p v-for="item in list" :key="item.id">
        <input type="checkbox" name="" id="">
        {{item.id}}--{{item.name}}
    </p>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    var app = new Vue({
        el:"#app",
        data:{
            id:'',
            name:'',
            list:[
                {id:1,name:'李斯'},
                {id:2,name:'嬴政'},
                {id:3,name:'赵高'},
                {id:4,name:'韩非'}
            ]
        },
        methods:{
            add(){
                // this.list.push({id:this.id,name:this.name})

                // 如果此时选中一个复选框再点击添加，复选框则会选错
                this.list.unshift({id:this.id,name:this.name})                    
            }
        }
    })
</script>
```