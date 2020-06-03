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
指定安装某个模块，把模块的版本信息保存到dependencies（生产环境依赖）中，也是 `npm i `的默认行为：
```
npm install xxx --save-prod 或 -S
```
把模块版本信息保存到devDependencies（开发测试环境依赖）中：
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

## npm install 规则
1. npm 5.0.x版本，不管package.json怎么变，npm install时都会根据package-lock.json下载；

2. npm 5.1.0版本后，npm install会无视package-lock.json,下载最新的版本；

3. npm 5.4.2版本后，如果package.json与package-lock.json不一致，npm install会根据package.json去下载版本，并更新package-lock.json；如果package.json与package-lock.json一致，npm install会根据package-lock.json去下载。


# package.json 
主要用来定义项目中需要依赖的包

- dependencies：生产环境需要安装的模块
- devDependencies：开发、测试环境需要安装的模块

## package.json 与 package-lock.json 

用以记录当前状态下实际安装的各个npm package的具体来源和版本号。

### 版本
```javascript
"xxx": "1.1.0"  //必须为1.1.0 版本

"xxx": "~1.1.0",  // 约等于1.0.0 版本，如果有这个版本，一定使用，如果没有找最近的。

"xxx": ">1.1.0",  //大于此版本 

"xxx": "^1.1.0", // 和1.1.0版本兼容的版本。和~1.1.0 效果一样

"xxx": "*",  //匹配任何版本，效果和 latest 一样，寻找最新版

"xxx": "latest"  // 寻找最新版
```