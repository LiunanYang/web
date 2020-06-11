# watch
使用这个属性，可以监视 data 中指定数据的变化，然后触发这个 watch 中对应的 function 处理函数
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
