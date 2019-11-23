animation 属性是一个简写属性

值|描述
--|--
1. animation-name | 规定需要绑定到选择器的 keyframe 名称
2. animation-duration | 完成动画所花费的时间
3. animation-timing-function | 动画的速度曲线
4. animation-delay | 在动画开始之前的延迟
5. animation-iteration-count | 动画播放的次数
6. animation-direction | 是否轮流反向播放动画

```
#main{
      position: absolute;
      top: 0;
      left: 0;
      /* border: 1px solid black; */
      animation: main 2s infinite alternate;
    }
    #main div{
      width: 100px;
      height: 100px;
      position: absolute;
    }
    #a{
      clip-path: polygon(50% 0,100% 100%,0 100%);
      animation: a 2s infinite alternate;
      left: 0;
    }
    #b{
      clip-path: polygon(0 0,100% 0,50% 100%);
      animation: b 2s infinite alternate;
      left:100px;
    }
    #c{
      clip-path: polygon(50% 0,100% 100%,0 100%);
      animation: c 2s infinite alternate;
      left: 200px;
    }
    #d{
      clip-path: polygon(0 0,100% 0,50% 100%);
      animation: d 2s infinite alternate;
      left: 300px;
    }
    @keyframes a{
      0%,10%{
        background-color:blue;
        clip-path: polygon(50% 0,100% 100%,0 100%);
      }
      90%,100%{
        background-color: red;
        clip-path: polygon(0 0,100% 0,50% 50%);
        left: 150px;
      }
    }
    @keyframes b{
      0%,10%{
        background-color:green;
        clip-path: polygon(0 0,100% 0,50% 100%);
      }
      90%,100%{
        background-color: red;
        clip-path: polygon(0 0,50% 50%,0 100%);
        left: 150px;
      }
    }
    @keyframes c{
      0%,10%{
        background-color:orange;
        clip-path: polygon(50% 0,100% 100%,0 100%);
      }
      90%,100%{
        background-color: red;
        clip-path: polygon(100% 0,100% 100%,50% 50%);
        left: 150px;
      }
    }
    @keyframes d{
      0%,10%{
        background-color:yellow;
        clip-path: polygon(0 0,100% 0,50% 100%);
      }
      90%,100%{
        background-color: red;
        clip-path: polygon(50% 50%,100% 100%,0 100%);
        left: 150px;
      }
    }
    @keyframes main{
      0%,10%{
        width:400px;
        height:100px;
      }
      90%,100%{
        width: 100px;
        height: 100px;
      }
    }
```