# location对象
- 代表当前浏览器的地址栏信息
- 通过 Location可以获取地址栏信息 或者 操作浏览器跳转页面
- 如果直接将location属性修改为一个完整的路径或相对路径，则我们页面会自动跳转到该路径，并且会生成相应历史纪录

location是最有用的BOM对象之一，它提供了与当前窗口中加载的文档有关的信息，还提供了一些导航功能。

location对象既是window对象的属性，也是document对象的属性。

window.location 和 document.location引用的是一个对象。

location 对象不只保存着当前文档的信息，还将 URL 解析为独立的片段，让开发人员可以通过不同的属性访问这些片段。


属性名 | 例子 | 说明
---|---|---
hash | "#contents" | 返回 URL 中的hash(#号后跟的字符)，如果 URL 不包括散列，则返回空字符串
host | "www.baidu.com:80" | 返回服务器名称和端口号(如果有)
hostname | "www.baidu.com" | 返回不带端口号的服务器名称
href | "http:/www.baidu.com:80" | 返回当前加载页面的完整 URL，location对象的 toString()方法也返回这个值
pathname | "/Wilecda/" | 返回 URL 中的目录和文件名
port | "8080" | 返回 URL 中指定的端口号，若没有，返回空串
protocol | "http:" | 返回页面所用的协议，通常是 http: 或 https:
search | "?q=js" | 返回 URL 的查询字符串，以问号开头


## 查询字符串函数

尽管 location.search 返回从问号到 URL 末尾的所有内容，但却没有办法逐个访问其中的每个查询字符串参数。

创建一个函数，解析查询字符串，返回包含的所有查询参数：
```
function getQueryStringArgs(){
    var qs = (location.search.length>0) ? location.search.substring(1) : ""
    args={}
    items = qs.length ? qs.split("&") :[]
    item = null
    name = null
    value = null
    for(var i = 0; i < items.length ;i++){
        item = items[i].split("=")
        name = decodeURIComponent(item[0])
        value = decodeURIComponent(item[1])

        if(name.length){
            args[name] = value
        }
    }
    return args
}
```
## 位置操作

使用location对象可以通过很多方式来改变浏览器的位置。

assign() 方法：
> location.assign("http://www.baidu.com")

这样就可以立即打开新 URL 并在浏览器的历史记录中生成一条记录。

如果是将location.href 或 window.location 设置为一个 URL 值，也会以该值调用 assign() 方法。

> window.location="http://www.baidu.com"
>
> location.href="http://www.baidu.com"
>
> 都与显式调用 assign() 方法效果一样

修改 location 对象的其他属性也可以改变当前加载的页面，每次修改 location 的属性，页面都会以新 URL 加载。

当通过上述任何一种方法修改 URL 后，浏览器的历史记录中就会生成一条记录，用户可推过 “回退”按钮导航到前一个页面。要禁用这种行为，可以使用 replace()方法。

这个方法只接受一个参数：要导航到的URL。

调用 replace() 方法后，用户不能回到前一个页面。


**reload()** 方法，作用是重新加载当前显示的页面。

如果调用 reload() 方法时不传递任何参数，页面就会以最有效的方式重新加
载。如果页面自上次请求依赖并没有改变过，页面就会从浏览器缓存中重新加载。
```
location.reload()   //重新加载(有可能从缓存中加载)
location.reload(true)   //重新加载(从服务器中加载)
```