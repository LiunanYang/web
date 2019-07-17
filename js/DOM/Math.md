### Math和其他对象不同，它不是一个构造函数，它属于一个工具类不用创建对象，它里面封装了数学运算相关的属性和方法。
- Math.ceil（）：向上取整，小数位只要有值就自动进1
- Math.floor（）：向下取整，
- Math.round（）：四舍五入取整
- Math.random（）：生成一个0-1之间的随机数	
    - 生成x-y间的：Math.round（Math.random（）*（y-x）+x）