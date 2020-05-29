1.
```
// a、b、c、d 都对
a 当 Vue.js 用 v-for 正在更新已渲染过的元素列表时，它默认用“就地复用”策略。如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序， 而是简单复用此处每个元素，并且确保它在特定索引下显示已被渲染过的每个元素。
b 为了给 Vue 一个提示，以便它能跟踪每个节点的身份，从而重用和重新排序现有元素，你需要为每项提供一个唯一 key 属性。
c 理想的 key 值是每项都有的且唯一的 id。
d 2.2.0+ 的版本里，当在组件中使用 v-for 时，key 是必须的。
```
2.
```
<div id="app"></div>
window.name = 'window name'
let app = new Vue({
    name: 'name 1',
    el: '#app',
    data(){
      return {name:'name 2'}
    },
    created(){
        console.log(this.name)
    }
})

<!-- name2 -->
```
3.
```
var myMixin = {
  created: function () {
    this.hello()
  },
  methods: {
    hello: function () {
      console.log('hello from mixin!')
    }
  }
}

var Component = Vue.extend({
  mixins: [myMixin],
  methods: {
    hello(){
      console.log('hello from options')
    }
  }
})

var component = new Component()
```
4.
```

```