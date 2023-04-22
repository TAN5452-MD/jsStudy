const promise = new Promise((resolve,reject)=>{
    //reject("reject")
    throw new Error("reject status")
})


//当executor抛出异常时，也是会调用错误捕获的回调函数的
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
//此时是独立调用
promise.then(res => {

})

promise.catch(err => {

})

1.01
