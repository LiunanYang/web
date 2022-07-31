# **插槽**

## **单个插槽\默认插槽\匿名插槽**
- 可以放置在组件的任意位置
- 一个组件中只能有一个匿名插槽，不设置name属性，默认名为 default
```html
<!-- 子组件 child -->
<template>
  <div>
      <button></button>
      <slot></slot>
  </div>
</template>

<!-- 父组件 -->
<template>
  <div class='app'>
     <child>title1</child>
  </div>
</template>
```

### **后备内容 子组件 slot 标签设置默认值**
如果没有在父组件内添加内容，slot 就会显示默认值
```html
<template>
  <div>
      <button></button>
      <slot>这是默认值</slot>  
  </div>
</template>
```
## **具名插槽**
- 一个组件可以有多个具名插槽
- 设置 name 属性
- 父组件通过 v-slot:xxx(name名称) 给对应插槽添加内容，可以简写为 #xxx
```html
<!-- 子组件 child-->
<template>
  <div>
      <button></button>
      <slot name='one'> 这就是默认值1</slot>
      <slot name='two'> 这就是默认值2</slot>
  </div>
</template>
<!-- 父组件 -->
<template>
  <div class='app'>
     <child> 
        <template v-slot:one>这是插入到one插槽的内容</template>
        <template v-slot:two>这是插入到two插槽的内容</template>
     </child>
  </div>
</template>
```

## **作用域插槽**
- 匿名插槽、具名插槽在slot里添加的数据都是父组件作用域的，作用域插槽可以实现父组件在插槽上绑定子组件的 data 数据
- 子组件里设置 slot 标签的name属性，通过v-bind 传入data数据
- 父组件里设置`v-slot:name=slotValue`，slotValue对象下有子组件上绑定的 data 数据
```html
<!-- 子组件 child -->
<template>
  <div class='button'>
      <button></button>
      <slot name='one' :value1='child1'> 这就是默认值1</slot>    
      <slot :value2='child2'> 这就是默认值2 </slot>
  </div>           
</template>

new Vue({
  el:'.button',
  data:{
    child1:'数据1',
    child2:'数据2'
  }
})

<!-- 父组件 -->
<template>
  <div class= 'app'>
     <ebutton> 
        <!-- 通过v-slot的语法 将插槽 one 的值赋值给slotValue1  -->
        <template v-slot:one='slotValue1'>  
           {{ slotValue1.value1 }}
        </template>
        <!-- 同上，由于子组件没有给slot命名，默认值就为default -->
        <template v-slot:default='slotValue2'> 
           {{ slotValue2.value2 }}
        </template>
     </ebutton>
  </div>
</template>
```

# **slot 和 props对比**
## **相同点**
- 都是用在父子组件之间
- 都对应了父组件给子组件传值的场景
## **不同点**
### **设计思想**
- props 传递状态
- slot 传递 DOM 节点
### **动态展示组件**
- 使用 props 动态展示组件内容的话，需要在子组件内部去实现，导致子组件内部肥大
- slot 更加灵活，子组件展示的内容放在父组件里定义
