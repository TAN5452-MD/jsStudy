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

//切记如果await函数没有返回值，则默认返回undefined
//如何做相关面试题 先写出main script队列 再去分析宏任务队列， 再写出微任务队列





mian task    
micro 0  1 2 3 5 6 4
macro


Promise.resolve().then(() => {
    //如果返回的是一个thenable 对象或者不是一个普通的值会多加一次微任务
    //如果返回的是一个普通的值，那么会直接执行下一个微任务
    //如果返回的是一个promise对象，会推迟2次微任务，因为不是前2种情况会推迟一次微任务，如果再return一个promise会继续推迟一次
    return {
        then: function (resolve, reject) {
            resolve(1)
        }
    }
})
