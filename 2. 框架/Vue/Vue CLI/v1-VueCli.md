### 使用Vue-Cli 3.0 创建一个项目
1. 使用Vue UI 创建、管理项目
2. 项目结构目录整理
3. 初始文件添加
4. 基本配置讲解
5. 跨域配置

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





