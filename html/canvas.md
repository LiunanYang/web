```
<body>
  <canvas id="canvas" width="300" height="300"></canvas>
</body>
<script>
  var canvas = document.getElementById("canvas")
  if(canvas.getContext){
    var ctx = canvas.getContext("2d")
    ctx.fillStyle="red"
    ctx.fillRect(10,10,60,30)
  }
</script>
```