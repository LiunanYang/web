>需要通过函数对象来调用；
>
>当对函数调用call（）和apply（）都会调用函数执行；
>
>在调用call（）和apply（）可以将一个对象指定为第一个参数，此时这个对象将会成为执行函数执行时的this；
```
			function fun(){
				alert("我是fun函数！")
			}
			
			fun.call() //我是fun函数！
			fun.apply() //我是fun函数！
			fun() //我是fun函数！
```
- call（）方法可以将实参在对象之后一次传递；
- apply（）方法需要将实参封装到一个数组中统一传递。
