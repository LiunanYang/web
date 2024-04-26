# CSS Modules
CSS Modules 是将 CSS 样式模块化的技术，将每个组件的样式封装在独立的 CSS 文件中，在JavaScript中导入和使用CSS类名，这些类名在全局范围内是唯一的，不会造成样式冲突

### 原理
实现CSS Modules需要构建工具（如Webpack）和相应的loader（如css-loader和style-loader）的支持。

在构建过程中，它们会读取 CSS 文件，对类名进行哈希化处理，并生成相应的 JavaScript 模块，该模块导出一个对象，属性与 CSS 类名对应。

在vue组件文件中，导入css文件，通过生成的JavaScript模块来使用 CSS 类名。这些类名作为对象的属性被引用，即使类名在构建过程中被改变了，组件的代码也不需要更改，因为引用的是生成的对象属性，而不是具体的类名字符串。

### 好处
- 模块化：提高了样式的可维护性和可重用性，更易于找到和管理组件相关的样式
- 避免样式命名冲突：CSS Modules会自动生成唯一的类名，不需要担心命名冲突

### 怎么使用

下面是在 Vue 2 中展示 CSS Modules 的使用demo，需要确保你的构建系统（如 webpack）已经配置了相应的 loader 来处理 CSS Modules，css-loader 需要配置为启用 modules 选项。
```vue
<template>  
  <button :class="buttonStyles.myButton">Click Me</button>  
</template>  
<script>  
// 导入 CSS Modules  
import buttonStyles from '@/styles/MyButton.module.css';  
  
export default {  
  name: 'MyButton',  
  // 将 CSS Modules 对象直接赋值给 data 属性，以便在模板中使用  
  data() {  
    return {  
      buttonStyles,  
    };  
  },  
};  
</script>  
```

### 与其他技术的比较
- 与CSS-in-JS相比，CSS Modules仍然使用纯CSS语法，写起来更加顺手。
- 与全局CSS相比，它提供了更好的作用域控制和模块化支持。