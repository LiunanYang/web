## 在JS中使用Date对象表示一个时间。
- 如果直接使用构造函数构建一个Date（）对象，则会封装为当前代码执行的时间
- 创建一个指定的时间对象：需要在函数中传递一个表示时间的字符串作为参数
>日期格式：月/日/年  时：分：秒

- getDate（）：获取当前对象是几日
- getDay（）：返回一周中的周几，0：周日；1：周一。
- getMonth（）：返回当前对象的月份。会返回0-11的值，0：一月，11：12月
- getFullYear（）：获取当前对象的年份。
- getTime（）：获取当前日期对象的时间戳。
>时间戳：指的是从格林威治时间1970年1月1日，0时0分0秒到当前日期所花费的毫秒数
>
>计算机底层在保存时间都是使用时间戳
>
>获取当前时间戳： time = Date.now()

```
    var d = new Date()
    console.log(d) //Sun Sep 30 2018 09:38:31 GMT+0800 (中国标准时间)

    console.log(d.getDay()) //0
    console.log(d.getFullYear()) //2018
    console.log(d.getMonth()+1) //9
    console.log(d.getDate())//30
    console.log(d.getHours()) //9
    console.log(d.getMinutes())//38
    console.log(d.getSeconds())//31
    console.log(d.getTime())//1538271511864
                
    var d2 = new Date("12/03/2016 11:20:09")
    console.log(d2) //Sat Dec 03 2016 11:20:09 GMT+0800 (中国标准时间)
                
    var d3 = new Date("1/1/1970 0:0:0")
    console.log(d3.getTime())//-28800000

    time = Date.now()
    console.log(time)//1538271511869
```