# background
简写顺序是：
1. background-color 默认为透明或者继承父元素
2. background-image 默认为无
3. background-repeat 默认为repeat
4. background-attachment 图像是固定在视口内还是随着元素的内容一起滚动，默认为scroll
5. background-position 设置背景图像的起始位置，默认为 0% 0%，分别代表x轴外轴的位置，以左上角为原点

/* CSS3 新增的 */

6. background-size 取决于背景图像和元素的尺寸，如果没有显式指定尺寸，并且图像尺寸和元素尺寸不匹配，那么图片保持原始尺寸（auto）
  - cover：尽可能的缩放背景图片并保持图像原宽高比例以完全覆盖背景区，可能会有部分显示不出来
  - contain：缩放背景图片完全装入背景区，可能导致背景区部分空白

7. background-origin 定义背景图片从哪里开始绘制
  - padding-box：背景图像从元素的 padding 区域开始绘制（默认值）
  - border-box：背景图像从元素的 border 区域开始绘制。
  - content-box：背景图像从元素的 content 区域开始绘制

8. background-clip 背景图像的绘制区域
  - border-box：背景图像扩展到元素的 border 区域（默认值）
  - padding-box：背景图像只扩展到元素的 padding 区域
  - content-box：背景图像只会显示在元素的 content 区域

> background-position 和 background-size 中间要写斜杠

```css
div {  
  background: #ffffff url('image.jpg') no-repeat right top / 200px 100px fixed padding-box content-box;  
}
```