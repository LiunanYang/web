
# attr&prop
## 什么是attribute，什么是property 
    attribute：html 定义属性和html自定义属性
    propert：js原生对象的直接属性
    - 每一个预定义的attribute都会有一个property与之对应
## 什么是布尔值属性，什么是非布尔值属性
    布尔值属性： 你的property是布尔值类型
    非布尔值属性：你的property是非布尔值类型 
## property和attribute的同步问题
    非布尔值属性：不管什么情况,property和attribute都会实时同步
    布尔值属性：
        1. 改变property，不会同步attribute
        2. 在没有动过property时，attribute会同步property，一旦动过property，attribute不会同步
## 浏览器只认property
## 用户操作的是 property