# webpack
是一个静态资源打包工具。以一个或多个文件为入口，将项目所有文件编译成一个或多个文件输出。

输出的文件叫做`bundle`，就是编译好的文件，可以在浏览器端运行。

## 两种模式配置文件
- 开发模式 webpack.dev.js：代码编译，自动化运行
- 生产模式 webpack.prod.js：代码编译，优化输出

## 五大核心概念
### **1.entry 入口**
指定webpack入口文件
```js
entry: './src/main.js',  //相对路径
```
### **2.output 输出**
指定webpack打包后的文件输出目录
```js
output: {
  // __dirname node.js中的变量，代表当前文件的文件夹
  // path 所有文件的输出路径，filename 入口文件打包输出的文件名
  path: path.resolve(__dirname, 'dist'),   //绝对路径
  filename: 'js/main.js',
  // 在打包前，自动清空上一次打包结果目录
  clean:true
},
```
### **3.loader 加载器**
webpack本身功能比较少，只能处理js资源，遇到css资源会报错，使用loader可以使 webpack 解析其他资源

- style-loader 将js中的css通过创建style标签加到到html文件中
- css-loader 将css资源编译成 commonjs 模块引入到js中
- less-loader 将less编译成css
```js
module:{
  rules:[
    {
      test:/\.css$/i,   //检测.css结尾的文件
      //use 执行顺序：从后往前
      use:['style-loader','css-loader']  
    },
    {
      test:/\.less$/i,
      use:['style-loader','css-loader','less-loader']
    },
    {
      test:/\.(png|jpe?g|gif|webp)/i,
      type:"asset",
      parser: {
        dataUrlCondition: {
          // 小于 maxSize kb大小的图片转为base64
          maxSize: 10 * 1024
        }
      },
      generator:{
        // 输出图片名称
        // [hash:10] hash值取前10位
        filename:"static/images/[hash:10][ext][query]"
      }
    }
  ]
},
```
### **4.plugin 插件**
扩展webpack的功能
```js
const EslintPlugin = require('eslint-webpack-plugin')

plugins:[
  new EslintPlugin({
    // 指定文件根目录，检测哪些文件
    context: path.resolve(__dirname, 'src')
  })
],
```
### **5.mode 模式**
- development 开发模式：仅能编译 ES Module 的语法
- production 生产模式：能编译 ES Module 语法，还能压缩代码

dev开发模式，开发代码时使用的模式
- 编译代码，使浏览器识别运行
- 代码质量检查，树立代码规范

## 运行
- 没有配置文件，运行webpack的写法：`npx webpack ./src/index.js --mode=xxx`
- 有配置文件`webpack.config.js`运行时的写法：`npx webpack`

## 相关技术
使用 Babel，对 js 兼容性处理
使用 Eslint，对代码格式处理

## webpack 优点
- 能够处理 JS 的兼容性问题，把高级的、浏览器不识别的语法，转为低级的、浏览器能正常识别的语法
- 资源打包，避免额外的网络请求
- 资源压缩，减少请求数据体积
- 文件丢失会直接在编译时报错，而不是到用户端产生404错误
- 最终生成的文件名包含哈希，不会获取到浏览器缓存旧版本
