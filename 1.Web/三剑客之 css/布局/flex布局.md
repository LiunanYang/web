# flex
[ruanyifeng flex](https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

弹性布局，使用 flex 布局的元素成为 flex 容器，所有子元素称为 flex 项目。
## flex container的属性
- **flex-direction**：项目排列方向
  - row:横向排列
  - column：纵向排列
  - row-reverse：横向反向排列
  - column-reverse：纵向反向排列
- **flex-wrap**：项目如何换行
  -可选值： warp/nowarp
- **flex-flow**：上面两个的简写
- **jusitify-content**：主轴方向对齐方式
  - space-between：两端对齐(两端无空位，均匀排列)
  - space-around：子元素拉手分布(两端有空位)
  - flex-start：居左
  - flex-end:居右
  - center：居中
- **align-items**：垂直轴对齐方式
  - strech/baseline/flex-start/flex-end/center
- **align-content**：多行列内容对齐方式
  - strech/space-between/space-around/flex-start/flex-end/center

## flex-item 的属性

- **order**：定义项目排列顺序，数值越小，排序越靠前，默认为0
- **flex-grow**: flex item 扩大规则，默认为0，在有剩余空间时如何扩大
- **flex-shrink**：指定了 flex item 的收缩规则，默认为1，
- **flex-basis**：定义flex item 在主轴方向上的初始大小
  - 必须加上单位，不然可能被当成伸缩性，默认为auto
- **flex**：flex-grow，flex-shrink，flex-basis 缩写
- **align-self**：项目单独指定垂直轴对齐方式

## flex 属性可以指定1个，2个或3个值

**单值**：
  - 一个无单位数，被当作flex-grow
  - 一个有效的宽度值 ，被当作flex-basis
  - **initial**
    元素自身宽高设置尺寸，缩短自身适应flex容器，不会伸长，不会吸收 flex 容器的额外空间
  - **auto**
    会缩短，也会伸长自身 吸收 flex 容器的额外空间
  - **none**
    非弹性，既不会缩短，也不会伸长，相当于 flex：1 1 auto

**双值**：
  - 第一个值必须为无单位数，当作 flex-grow
  - 第二个值：
    - 一个无单位数，被当作 flex- shrink
    - 一个有效宽度值，被当作 flex-basis

**三值**：
  - flex-grow flex-shrink flex-basis

## 九宫格布局
父元素 
``display: flex;flex-wrap: wrap;``,子元素设置``flex-basis``















