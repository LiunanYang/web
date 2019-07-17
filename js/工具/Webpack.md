### 在网页中会引用哪些常见的静态资源
- js
    - .js .jsx .coffee .ts(TypeScript,类 C# 语言)
- css
    - .css .less .sass 
- images
    - .jpg .png .jif .bmp .svg .
- 字体文件
    - .svg .ttf .eot .woff .woff2
- 模板文件
    - .ejs .jade .vue[这是在webpack 中定义组件的方式，推荐这么用]

### 网页中引入静态资源多了之后又什么问题？
1. 网页加载速度慢、因为我们要发起很多的二次请求
2. 要处理错综复杂的依赖关系

### 如何解决上述两个问题
1. 压缩、合并、精灵图(至少发一次请求)、图片的Base64编码(0次请求)
2. 可以使用之前学过的 requireJS、也可以使用**webpack**解决各个包之间的复杂依赖关系


### 什么是webpack？
webpack 是前端的一个项目构建工具，它基于 Node.js 开发出来的一个前端工具。

### 如何完美实现上述的2种解决方案
1. 使用**Gulp**，是基于 task 任务的；
2. 使用**webpack**，基于整个项目进行构建的；
- 借助于webpack这个前端自动化构建工具，可以完美实现资源的合并、打包、压缩、混淆等诸多功能。
- 根据官网的图片介绍webpack打包的过程。

### webpack安装的两种方式
1. 运行 **npm i webpack -g**全局安装webpack，这样就能在全局使用webpack的命令
2. 在项目根目录中运行**npm i webpack --save-dev**安装到项目依赖中

### 初步使用webpack打包构建列表隔行变色案例
1. 运行 **npm int**初始化项目，使用 npm 管理项目中的依赖包
2. 创建项目基本的目录结构
3. 使用**cnpm i jquery --save**安装jquery类库
4. 创建**main.js**并书写各行变色的代码逻辑

> dist文件夹中存放发布后的产品级的内容

### webpack可以做什么事情？？？
1. webpack能够处理 JS 文件的相互依赖关系
2. webpack 能够处理 JS 的兼容性问题，把高级的、浏览器不识别的语法，转为低级的、浏览器能正常识别的语法


### 当我们在控制台，直接去输入webpack命令执行的时候，webpack做了以下几步
1. 首先，webpack 发现，我们并没有通过命令的形式，给它指定了入口和出口
2. webpack 就会去项目的根目录中，查找一个叫做‘webpack.config.js’的配置文件
3. 当找到配置文件后，webpack 会去解析这个配置文件，当解析执行完配置文件之后，就得到了配置文件中导出的配置对象
4. 当 webpack 拿到配置对象后，就拿到了配置对象中指定的入口和出口，然后进行打包构建









