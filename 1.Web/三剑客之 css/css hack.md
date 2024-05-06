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
# CSS-hack
有一些情况，有一些特殊的代码我们只需要再某些浏览器中执行，而在其他浏览器中不需要执行，就可以使用CSS hack来解决问题。

**CSS hack** 指的是一个特殊的代码只在某些特殊的浏览器中可以识别,通过这种方式，来为浏览器设置一些特殊的代码

- 条件Hack
  - 条件hack只对IE浏览器有效，IE10及以上浏览器不支持，其他浏览器都会将它识别为注释

- 属性hack
  - 在样式前添加下划线，则该样式只有IE6及以下的浏览器才能识别

  - 在样式前添加 * ， 则该样式只有IE7及以下的浏览器才能识别

  - 在样式的最后添加 \0 ，则只有IE8以上的浏览器才能识别

hack不到万不得已的情况不要使用