# Web Storage
HTML5 Web Storage 是对 HTML4 cookie 存储机制的一个改善
- 存储空间一般为 5 MB

## sessionStorage
- 临时保存。页面会话在浏览器打开期间一直保持，关闭浏览器窗口后销毁
- 打开多个相同的 URL 的 Tabs 页面，会创建各自的 sessionStorage
- 场景：账号一次性登录 

## localStorage
- 将数据保存在客户端本地的硬件设备(硬盘，也可以是其他硬件设备)中，即使浏览器被关闭了，该数据仍然存在，下次打开浏览器访问网站时仍然可以继续使用
- 永久保存。除非主动删除数据，否则永不消失
- 场景：长期登录、判断用户是否已登录，适合长期保存在本地的数据
- 不可以跨域使用

### API
```js
localStorage.setItem(key, value);
localStorage.getItem(key);
localStorage.removeItem(key);
localStorage.clear();  //清空所有
```

### 如何设置 localStorage 定时清理？
1. 设置定时器
2. 设置过期时间：存储数据时，存储一个包含实际数据和过期时间的对象，读取 localStorage 数据时，先检查时间是否过期，如果过期，就删除数据
