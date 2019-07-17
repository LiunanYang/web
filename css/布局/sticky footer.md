# striky footer

页面内容不够长的时候，页脚固定在视窗底部；如果页面内容足够长，页脚被内容往下推。

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
