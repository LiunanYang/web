# grid

### 属性
grid容器属性
- grid-tempalte-columns 有多少列
- grid-template-rows 有多少行
- gap 项目的间距 
- justify-content、align-content 网格在水平轴和垂直轴的对齐方式
- justify-items、align-items 网格项的对齐方式


grid项目属性
- grid-column 写一个数字，代表位于第几列；写x/y，表示跨越的范围，不包括第y列
  - grid-column-start 和 grid-column-end 的缩写
- grid-row 位于第几行

### 使用步骤
1. 创建grid 容器，划分网格，定义几行几列
2. 给grid项目放置到指定的位置
3. 间隙和对齐
4. 响应式设计，通过媒体查询改变网格的布局
