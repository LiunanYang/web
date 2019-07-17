```
<div id="app">
    <input type="button" value="获取元素" @click="getEle" ref="mybtn">
    <h3 ref="myh3">今天天气真好！</h3>
    <hr>
    <!-- 组件也可以用 ref 引用 -->
    <!-- 可以获取到 data 和 methods -->
    <login ref="mylogin"></login>
</div>

<script>
    var app = new Vue({
        el:"#app",
        data:{},
        methods:{
            getEle(){
                // ref 是英文单词【reference 引用】    
                console.log(this.$refs.myh3.innerText)
                console.log(this.$refs.mylogin.msg)
                this.$refs.mylogin.show()
            }
        },
        components:{
            login:{
                template:'<h2>登录组件</h2>',
                data(){
                    return {
                        msg:'组件上的字'
                    }
                },
                methods:{
                    show(){
                        alert('组件上的show方法')
                    }
                }
            }
        }
    })
</script>
```