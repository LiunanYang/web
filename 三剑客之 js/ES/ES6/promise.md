在 js中，所有代码都是单线程执行的，所以js的所有网络操作，浏览器事件，都必需是异步执行的

Ajax就是典型的异步操作
```
request.onreadystatechange = function () {
    if (request.readyState === 4) {
        if (request.status === 200) {
            return success(request.responseText);
        } else {
            return fail(request.status);
        }
    }
}
```
把回调函数success(request.responseText)和fail(request.status)写到一个AJAX操作里很正常，但是不好看，而且**不利于代码复用**。
```
var ajax = ajaxGet('http://...');
ajax.ifSuccess(success)
    .ifFail(fail);
```
可以用这样的**链式**调用，好处：先**统一执行ajax逻辑**，不关心如何处理结果。然后根据结果成功还是失败，在将来某个时候调用回调函数

这种“承诺将来会执行的对象”在js中称为**promise对象**

