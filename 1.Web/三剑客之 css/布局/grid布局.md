# grid

### 属性
grid容器属性
- grid-tempalte-columns 有多少列
- grid-template-rows 有多少行
- gap 项目的间距 
- justify-content、align-content 网格在水平轴和垂直轴的对齐方式
- align-items、justify-items 网格项的对齐方式
  - 缩写place-items


grid项目属性
- grid-column 写一个数字，代表位于第几列；写x/y，表示跨越的范围，不包括第y列
  - grid-column-start 和 grid-column-end 的缩写
- grid-row 位于第几行

### 使用步骤
1. 创建grid 容器，划分网格，定义几行几列
2. 给grid项目放置到指定的位置
3. 间隙和对齐
4. 响应式设计，通过媒体查询改变网格的布局

### flex布局和grid布局的区别
- flex 是一维布局，它主要作用于父级容器，通过控制容器的排列规则达到效果。虽然flex布局有主轴和侧轴，可以在两个方向上进行排列，达到类似于二维的效果，但是实际 flex 布局主要是控制主轴上的排列，还是不能够精确的定位元素在容器的位置。
- grid 二维布局，给容器定义行和列，划分成多个网格，可以控制容器内项目占据的位置和排列规则，精确的定位元素在容易的位置，实现各种布局。