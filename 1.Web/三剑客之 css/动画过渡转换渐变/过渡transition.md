# Transition
设置元素在不同状态之间的过渡效果。

在CSS 3引入Transition这个概念之前，CSS是没有时间轴的。也就是说，所有的状态变化，都是即时完成。

特点:
- 平滑过渡
- 语法简单，便于理解和使用
- 兼容性好

局限性/不足：
- 需要明确的状态触发改变，用户交互或者js代码
- 是一次性的效果，不能循环发生，除非再次触发状态改变
- 只能定义开始状态和结束状态，不能定义中间状态，只能提供比较简单的交互效果

## 四个子属性
通常按照以下顺序书写，可以只指定部分属性
### 1.transition-property
应用过渡效果的CSS属性名称，默认值：all

### 2.transition-duration
过渡效果花费的时间，默认为0，表示没有过渡效果

### 3.transition-timing-function 
过渡效果的速度时间曲线
- ease，默认值，慢快慢
- linear：匀速
- ease-in：慢快
- ease-out：快慢
- cubic-bezier函数：自定义速度模式,[可通过网站定制](https://cubic-bezier.com/)

### 4.transtion-delay 
过渡效果延迟开始的时间

---
在同一行transition语句中，可以分别指定多个属性
```css
img{
  transition: 1s height, 1s width;
}
```
