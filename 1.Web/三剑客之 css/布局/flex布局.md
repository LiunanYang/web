# flex
[MDN-flex](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex)
# flex container的属性

- **flex-direction**：方向
  - row:横向排列
  - column：纵向排列
  - row-reverse：横向反向排列
  - column-reverse：纵向反向排列
- **flex-wrap**：换行
  -可选值： warp/nowarp
- **flex-flow**：上面两个的简写
- **jusitify-content**：主轴方向对齐方式
  - space-between：两端对齐(两端无空位，均匀排列)
  - space-around：子元素拉手分布(两端有空位)
  - flex-start：居左
  - flex-end:居右
  - center：居中
- **align-items**：侧轴对齐方式
  - strech/baseline/flex-start/flex-end/center
- **align-content**：多行列内容对齐方式
  - strech/space-between/space-around/flex-start/flex-end/center

# flex-item 的属性
flex用来设置 flex-grow，flex-shrink()，flex-basis

- **flex-grow**: flex item 的弹性因子
- **flex-shrink**：指定了 flex item 的收缩规则
  - flex item 的默认宽度之和大于容器的时候才会收缩
- **flex-basis**：定义flex item 在主轴方向上的初始大小
  - 必须加上单位，不然可能被当成伸缩性，默认为auto

- **initial**
元素自身宽高设置尺寸，缩短自身适应flex容器，不会伸长，不会吸收 flex 容器的额外空间
- **auto**
会缩短，也会伸长自身 吸收 flex 容器的额外空间
- **none**
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















