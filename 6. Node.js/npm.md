### npm

1.提供了统一下载途径
2.自动下载依赖

node_modules：存放模块


我们刚才封装了一个数学函数 math-tool 很好用，此时 node 开发者也发现了这个事情，如果让全球开发者贡献自己实用的模块该多好。让大家不要重复造轮子。

node.js 主导了一个社区，叫做 **npm (node package management,node 包管理器)**

# npm 的使用
官网：https://www.npmjs.com/

淘宝镜像： https://npm.taobao.org/

此时我们就可以去上面寻找我们要的东西

> npm install ***

注意一定到联网环境，此时 solarlunar 这个模块就会被自动下载到你项目的 node_modules 文件夹中。

```
var solarLunar = require("solarLunar")
var result = solarLunar.solar2lunar(2018,12,3)
console.log(result)
```

# 全局安装

> npm install 包名字 -g

此时这个包（模块）将被安装在全局，就是上午说的：
**C:\Users\11529\AppData\Roaming\npm**

# 淘宝镜像
淘宝为了方便中国程序员对抗GFW，发明了 cnpm 。你可以用此代替官方版本（只读），同步频率目前 10  分钟一次，保证尽量与官方服务同步。


如何设置淘宝呢？
> $ npm install -g cnpm --registry=https://registry.npm.taobao.org

今后所有的 npm 活动，都用 cnpm 代替



# 依赖
npm有一个创造性的举动，可以让开发者声明自己的项目的全部依赖。我可以告诉别人这个项目依赖什么。在项目目录下，创建一个文件，叫做 package.json:
```
{
    "dependencies": {
        "solarlunar": "latest"
    }
}
```
dependencies是依赖的意思。

此时我们在项目根目录（就是packag.json这一层目录）,在 CMD 输入：
> npm install

此时 npm 软件将会自动安装 package.json 里面的所有声明依赖。

事实上，里面还有很多配置项。

我们可以用
> npm init

此时 npm 将会有一个表单，引导你去创建一个较为完整的 package.json 文件。

### 版本符号
版本有很多符号。
#### 明确限制
```
"dependencies": {
    "solarlunar": "1.1.0"  //必须限制为1.1.0 版本
}
```

#### 大约近似等于 
```
"dependencies": {
    "solarlunar": "~1.1.0",  // 大约近似等于1.0.0 版本，如果有这个版本，一定使用，如果没有找最近的。

    "solarlunar": "^1.1.0", // 寻找和1.1.0版本兼容的版本。和~1.1.0 效果一样

    "solarlunar": "~1.1.0",  // 大约近似等于1.0.0 版本，如果有这个版本，一定使用，如果没有找最近的。
    
    "solarlunar": "1.1.x",  //
    
    "solarlunar": "*",  //匹配任何版本，效果和 latest 一样，寻找最新版
    
    "solarlunar": "latest"  // 寻找最新版
}
```
如果我们安装一个依赖的时候，想让它自动进入到 pakeage.json 中，此时使用 --save 参数即可。
> npm install xx --save

或者
> npm install --save xx

此时依赖将被安装，并且会自动将 xx　写入 package.json 文件中的 dependencies 对象中。

如果想要限制版本
> npm install xx#^1.1.0 --save

#### 至此，我们已经学习了很多 npm 命令
```
$ npm init  //帮我们创建一个 package.json 文件的，项目开发的第一件事就是这个
$ npm install  //根据package.json文件，安装全部的项目依赖
$ npm install solarlunar  //指名道姓安装某一个
$ npm install solarlunar --save  // 指名道姓安装某一个，并把它写入 package.json 依赖项
```

