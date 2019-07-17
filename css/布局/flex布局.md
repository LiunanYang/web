# flex
[MDN-flex](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex)

## flex 是个简写属性
用来设置 flex-grow，flex-shrink()，flex-basis

- flex-grow: flex item 的弹性因子
- flex-shrink：指定了 flex item 的收缩规则
  - flex item 的默认宽度之和大于容器的时候才会收缩
- flex-basis：定义flex item 在主轴方向上的初始大小
  - 必须加上单位，不然可能被当成伸缩性，默认为auto

- initial
元素自身宽高设置尺寸，缩短自身适应flex容器，不会伸长，不会吸收 flex 容器的额外空间
- auto
会缩短，也会伸长自身 吸收 flex 容器的额外空间
- none
非弹性，既不会缩短，也不会伸长，相当于 flex：1 1 auto

## flex 属性可以指定1个，2个或3个值

**单值**：
  - 一个无单位数，被当作flex-grow
  - 一个有效的宽度值 ，被当作flex-basis
  - none、auto、initial

**双值**：
  - 第一个值必须为无单位数，当作 flex-grow
  - 第二个值：
    - 一个无单位数，被当作 flex- shrink
    - 一个有效宽度值，被当作 flex-basis

**三值**：
  - flex-grow flex-shrink flex-basis















