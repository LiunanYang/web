# npm
1. 提供了统一下载途径
2. 自动下载依赖

`node_modules`文件夹：存放模块

## npm 命令
创建一个 package.json 文件：
```
npm init
```
根据package.json文件，安装全部的项目依赖：
```
npm install
``` 
指定安装某个依赖：
```
npm install xxx
```
指定全局安装某个依赖，被安装在`C:\Users\11529\AppData\Roaming\npm`:
```
npm install xxx --global 或 -g
``` 
指定安装某个模块，把模块的版本信息保存到dependencies（生产环境依赖）中：
```
npm install xxx --save 或 -S
```
把模块版本信息保存到devDependencies（开发环境依赖）中：
```
npm install xxx --save-dev 或 -D
```
指定安装模块的版本 :
```bash
npm install xxx#^1.1.0 --save
```
把模块安装到optionalDependencies（可选环境依赖）中：
```
npm install packagename --save-optional 或 -O
```
---
### 版本

```javascript
"xxx": "1.1.0"  //必须为1.1.0 版本

"xxx": "~1.1.0",  // 约等于1.0.0 版本，如果有这个版本，一定使用，如果没有找最近的。

"xxx": "^1.1.0", // 和1.1.0版本兼容的版本。和~1.1.0 效果一样

"xxx": "*",  //匹配任何版本，效果和 latest 一样，寻找最新版

"xxx": "latest"  // 寻找最新版
```





