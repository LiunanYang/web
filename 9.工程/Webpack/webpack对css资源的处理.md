# 提取css成单独文件
在 js 中引入css资源，原本是会通过 style-loader 将 js中的 css 通过创建 style 标签添加到html中。

问题是，页面加载完 js 后样式才会生效，会闪屏，用户体验不好。

可以使用 [`mini-css-extract-plugin` ](https://webpack.docschina.org/plugins/mini-css-extract-plugin/)插件，`MiniCssExtractPlugin.loader` 取代 `style-loader`,将每个包含 css 的 js 文件单独创建一个css文件，自动在html中引入

# 样式兼容性处理
JS 的兼容性问题使用 `babel-loader` 处理，css 兼容性问题用 [`postcss-loader`](https://webpack.docschina.org/loaders/postcss-loader/) 处理

需要安装 postcss-loader、postcss、postcss-preset-env 
## 配置文件及具体配置
1. 写在 webpack.prod.js 中
```js
module:{
  rules:[
    {
      test:/\.less$/i,
      use:[
        MiniCssExtractPlugin.loader,
        'css-loader',
        // postcss-loader 必须写在 css-loader 后面，less-loader 的前面（如果有的话）
        { 
          loader:'postcss-loader',
          options:{
            postcssOptions:{
              plugins:['postcss-preset-env']
            }
          }
        }
        'less-loader'
      ]
    },
  ]
}
```
2. 在项目根目录下新建文件，`postcss.config.js`，Loader 会自动搜索配置文件
```js
module.exports = {
  plugins: ['postcss-preset-env']
};
```

## 兼容性配置 - browserslist
指定了项目的目标浏览器范围。

这个值会被 `@babel/preset-env` 和 `autoprefixer` 识别，用来确定需要转译的JS特性和需要添加的CSS浏览器前缀。

### 配置文件
1. package.json 的 browserslist 字段
```json
"browserslist":[
  "ie >= 8"
]
```
2. 单独的 .browserslistrc 文件

### 配置示例
会取多个规则的交集
```
"last 2 version",
"> 1%",
"no dead"
```

# 封装样式loader函数

```js
function getStyleLoader(pre){
  return [
    MiniCssExtractPlugin.loader,
    'css-loader',
    {
      loader:'postcss-loader',
      options:{
        postcssOptions:{
          plugins:['postcss-preset-env']
        }
      }
    },
    pre
  ].filter(Boolean)
}

module.exports = {
  module:{
    rules:[
      {
        test:/\.css$/i, 
        use: getStyleLoader()
      },
      {
        test:/\.less$/i,
        use: getStyleLoader('less-loader')
      }
    ]
  }
}
```

# css 优化和压缩

## 步骤
下载[`CssMinimizerWebpackPlugin`](https://webpack.docschina.org/plugins/css-minimizer-webpack-plugin/)依赖，引入，在 plugins 中调用

> 生产模式默认会压缩 html、js
