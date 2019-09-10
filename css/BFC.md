# BFC
## Box(css布局的基本单位)
- Box是css布局的对象和基本单位，直观点来说，就是一个页面由很多Box组成
- 元素的类型和 display 属性，决定了这个Box的类型。不同的 Box 会参与不同的 Fomatting Context（一个决定如何渲染文档的容器）
    - block-level box：display 属性为block、list-item、table的元素，会生成 block-level box，并且参与 Block Fomatting Context（即 BFC！）
    - inline-level box：display 属性为inline、inline-block、inline-table 的元素，会生成 inline-level box，并且参与 Inline Fomatting Context.
## Fomatting Context
- Fomatting Context 是 W3C CSS2.1 规范中的一个概念。
- 它是页面中的一块渲染区域，并有一套渲染规则，它决定了其子元素将如何定位，以及和其他元素的关系和相互作用。
- 最常见的 Fomatting Context 有 Block Fomatting Context（BFC）和 Inline Fomatting Context（IFC）
## BFC是什么
- BFC直译为“块级格式化上下文”。
- 它是一个独立的渲染区域，只有Block-level box 参与，它规定了内部的Block-level box 如何布局，并且与这个区域外部毫不相干。
## BFC布局规则
1. 内部的 box 会在垂直方向上一个接一个的放置
2. BFC 区域不会与 float box 重叠
3. 内部的 box 垂直方向上的距离由 margin 决定。属于同一个 BFC 的相邻 box 的 margin 会发生重叠
4. 计算 BFC 的高度，浮动元素也参与计算（清除浮动 haslayout）
5. BFC 就是页面上一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，反之也如此。
## BFC什么时候会出现（哪些元素会生成 BFC）
- 根元素
- float 为 none
- position 为 absolute 或者 fixed
- over-flow 不为 visible
- display 为 inline-block 、table-cell、table-caption、flex、inline-flex
