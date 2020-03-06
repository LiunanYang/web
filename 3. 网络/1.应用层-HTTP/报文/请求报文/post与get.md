# HTTP请求 post 和 get 的区别
1. get方式通过过URL提交数据，数据在URL中可以看到；POST方式，数据放置在HTML header内提交
2. get方式提交的数据最多只能有1024字节，而POST没有限制
3. 安全性问题。get 数据会显示在地址栏上，而post不会
4. 传送方式不同，get的参数是在HTTP头部传送的，而post的数据则在HTTP请求的内容里传送
