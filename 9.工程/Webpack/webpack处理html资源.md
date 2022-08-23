# HtmlWebpackPlugin
背景：写的 html 页面手动引入 js 打包后的资源，将来文件名称可能会变化，引入的资源也会增多，希望能够 html 自动引入打包的资源

## 使用
引入 HtmlWebpackPlugin 插件
- template 配置: 以此路径下的文件为模版，创建新的 html 文件
- 新的文件特点：1.dom结构和原本的一致 2.自动引入打包的资源

```js
module.exports = {
  plugins:[
    new HtmlWebpackPlugin({
      template:path.resolve(__dirname,'public/index.html')
    })
  ],
}
```