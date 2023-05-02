//Promise有哪些对象方法
//console.log(Object.getOwnPropertyDescriptors(Promise.prototype));

const promise = new Promise((res,rej)=>{
    res(1)
})

//then可以重复调用
//当改变状态时 以下所有的then回调都会执行
//注意 这里的写法和下面的写法不一样 这里执行的都是同一个promise的回调
//而下面的return aaaa后的回调则是相对于return的aaa的then
promise.then((res)=>{
    console.log("res1",res);
})
promise.then(res=>{
    console.log("res2",res);
})


//2.then方法传入的"回调函数"可以有返回值
//  如果返回的是一个普通值那么这个普通的值会被作为新的promise的resolve值

promise.then(res=>{
    //then的返回值会自动包装成一个promise对象
    return "aaaa"
}).then(res=>{
    //此时这里的res对应的是新的promise的resolve对象
    console.log(res);
    return undefined  //  === resolve(undefined)
})


//如果返回的是一个promise 则由最里层的promise决定
promise.then(res=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(11111)
        }, 1000);
    })
}).then(res=>{
    console.log(res);
})


//如果返回的是一个对象且实现了thenable

promise.then(res=>{
    return {
        then(resolve,reject){
            resolve(22222)
        }
    }
}).then(res=>{
    console.log("res",res);
})




//总结：其实可以看成promise是会在每一次的回调中被消费掉不会持续传递
