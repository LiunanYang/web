# footer 布局
页面内容不够长的时候，页脚固定在视窗底部；如果页面内容足够长，页脚被内容往下推。

## 方法一
[flexbox 实现](https://www.jianshu.com/p/127dd8cd42de)
```css
#container{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.content{
  flex: 1;  /* 占据剩余空间 */
}
.footer {}
```

## 方法二
```css
*{
  padding: 0;
  margin: 0;
}
main{
  min-height:calc(100vh - 页脚块高度);  
}
```
