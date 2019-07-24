# keep-alive
是vue提供的**抽象组件**(在页面渲染完成后不会被渲染成一个DOM元素)，用来对组件进行缓存，从而节省性能
- 被包裹在keep-alive中的组件的状态将会被保留
```
<keep-alive><keep-alive>
```

## 在特定的情况下强制刷新某些组件
1. 利用include、exclude属性
```
<keep-alive include="bookLists,bookLists">
      <router-view></router-view>
</keep-alive>
<keep-alive exclude="indexLists">
      <router-view></router-view>
</keep-alive>
```
- **include**属性表示只有name属性为bookLists，bookLists的组件会被缓存，（注意是组件的名字，不是路由的名字）其它组件不会被缓存
- **exclude**属性表示除了name属性为indexLists的组件不会被缓存，其它组件都会被缓存

2. 利用meta属性
```
export default[
 {
  path:'/',
  name:'home',
  components:Home,
  meta:{
    keepAlive:true //需要被缓存的组件
 },
 {
  path:'/book',
  name:'book',
  components:Book,
  meta:{
     keepAlive:false //不需要被缓存的组件
 } 
]

<keep-alive>
  <router-view v-if="this.$route.meat.keepAlive"></router-view>
  <!--这里是会被缓存的组件-->
</keep-alive>
<keep-alive v-if="!this.$router.meta.keepAlive"></keep-alive>
<!--这里是不会被缓存的组件-->
```

[详情点此](https://www.jianshu.com/p/4b55d312d297)