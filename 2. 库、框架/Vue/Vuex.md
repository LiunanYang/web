# vuex
### **是什么**
- vuex 是 vue 的全局状态管理工具，实现了大范围数据共享的技术方案，方便、高效实现组件之间数据共享
- 把各个组件公用的数据放在一起进行统一管理，使得父子组件数据共享更加简单明了，也让项目更好维护，只要数据发生了变化，其他组件里引入数据的地方也会相应更新
### **好处**
- 存取一步到位，不需要层层传递
- 数据流向清晰
- 存储在 vuex 中的数据是响应式的
### **包含**
- State
- Mutation
- Action
- Getter
- Moudle
### **State**
存储全局共享的数据。

访问 state 的方式：
1. this.$store.state.名称
2. 使用 mapState 辅助函数，可以把 Store 中的 state 数据，映射为当前组件的计算数据

### **Mutation**
- 组件不能直接修改state，Mutation 本质上是 js 函数，用来变更 state 中的数据
- 形参第一个永远是 state 对象
- 在组件中通过 `this.$store.commit('方法名')`调用 mutation 方法

### **Action**
- JS 函数，处理 vuex 中的异步操作
- action 不能直接修改state，需要将异步操作的结果交给 mutation，mutation 修改 state
- 通过`this.$store.dispatch('调用的 action方法 ',参数)`
- 可以通过 mapActions 辅助函数，把 Store 中指定的 action 映射为当前组件的methods

### **Getter**
是 vuex 中的计算属性

访问方式：
1. this.$store.getters.xxx
2. 通过 mapGetters 辅助函数，把 store 中的 getter 映射为当前组件的计算属性

### **Module**
- 按照模块化的开发思想，把不同的数据和方法进行封装
- 模块的 state 是方法
- 可以开启命名空间

--- 
（详细版）

## **使用**
1. 安装
2. 在src目录下新建store 文件夹，新建一个index.js
```javascript
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
  state:{

  },
  mutations:{

  }
});
 
export default store;
```
3. 在main.js中引入store，全局注入
```javascript
// main.js
import store from "./vuex/store"

new Vue({
  el: '#app',
  store,
})
```
## **通信流程**


## **store组成** 
### state
- 共享状态/变量 
- 通过 `this.$store.state` 来访问vuex中定义的变量
### mutation
- 只能通过 `this.$store.commit` 提交 mulation 的方式更改 store 状态
- 方法参数第一个是 state，通过 state 获取 store 中的变量
- 不能包含异步操作。虽然异步也可以执行，但是对devtool调试的状态跟踪或多个状态更改操作相互依赖是很不好的，所以不要觉得只要不报错我就可以这么用，还是尽量按照规则来比较好
- action 中的操作也是通过提交 mutation去修改               
- 有无参方法、带参方法
- 调用带参的mutation方法
  - 载荷提交，可以提交一个值也可以是一个对象
  - 对象提交


```javascript
// store.js
mutations: {
  addNum(state,num){
      state.count+=num
  }
}

addNum(){
  // 1.载荷提交-值
  this.$store.commit('addNum'parseInt(this.num))
}
```
```javascript
// store.js
mutations: {
  addNum(state,obj){
      state.count+=obj.num
  }
}

addNum(){
  // 2.载荷提交-对象
  this.$store.commit('addNum',{
    num:parseInt(this.num)
  })
  // 3.对象提交
  this.$store.commit({
    type:'increment',
    num:parseInt(this.num)
  })
}
```
### action
- 异步更改状态
- 方法第一个参数是一个与 store 实例具有相同方法和属性的 context 对象，通过context.state获取store中的变量
- 通过 this.$store.dispatch 调用 action 中的方法
- 有无参方法、带参方法
- action事件的触发
  - 载荷提交，可以提交一个值也可以是一个对象
  - 对象提交

```javascript
addAsync(){
  this.$store.dispatch("incrementAsync")
}

actions:{
  incrementAsync(context){
    setTimeout(()=>{
      context.commit('increment')
    },2000)
  }
}
```

### getter
- getter 可以认为是 store 的计算属性
- getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。
- Getter 接受 state 作为其第一个参数,也接受其他 getter 作为第二个参数
- Getter 会暴露为 store.getters 对象,可以直接使用也可以传参数
  - 直接使用，通过属性访问：`this.$store.getters.xxx`
  - 传参数，通过方法访问：
    - getter 返回一个函数，来实现给传参
    - 通过 `this.$store.getters.argsName("真可爱")` 去每次调用，不会缓存结果
```javascript
getters:{
  formatCount(s){
    return s+"个"
  },
  formatName(state){
    var desc = ""
    var name = state.name
    if(name =="liunan"){
      desc = "是小仙女"
    }
    return name + desc
  },
  argsName(state){
    var name = state.name
    return (a)=>{
      return name + a
    }
  }
}
```
### module
将store分割成不同的模块

## **vuex辅助函数**
### mapState
当一个组件需要获取多个状态时候，将这些状态都声明为计算属性会有些重复和冗余。可以使用 mapState 辅助函数帮助生成计算属性。

使用 mapState前：
```javascript
export default {
  computed:{
    count(){
      return this.$store.state.count
    },
    one(){
      return this.$store.state.one
    },
    two(){
      return this.$store.state.two
    }
  }
}
```
使用 mapState 后：
```javascript
import { mapState } from 'vuex'
export default {
  computed:mapState({
    count:state => state.count,
    one:state => state.one,
    two:state => state.two
  }),
}
```
当映射的计算属性的名称与 state 的子节点名称相同时，也可以给 mapState 传一个字符串数组：
```javascript
export default {
  computed:mapState([
    'count',
    'one',
    'two'
  ])
}
```
利用对象展开符，将 mapState 与本地计算属性合并
```javascript
export default {
  computed: {
    localComputed(){

    }
    ...mapState({
      
    })
  }
}
```

### mapGetters
将 store 中的 getters 映射到局部计算属性，与state类似

使用对象展开运算符将 getters 混入 computed 对象中:
```javascript
export default {
  computed:{
    ...mapGetters([
      'formatName','argsName'
    ])
  }
}
```
如果想将一个 getter 属性另取一个名字，使用对象形式：

映射 this.double 为 store.getters.countDouble
```javascript
export default {
  mapGetters({
    name: 'formatName'
  })
}
```

当getter的属性名与组件内data的属性名冲突时？

### mapMutations
使用 mapMutations 辅助函数将组件中的 methods 映射为 store.commit 调用
```javascript
import { mapMutations } from 'vuex'
 
export default {
  methods: {
    ...mapMutations([
      'increment' // 映射 this.increment() 为 this.$store.commit('increment')
    ]),
    ...mapMutations({
      add: 'increment' // 映射 this.add() 为 this.$store.commit('increment')
    })
  }
}
```
### mapActions
```javascript
import { mapActions } from 'vuex'
 
export default {
  //..
  methods: {
    ...mapActions([
      'incrementN' //映射 this.incrementN() 为 this.$store.dispatch('incrementN')
    ]),
    ...mapActions({
      add: 'incrementN' //映射 this.add() 为 this.$store.dispatch('incrementN')
    })
  }
}
```
