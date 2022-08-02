# 什么是webpack？
webpack 是前端的一个前端自动化构建工具，基于 Node.js 开发，可以完美实现资源的合并、打包、压缩、混淆等诸多功能

### 背景
在网页中会引用很多静态资源，js、css、images、字体文件、模版文件，会造成：
1. 网页加载速度慢、因为我们要发起很多的二次请求
2. 要处理错综复杂的依赖关系

解决方法：
1. 压缩、合并、精灵图(至少发一次请求)、图片的Base64编码(0次请求)
2. 可以使用之前学过的 requireJS、也可以使用**webpack**解决各个包之间的复杂依赖关系

### webpack可以做什么事情？？？
- webpack 能够处理 JS 文件的相互依赖关系
- webpack 能够处理 JS 的兼容性问题，把高级的、浏览器不识别的语法，转为低级的、浏览器能正常识别的语法
- 资源压缩打包在一起，避免额外的网络请求
- 文件丢失会直接在编译时报错，而不是到用户端产生404错误
- 最终生成的文件名包含哈希，不会获取到浏览器缓存旧版本

### **webpack安装**
1. **npm i webpack -g**全局安装webpack
2. **npm i webpack --save-dev**安装到项目依赖中

### **webpack过程**
- 初始化参数：
- 开始编译：
- 确定入口：entry
- 编译模块
- 完成模版编译
- 输出资源
- 输出完成

https://blog.csdn.net/weixin_59519449/article/details/123893898?spm=1001.2101.3001.6650.1&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-1-123893898-blog-123983352.pc_relevant_multi_platform_featuressortv2dupreplace&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-1-123893898-blog-123983352.pc_relevant_multi_platform_featuressortv2dupreplace&utm_relevant_index=2