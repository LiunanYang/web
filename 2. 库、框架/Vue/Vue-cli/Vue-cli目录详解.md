## **vue-cli 目录**
```
- package.json  定义了项目的描述，版本、名称、脚本、依赖
- babel.config.js  babel的配置文件
- .postcssrc.js  css自动补充兼容性代码的配置
- .gitingore  git提交的配置
- .eslintrc  配置eslintrc规则的
- public  公共文件
- src  项目主文件
    - assets  静态文件
        - img  图片
        - font  图标字体
    - components  组件、可复用
    - views  视图页面
    - App.vue  基础组件
    - api  接口文件
    - config  项目的一些配置
    - directive  vue的自定义指令文件
    - lib 
        - util.js  一些有业务结合的工具方法
        - tools.js  与业务无关、纯粹的工具方法函数
    - main.js  项目入口文件
    - router.js  路由文件
    - store.js  vuex状态管理文件    
    - router
        - index.js
        - router.js
    - store
        - index.js
        - store.js
        - state.js
        - mutation.js
        - actions.js
        - module
            - user.js  用户信息在里面
    - mock 前端做请求的模拟，返回一些模拟数据
        - index.js
- .editorconfig  编辑器配置文件
```
### **assets 和 public 区别**
相同点
- 在 html 中都可以使用

不同点
- assets 中的资源在js中使用时，要经过 webpack file-loader 的编译，不能直接写路径
    - webpack使用的是commonJS规范，动态引入assets下的资源必须用 `require('@/assets/' + url)`才可以
- public 文件下的资源不会被 webpack 处理，会直接被复制到最终打包目录下，使用绝对路径引入

#### **使用建议**
public 放第三方外部文件，assets 放自己项目的文件

资源作为项目模块依赖导入，通过webpack处理获得以下好处：
- 资源压缩打包在一起，避免额外的网络请求
- 文件丢失会直接在编译时报错，而不是到用户端产生404错误
- 最终生成的文件名包含哈希，不会获取到浏览器缓存旧版本
 
### **package.json 和 package-lock.json 区别**
- package.json 在 `npm init`时生成，记录项目版本、名称、脚本、依赖
- package-lock.json 在`npm install`时生成，记录当前状态下项目实际安装模块及模块依赖项的版本、地址、哈希

当项目中已经有 package-lock.json，安装依赖时将会以 lock 文件为主，进行解析安装指定依赖。

package.json 只指定了依赖模块的版本号，lock 文件里的依赖信息更加详细，下载速度会更快，使用它每次安装的结果都是相同的，所以也不容易出错。

### **dependencies 和 devDependencies区别**
- dependencies 指定项目正式运行时需要的依赖，通过 `npm install xxx –save(-S)`、`npm i xxx`安装的依赖会加入到dependencies中
- devDependencies 指定项目开发时需要的依赖，一旦项目打包上线，就移除这里的第三方模块，`npm install xxx –save-dev(-D) `



