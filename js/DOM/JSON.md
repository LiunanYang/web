# JSON
- js中的对象只有js自己认识，其他语言都不认识
- JSON就是一个特殊格式的字符串，这个字符串可以被任意的语言识别，并且可以转换成任意语言中的对象
- JSON在开发中主要用于数据的交互传递
- JavaScript object notation js对象表示法
- JSON的格式和js格式一样，只不过JSON中的属性名必须加双引号，其他的和js语言一致
## 分类
1. JSON对象 ｛｝
2. 数组 []
```
   var obj = '{"name":"tom","age":"13"}' //对象
   var arr = '[1,2,3,"hello",true]' //数组
```
## JSON中允许的值
1. 字符串
2. 数值
3. 布尔值
4. null
5. 对象（普通对象，不包括函数对象）
6. 数组
## 将JSON字符串转换为js中的对象 
- 在JSON中，为我们提供了一个工具类：JSON
    - 这个对象可以帮我们把JSON转换为JS对象，也可以把JS对象转换为JSON
- JSON->js：JSON.parse() 可以将JSON字符串转换为JS对象,需要一个JSON字符串作为参数
- js->JSON：JSON.stringify() 把JS对象转换为JSON

### JSON这个对象在IE7及以下的浏览器中不支持，调用时会报错。
- eval() :可以用来执行一串字符串形式的JS代码，并将结果返回。
- 使用eval()执行的字符串中含有｛｝，它会将｛｝当成代码块。如果不希望当成代码块解析，则需要在字符串前后各加一个()
```
        var str = '{"name":"tom","age":"13"}'
        var obj4 = eval("("+str+")")
        console.log(obj4)
```
- 如果要兼容IE7及以下的JSON操作，则可以从外部引入一个JS文件