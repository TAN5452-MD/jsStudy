const promise = new Promise((resolve,reject)=>{
    //reject("reject")
    throw new Error("reject status")
})
// 当throw和reject一起的时候根据他们2个书写的顺序决定且后续代码不会执行

//当executor抛出异常时
promise.then(undefined,(err)=>{
    //reject状态只会调用第二个函数
    console.log("err",err);
})


//可以通过catch来传入错误/拒绝
//不符合promise A+规范
/**
 * promise.catch(err=>{
 * 
 * })
 */

//只会捕获第一个promise的异常捕获,如果没有异常则会为then里面的promise待用
promise.then(res=>{
    return new Promise((res,rej)=>{
        rej("111111")
        // throw new Error('')
    })
}).catch(err=>{
    
})


//3.拒绝捕获的问题
//此时是独立调用 会报错
promise.then(res => {

})

promise.catch(err => {

})

promise.then(res=>{

}).then(res=>{
    throw new Error("then error message")
}).catch(err=>{
    //此时会立马捕获promise内部的异常，不会继续传递
    console.log(err);
})



promise.then(res=>{
    console.log(res)
}).catch(err=>{
    console.log(err);
    return "111" //等同于 return new Promise(resolve => resolve(x))
    //所以会执行后面的then而不是catch
}).then(res=>{
    console.log(res);
}).catch(err=>{
    console.log(err);
})
