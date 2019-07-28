# Transition
[阮一峰-transition](http://www.ruanyifeng.com/blog/2014/02/css_transition_and_animation.html)
在CSS 3引入Transition（过渡）这个概念之前，CSS是没有时间轴的。也就是说，所有的状态变化，都是即时完成。

- transition作用：指定状态变化所需要的时间。

例：鼠标移到图片上后，一秒变化
```
img{
  height:15px;
  width:15px;
  transition: 1s;
}
img:hover{
  height: 450px;
  width: 450px;
}
```
- 可以指定transition**适用的属性**，比如只适用于height。
```
transition: 1s height;
```
- 在同一行transition语句中，可以分别**指定多个属性**。
```
img{
    transition: 1s height, 1s width;
}
```
## transition-delay
- delay的真正意义:它指定了动画发生的顺序，使得多个不同的transition可以连在一起，形成复杂效果。

例：让height先发生变化，等结束以后，再让width发生变化。实现这一点很容易，就是为width**指定一个delay参数**。width在1秒之后，再开始变化，也就是延迟（delay）1秒，
```
img{
    transition: 1s height, 1s 1s width;
}
```
## transition-timing-function
- transition的**状态变化速度**（又称timing function）
- **默认**不是匀速的，而是**逐渐放慢**，这叫做**ease**。
```
img{
    transition: 1s ease;
}
```
- 其他模式
  - **linear**：匀速
  - **ease-in**：加速
  - **ease-out**：减速
  - **cubic-bezier**函数：自定义速度模式,[可通过网站定制](https://cubic-bezier.com/)
```
img{
    transition: 1s height cubic-bezier(.83,.97,.05,1.44);
}
```
上面的代码会产生一个最后阶段放大过度、然后回缩的效果。
## transition完整写法
```
img{
    transition: 1s 1s height ease;
}
```
```
img{
    transition-property: height;
    transition-duration: 1s;
    transition-delay: 1s;
    transition-timing-function: ease;
}
```
## transition的局限
transition优点在于简单易用，但是它有几个很大的局限。
- 需要**事件触发**，所以没法在网页加载时自动发生。
- transition是**一次性**的，不能重复发生，除非一再触发。
- transition只能定义**开始状态**和**结束状态**，不能定义中间状态，也就是说只有两个状态。
- 一条transition规则，只能定义一个属性的变化，**不能涉及多个属性**。
