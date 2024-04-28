# BFC
Block Fomatting Context，块级格式化上下文
- 它是 CSS 中一个用于控制元素布局和渲染的独立容器，里面的布局和渲染不会受到外部元素的影响
- 内部的盒子会在垂直方向上从上往下排列，垂直方向上的距离由 margin 决定
- 不同 BFC 中的盒子不会外边距重叠，同一个 BFC 中相邻盒子的垂直外边距会重叠

## 创建方式（哪些元素会生成 BFC）
- 根元素
- display 为 inline-block 、table-cell、table-caption、flex、inline-flex
- float 为 left 或者 right
- position 为 absolute 或者 fixed
- over-flow 不为 visible

## 作用
- 解决相邻元素垂直外边距重叠问题
- 浮动元素的影响
