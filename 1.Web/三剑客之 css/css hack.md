```
* html .test{color:#090;} /* For IE6 and earlier */
* + html .test{color:#ff0;} /* For IE7 */
.test:lang(zh-cn){color:#f00;} /* For IE8+ and not IE */
.test:nth-child(1){color:#0ff;} /* For IE9+ and not IE */
:root .test {background-color:green;} /* For IE9 and Opera */
@media screen and (-webkit-min-device-pixel-ratio:0) {.test {color:gray;}} /* For Chrome and Safari */
@-moz-document url-prdfix() {.test {color:#fff}} /* For Forefox */
* 上述代码中的3,4两行就是典型的利用能力来进行选择的CSS Hack。
```
# css hack 针对不同浏览器的css
# 规则  指示css行为的css语句
- @+标识符 xxx；
    - @charset 样式表使用的字符集
    - @import
    - ...
