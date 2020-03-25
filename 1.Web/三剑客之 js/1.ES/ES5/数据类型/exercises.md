面试题1：
```
  let a = 12
  let b = a
  b = 13
  console.log(a)  //12

  let a = {n:12}
  let b = a
  b['n'] = 13
  console.log(a.n)  //13

  let a = {n:12}
  let b = a
  b = {n:13}
  console.log(a.n)  //12
```
面试题2：
```
  let x = [12,23]
  function fn(y){
    y[0]=100
    y=[100]
    y[1]=200
    console.log(y)     //100 200
  }
  fn(x)
  console.log(x)  //100 23
```