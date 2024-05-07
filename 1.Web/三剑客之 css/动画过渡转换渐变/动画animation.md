# animation
可以创建复杂的动画效果，可以指定动画的名称、持续时间、动画速度曲线、延迟时间、播放次数、播放方向

特点：
- 无需触发
- 循环播放
- 精确控制动画的每个阶段
- 多种变化：动画关键帧可以设置多个样式

## 参数
### 1.animation-name
定义动画名称，名称是 @keyframes 规则定义的名称

### 2.animation-duration
完成动画所花费的时间，默认值`0s`

### 3.animation-timing-function
动画的速度曲线
- ease，默认值，慢快慢
- linear：匀速
- ease-in：慢快
- ease-out：快慢
- cubic-bezier函数：自定义速度模式,[可通过网站定制](https://cubic-bezier.com/)

### 4.animation-delay
在动画开始之前的延迟时间，默认值`0s`

### 5.animation-iteration-count
动画播放的次数，默认值为`1`
- 设置`infinite` 无限次播放

### 6.animation-direction
动画播放的方向
- normal：默认，每次循环都向前播放
- reverse：每次循环向后播放
- alternate：先向前再向后
- alternate-reverse：先向后再向前

### 7.animation-play-state
控制动画的播放或暂停
- running 播放，默认值
- paused 暂停(也就是将它重置到开始状态)

可以通过 js 控制动画的暂停或者播放
```js
// 有一个带有动画的元素ID为'myElement'  
var element = document.getElementById('myElement');  
// 停止动画  
element.style.animationPlayState = 'paused';  
// 播放动画  
element.style.animationPlayState = 'running';  
```

## @keyframe
定义动画序列中的关键帧，使用百分比或 from 和 to

定义一个动画名称，例如example
```css
@keyframes example {  
  0%   {background-color: red;} /* 动画开始时 */  
  25%  {background-color: yellow;} /* 动画25%时 */  
  50%  {background-color: blue;} /* 动画50%时 */  
  100% {background-color: green;} /* 动画结束时 */  
}
```