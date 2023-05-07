setTimeout(() => {
  
}, 1000);

//回调函数会加入到队列里面  

/* 
    不同的任务加入的队列不一样
*/


//宏任务   setTimeout  setInterval  setImmediate  I/O  UI rendering ajax
//微任务   promise.then  process.nextTick  Object.observe  MutationObserver queueMicrotask

//规范：在执行任何的宏任务之前，都需要先保证微任务队列为空
//     如果不为空，那么就优先执行微任务队列的回调



//如何做相关面试题 先写出main script队列 再去分析宏任务队列， 再写出微任务队列
