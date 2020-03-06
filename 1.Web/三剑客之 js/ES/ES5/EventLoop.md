1. 浏览器中的 EventLoop 和 Node.js中的 EventLoop 不一样，实现机制不一样。
2. Node.js 可以理解成有4个宏任务队列和2个微任务队列，但是执行宏任务时有6个阶段。
3. Node.js 中，先执行全局 Script 代码，执行完同步代码调用栈清空后，先从微任务队列 Next Tick Queue 中依次取出所有的任务放入调用栈中执行。然后开始宏任务的6个阶段，每个阶段都将该宏任务队列中的所有任务都取出来执行（注意：这里和浏览器不一样，浏览器只取一个），每个宏任务阶段执行完毕后，开始执行微任务，再开始执行下一阶段宏任务，以此构成事件循环。

new Promise() 里面是同步代码，而非微任务。

 setImmediate() 方法用于中断长时间允许的操作，并在完成其他操作后立即允许回调函数。

 setTimeout 回调函数在 timer 阶段执行，setImmediate 回掉函数在check 阶段执行，Event Loop 的开始会先检查timer 阶段，但是在开始之前到 timer 阶段会消耗一定时间，所以就会出现两种情况：
1. timer 前的准备时间超过 1ms，满足 loop->time >=1,则执行 timer 阶段（setTimeout）的回调函数
2. timer 前的准备时间小于1ms，先执行 check 阶段（setImmediate）的回调函数，下一次 Event Loop 执行 timer 阶段（setTimeout）的回掉函数