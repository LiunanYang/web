# MVC 与 MVVM
- MVC 和 MVVM 都是分层开发概念

## MVC
包括 model 数据层、View 视图层、Controller 控制层，通过 Controller 控制 Model 和 View 的交互。

**过程**

通信过程是单向的。

Model 数据交给 Controller，经过 Controller 操作，更新 View;View 传送指令给 Controller，Controller 完成业务逻辑后，改变Model。
## MVVM
包括 model 数据模型层、View 视图层、View Model。主要目的是分离 Model 和 View。

通信是双向的。

Model 数据改变时，ViewModel 监听到数据变化，通知 View 自动更新，不需要开发者通过 Controller 更新 View。

## 分层开发的好处
- 代码分离，低耦合
- 可维护性高

## MVVM 相对于 MVC 的好处
- 减少了开发人员对 DOM 的操作
- 简化了业务逻辑和视图的依赖
- 提高了可重用性，可以封装 ViewModel，让很多个 View 复用这个 ViewModel

## Vue 和 MVVM 之间的对应关系
Vue 中 VM 核心是双向数据绑定
```html
<!-- Vue 实例所控制的元素区域，就是 MVVM 中的 V-->
<div id="app">
    <p>{{msg}}</p>
</div>

<script>
    // 注意：我们new出来的这个vm对象，就是MVVM 中的VM 调度者
    var vm = new Vue({
        el:'#app',
        // 这里的data 就是 MVVM 中的M
        data:{
            msg:'欢迎学习Vue'
        }
    })
</script>
```