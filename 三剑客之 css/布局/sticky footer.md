# striky footer

页面内容不够长的时候，页脚固定在视窗底部；如果页面内容足够长，页脚被内容往下推。

## 什么是 stikcyFooter
- 经典的粘连footer布局
- 我们有一块内容<main>
    - 当main的高度足够长时，footer应该紧跟在 main 元素的后面
    - 当main元素比较短的时候（比如小于屏幕高度），我们期望这个footer会粘连在屏幕底部


## 方法一
[flexbox 实现](https://www.jianshu.com/p/127dd8cd42de)
```
body{
  display: flex;
  flex-flow: column;
  min-height: 100vh;
}
.content{
  flex: 1;
}
```

## 方法二
```
*{
  padding: 0;
  margin: 0;
}
main{
  min-height:calc(100vh - 页脚块高度);
  min-height:-moz-calc(100vh - 页脚块高度);
  min-height:-webkit-calc(100vh - 页脚块高度);    
}
```
