# **$nextTick**
- API：`this.$nextTick(callback)`
- 作用：将回调延迟到下次 DOM 更新循环之后进行
- 背景：vue DOM更新是异步的，只要侦听到数据变化，vue 将开启一个队列，将操作放入队列，将同一事件循环中发生的所有数据变更也放入。在下一次事件循环中，vue 再执行实际（去重后）操作，清空队列。
```js
methods: {
    example() {
        // 修改数据，将操作放入队列，如果重复执行，队列会进行去重操作
        this.message = 'changed'
        // DOM 尚未更新
        this.$nextTick(function() {
            // DOM 现在更新了
            // `this` 被绑定到当前实例
            this.doSomethingElse()
        })
    }
}
```