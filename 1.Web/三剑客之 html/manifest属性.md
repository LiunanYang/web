manifest是H5提供的一种应用缓存机制

利用manifest缓存技术，可以做到
- 离线访问：即使没有网络，用户依然可以访问网络内容
- 访问更快：数据存在于本地，省去了浏览器发送http请求的时间，因此访问更快，移动端效果更为明显
- 降低负载：浏览器只在manifest文件改动时，才去服务器下载需要缓存的资源，大大降低了服务器负载

## 如何开启应用缓存
```
<html manifest="url">
...
</html>
```
- 在html标签中指定manifest文件，表示该网页使用manifest进行缓存
- manifest 属性的值url
  - 相对地址:需要缓存的文件列表需要在test.appcache文本文件中指定 manifest="test.appcache"
  - 绝对地址:指向另一个网站 manifest="www.sha.com"

[聊一聊H5应用缓存-Manifest](https://segmentfault.com/a/1190000009047702)