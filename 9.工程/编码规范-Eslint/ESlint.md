# ESlint
使用 ESlint，关键是写 ESlint 配置文件，里面写上各种 rules 规则，将来运行 ESlint 时候就会以这些规则对代码进行检查

## 配置文件
### **第一种方式** 
.eslintrc.* 新建文件，位于项目根目录下
- .eslintrc
- .eslintrc.js，使用 commonJS 语法暴露对象
- .eslintrc.json
- 区别在于配置文件格式不一样
### **第二种方式**
package.json 中的 `eslintConfig`，不需要创建文件，在原有基础上写

## 具体配置
```js
module.exports = {
  // 解析选项
  parserOptions:{ },
  // 具体检查规则
  rules:{
    semi: "error"   //禁止使用分号
  },
  // 继承其他规则
  extends:['xxx'],
}
```

### **1.解析选项 parserOptions**
```JS
parserOptions:{
  ecmaVersion:6, //ES语法版本
  sourceType:"module",  //ES模块化
  ecmaFeatures:{   // ES其他特性
    jsx: true  // 如果是react项目，就需要开启 jsx 语法
  }
},
```
### **2.具体规则 rules**
- off / 0 关闭
- warn / 1 使用警告级别错误，不会导致程序退出
- off / 2 使用错误级别的错误，会导致程序退出

### **3.继承 extends**
开发中一点点写 rules 规则太费劲，可以继承先有的规则。

rules 的规则比继承的规则优先级高，会覆盖 extends 里的规则。

