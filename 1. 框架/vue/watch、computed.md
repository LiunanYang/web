# watch
使用这个属性，可以监视 data 中指定数据的变化，然后触发这个 watch 中对应的 function 处理函数
```
 <div id="app">
    <input type="text" v-model="firstname" >+
    <input type="text" v-model="lastname" >=
    <input type="text" v-model="fullname">

</div>

<script>
    var app = new Vue({
        el:"#app",
        data:{
            firstname:'',
            lastname:'',
            fullname:''
        },
        watch:{
            // 使用这个属性，可以监视 data 中指定数据的变化，然后触发这个 watch 中对应的 function 处理函数
            'firstname':function(){
                this.fullname = this.firstname + '-' + this.lastname 
            },
            'lastname':function(){
                this.fullname = this.firstname + '-' + this.lastname 
            }
        }
    })
</script>
```
#### function 中有两个参数
- 第一个是 新的数据
- 第二个是旧数据

### watch 监视路由地址的变化
watch可以用于监视非DOM元素的变化
```
<div id="app">
    <router-link to='/login'>登录</router-link>
    <router-link to='/register'>注册</router-link>
    <!-- 路由容器 -->
    <router-view></router-view>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
<script>
    var login = {
        template:'<h3>这是登录子组件，这个组件是 奔波霸开发的。</h3>'
    }
    var register = {
        template:'<h3>这是注册子组件.</h3>'
    }
    var router = new VueRouter({
        routes:[
            { path:'/login',component:login },
            { path:'/register',component:register }
        ],
        linkActiveClass:'myactive'  //和激活相关的类
    })


    var app = new Vue({
        el:"#app",
        router,
        watch:{
            '$route.path':function(newVal,oldVal){
                console.log(newVal + '--' + oldVal)
                if(newVal === '/login'){
                    console.log('登录！')
                }else if(newVal === '/register'){
                    console.log('注册！')
                }
            }
        }
    })
</script>
```

# computed
-在 computed 中，可以定义一些属性，这些属性，叫做【计算属性】，计算属性的本质，就是一个方法，只不过,我们在使用这些计算属性的时候，是把它们的名称，直接当做属性来使用的；并不会把计算属性当做方法去调用

- **注意1**：计算属性，在引用的时候，一定不要加()去调用，直接把它当作普通 属性去使用就好了
- **注意2**：只要计算属性，这个 function 内部，所用到的 任何 data 中的数据发生了变化，就会立即重新计算这个计算属性的值
- **注意3**：计算属性的求值结果，会被缓存起来，方便下次直接使用；如果计算属性方法中，所以来的任何数据，都没发生过变化，则不会对数据重新求值

```
<div id="app">
    <input type="text" v-model="firstname" >+
    <input type="text" v-model="lastname" >=
    <input type="text" v-model="fullname">

    <p>{{ fullname }}</p>

</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    var app = new Vue({
        el:"#app",
        data:{
            firstname:'',
            lastname:''
            <!--不定义fullname-->
        },
        methods:{},
        computed:{
            'fullname':function(){
                return this.firstname + '-' + this.lastname
            }
        }
    })
</script>

```

# watch、computed、methods
- computed 属性的结果会被缓存，除非依赖的响应式属性变化才会重新计算。主要当作属性来使用；
- methods方法表示一个具体的操作，主要是写业务逻辑；
- watch 一个对象，键是需要观察的表达式，值是对应的会调函数。主要用来监听特定数据的变化，从而进行某些具体的业务逻辑操作；可以看做是‘computed’和‘methods’的结合体。