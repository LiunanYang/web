# Babel
JavaScript编译器，将ES6语法编写的代码转换为向后兼容的JavaScript语法

## 配置文件
- babel.config.* (js/json) 新建文件，项目根目录
- .babelrc.* (js/json) 新建文件，项目根目录
- package.json 中的 babel 配置，不需要创建文件
## 具体配置
```js
module.exports = {
  // 预设
  presets:[]
}
```
### presets 预设
是一组 babel 插件，扩展 babel 功能
- @preset-env：智能预设，允许使用最新的 JS
- @preset-react：编译 react jsx 语法的预设
- @preset-typescript：编译 TypeScript 语法的预设

## 在 webpack 中使用
[webpack babel-loader](https://webpack.docschina.org/loaders/babel-loader/)