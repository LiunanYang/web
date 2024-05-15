# vue2 和 vue3 的区别

## API设计
VUE2 是选项式API，
VUE3 是组合式API

setup 函数是组合式API的入口点，在setup函数中，可以定义响应式数据、方法、生命周期钩子

ref()用于创建单个响应式数据。
reactive()用于创建响应式对象。

## 数据绑定
VUE2 双向数据绑定是通过 Object.defineProperty() 实现，通过过数据进行劫持并结合发布订阅模式实现。

VUE3 双向数据绑定是通过 Proxy

## 性能
VUE3性能提升，对虚拟dom重写和优化

## 生命周期
VUE3 新增：
- onActivated：当被 `<keep-alive>` 包裹的组件被激活时调用。
- onDeactivated：当被 `<keep-alive>` 包裹的组件被停用时调用。
- onErrorCaptured：当捕获一个来自子孙组件的错误时被调用。此钩子会接收三个参数：错误对象、发生错误的组件实例以及一个包含错误来源信息的字符串。此钩子可以返回 false 以阻止该错误继续向上传播。