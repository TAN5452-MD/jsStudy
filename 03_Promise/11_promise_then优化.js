const PROMISE_STATUS_PENDINGI = 'pending'
const PROMISE_STATUS_FULFILLED = 'fulfilled'
const PROMISE_STATUS_REJECT = 'reject'

class myPromise {
    constructor(executor){
        this.status = PROMISE_STATUS_PENDINGI
        this.value = undefined
        this.reason = undefined
        this.onFulfilledFns = []
        this.onRejectFns = []
       const resolve = (value) => {
       if(this.status === PROMISE_STATUS_PENDINGI){
           //只有当状态等于pending的时候才能被改变
           //这个函数是延迟调用的函数
                queueMicrotask(() => {
                    //如果状态已经改变了就不需要再次改变了
                    if(this.status !== PROMISE_STATUS_PENDINGI) return
                this.status =PROMISE_STATUS_FULFILLED
                    this.value = value
                    this.onFulfilledFns.forEach(fn => fn(this.value))
                })   
       }
           //此时由于代码还没执行到then并没有被初始化 所以this.then是调用不到的

       }

       const reject = (reason) => {
           if(this.status === PROMISE_STATUS_PENDINGI){
           queueMicrotask(()=>{
               
               if(this.status !== PROMISE_STATUS_PENDINGI) return
               this.status = PROMISE_STATUS_REJECT
               this.reason = reason
               this.onFulfilledFns.forEach(fn => fn(this.reason))
           })   
           }
        }
        executor(resolve,reject)
    }
    then(onFulfilled,onReject){
        //如果此时的状态已经确定的话就立即执行
        if(this.status === PROMISE_STATUS_FULFILLED && onFulfilled){
            onFulfilled(this.value)
        }
        if(this.status === PROMISE_STATUS_REJECT && onReject){
            onReject(this.reason)
        }
        //如果状态未确定的时候才添加
        if(this.status === PROMISE_STATUS_PENDINGI){
        this.onFulfilledFns.push(onFulfilled) 
        this.onRejectFns.push(onReject)
        }
    }
}

const promise = new myPromise((resolve,reject)=>{
    resolve("123")
    reject("456")
})

setTimeout(() => {
promise.then(res=>{
console.log(res);
},err=>{
console.log(err);
})
    
}, 1000);

