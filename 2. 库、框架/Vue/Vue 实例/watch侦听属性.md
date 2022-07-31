# **watch**
- watch 属性变化会触发 watch 中对应的处理函数
- watch 属性不能是一个未定义的属性，可以是 data 中定义的数据，或者父组件传的props属性，或者路由`$query.path`
- watch 属性的处理函数 function 参数为:(newValue,oldValue)
```html
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

### watch 监视路由地址的变化
```html
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
        template:'<h3>这是登录子组件</h3>'
    }
    var register = {
        template:'<h3>这是注册子组件</h3>'
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
