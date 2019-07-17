### 什么是生命周期
从Vue实例创建、运行、到销毁期间，总是伴随着各种各样的事件，这些事件，统称为生命周期。
### 生命周期钩子
就是声明周期事件的别名而已。
### 主要的声明周期函数分类
#### 创建期间的生命周期函数：
- beforeCreate：实例刚在内存中被创建出来，此时，还没有初始化好 data 和 methods属性
- created：实例已经在内存中创建OK，此时 data 和 methods 已经创建 OK，此时还没有开始 编译模板
- beforeMount：此时已经完成了模板的编译，但是还没有挂在到页面中
- mounted：此时，已经将编译好的模板，挂载到了页面指定的容器里显示
#### 运行期间的生命周期函数：
- beforeUpdate：状态更新之前执行此函数，此时 data 中的状态值是最新的，但是界面上显示的数据还是旧的，因为此时还没有开始重新渲染DOM节点。
- updated：实例更新完毕之后调用此函数，此时 data 中的状态值 和界面上显示的数据，都已经完成了更新，界面已经被重新渲染好了！
#### 销毁期间的生命函数周期：
- beforeDestroy：实例销毁之前调用。在这一步，实例仍完全可用。
- destroyed：Vue实例销毁后调用。调用后，Vue实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子例也会被销毁。

```
<div id="app">
    <input type="button" value="修改msg" @click="msg='no'">
    <h3 id="h3">{{ msg }}</h3>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    var app = new Vue({
        el:"#app",
        data:{
            msg:"ok"
        },
        methods:{
            show(){
                console.log("执行show方法")
            }
        },
        //这是我们遇到的第一个生命周期函数，表示实例完全被创建出来之前，会执行它
        beforeCreate(){ 
            console.log("beforeCreate:" + this.msg)  //undefined 
            //  注意：在beforeCreate 生命周期函数执行的时候, data 和 methods还没有被初始化
        },
        // 这是我们遇到的第二个生命周期函数
        created(){
            // 在 created 中 ，data 和 methods 都已被初始化好
            // 如果要调用 methods 中的方法，或者操作 data 中的数据，最早只能在created 中操作
            console.log("created:" + this.msg)  //ok
            this.show() //执行show方法
        },
        // 这是我们遇到的第三个生命周期函数
        // 表示模板已经编译完成了，但是尚未把模板渲染到页面中去
        beforeMount(){
            console.log(document.getElementById("h3").innerText)
            // 在beforeMount 执行的时候，页面中的元素，还没有被真正替换过来，只是之前写的一些模板字符串
        },
        // 这是遇到的第四个生命周期函数
        // 表示内存中的模板，已经真实的挂载到了页面中，用户可以看到渲染好的页面
        // 注意：mounted 是实例创建期间的最后一个生命周期函数，当执行完 mounted 就表示，实例已经被完全创建好了，此时，如果没有其他操作的话，这个实例，就在我们的内存中，一动不动
        // 如果要通过某些插件，操作页面上的dom节点，最早要在 mounted 中进行
        mounted(){
            console.log(document.getElementById("h3").innerText)
        },


        // 接下来是运行中的两个事件
        beforeUpdate(){ //这时候表示我们的界面还没有被更新，数据被更新了
            console.log( "界面上元素的内容是：" + document.getElementById("h3").innerText)
            console.log( "data中的 msg 数据是：" + this.msg)
            // 得出结论：当执行 beforeUpdate的时候，页面中的显示的数据，还是旧的，此时 data 数据是最新的，页面尚未和最新的数据保持同步
        },
        updated(){
            console.log( "界面上元素的内容是：" + document.getElementById("h3").innerText)
            console.log( "data中的 msg 数据是：" + this.msg)
            // 在 updated 事件执行的时候，页面和data 数据已经保持同步了，都是最新的
        }

        // 当执行 boforeDestroy 钩子函数的时候，Vue 实例就已经从运行阶段，进入到了 销毁阶段
        // 当执行了 beforeDestory 的时候，实例身上所有的 data 和所有的 methods ，以及过滤器、指令...都处于可用状态，此时，还没有真正执行销毁的过程
    })
</script>
```