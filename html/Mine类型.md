## Mine类型：
- 每当浏览器请求一个页面时，web服务器会在发送实际页面内容之前，先发送一些头信息
- 浏览器需要这些信息来决定如何解析随后的页面内容。最重要的是Content-Type
- 比如：Content-Type：text/html
    - text/html：即这个页面的内容类型或者mine类型。这个头信息将唯一确定某个资源的本质是什么，也决定来它该如何被呈现
- 图片也有mine属性
    - jpg：image/jpeg
    - png：image/png
- js也有自己的mine类型，css也有自己的mine类型
- 任何资源都有自己的mine类型，整个web都依靠自己的mine类型去运作


