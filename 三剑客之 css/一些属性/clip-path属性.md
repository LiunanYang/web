## 心形
```
#clipped {
  margin-bottom: 20px;
  clip-path: url(#cross);
}

<img id="clipped" src="https://mdn.mozillademos.org/files/12668/MDN.svg"
  alt="MDN logo">

<svg>
  <clipPath id="cross" clipPathUnits="objectBoundingBox">
    <path d="M0.5,1
      C 0.5,1,0,0.7,0,0.3
      A 0.25,0.25,1,1,1,0.5,0.3
      A 0.25,0.25,1,1,1,1,0.3
      C 1,0.7,0.5,1,0.5,1 Z" />
  </clipPath>
</svg>
```
# clip-path 动画
- 过渡的几个状态，坐标顶点数量必需一致
## 过渡动画
```
#circle1{
      width: 200px;
      height: 200px;
      background-color: red;
      animation: test 5s linear infinite;
      transition: 2s;
      clip-path: polygon(
        50% 0%,
        0% 100%,
        100% 100%,
        100% 100%,
        100% 100%,
        100% 100%,
        100% 100%,
        100% 100%,
        100% 100%
      );
    }
    @keyframes test{
      20% {
        background-color: darkorange;
        clip-path: polygon(
            50% 0%,
            100% 50%,
            50% 100%,
            0% 50%,
            0% 50%,
            0% 50%,
            0% 50%,
            0% 50%,
            0% 50%
        );
    }
    40% {
        clip-path: polygon(
            50% 0%,
            100% 38%,
            82% 100%,
            18% 100%,
            0% 38%,
            0% 38%,
            0% 38%,
            0% 38%,
            0% 38%
        );
    }
    60% {
        background-color: lemonchiffon;
        clip-path: polygon(
            50% 0%,
            100% 25%,
            100% 75%,
            50% 100%,
            0% 75%,
            0% 25%,
            0% 25%,
            0% 25%,
            0% 25%
        );
    }
    80%,100% {
        clip-path: polygon(
            50% 0%,
            90% 20%,
            100% 60%,
            75% 100%,
            25% 100%,
            0% 60%,
            10% 20%,
            10% 20%,
            10% 20%
        );
    }
  }
```
```
<div id="circle1"></div>
```

## 图形变换
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
```
  <div id="main">
    <div id="a"></div>  
    <div id="b"></div>  
    <div id="c"></div>  
    <div id="d"></div>  
  </div>
```