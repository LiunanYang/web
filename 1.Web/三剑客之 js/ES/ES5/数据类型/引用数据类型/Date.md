# Date
- 直接使用构造函数构建一个Date（）对象，则会封装为当前代码执行的时间
- 创建一个指定的时间对象：需要在函数中传递一个表示时间的字符串作为参数（月/日/年  时:分:秒）
```
var d2 = new Date("12/03/2016 11:20:09")
console.log(d2) //Sat Dec 03 2016 11:20:09 GMT+0800 (中国标准时间)
            
var d3 = new Date("1/1/1970 0:0:0")
console.log(d3.getTime())//-28800000
```

- getFullYear（）：获取当前对象的年份。
- getMonth（）：返回当前对象的月份。会返回0-11的值
- getDate（）：获取当前对象是几日，1~31
- getHours（）：时
- getMinutes（）：分
- getSeconds（）：秒
- getDay（）：返回一周中的周几，1~6：周一~周六，0：周日
- getTime（）：获取当前日期对象的时间戳（指的是从格林威治时间1970年1月1日，0时0分0秒到当前日期所花费的毫秒数）

> 获取当前时间戳： time = Date.now()
> 
> 计算机底层在保存时间都是使用时间戳


## 日期的格式化方法
- toDateString()：星期几、月、日和年 (`Thu Mar 19 2020`)
- toTimeString():时、分、秒和时区(`11:52:22 GMT+0800 (GMT+08:00)`)
- toLocaleDateString()：年、月、日(`2020-3-19`)
- toLocaleTimeString()：时、分、秒(`11:55:01`)
- toUTCString()：完整的UTC日期(`Thu, 19 Mar 2020 03:55:44 GMT`)
