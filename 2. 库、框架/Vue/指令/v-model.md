# v-model
- 使用 v-model 可以实现 表单元素和 Model中数据的双向数据绑定
- v-model 只能运用在 表单元素中
    - input(radio、text、address、emial) select、checkbox、textarea
- 监听用户输入事件以更新数据



# 双向绑定的原理
Vue内部通过Object.defineProperty方法属性拦截的方式，把data对象里每个数据的读写转化成getter/setter，当数据变化时通知视图更新。