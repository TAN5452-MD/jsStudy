const PROMISE_STATUS_PENDINGI = 'pending'
const PROMISE_STATUS_FULFILLED = 'fulfilled'
const PROMISE_STATUS_REJECT = 'reject'

class myPromise {
    constructor(executor){
        this.status = PROMISE_STATUS_PENDINGI
        this.value = undefined
        this.reason = undefined
       const resolve = (value) => {
       if(this.status === PROMISE_STATUS_PENDINGI){
           //只有当状态等于pending的时候才能被改变
           //这个函数是延迟调用的函数
                this.status =PROMISE_STATUS_FULFILLED
                queueMicrotask(() => {
                    this.value = value
                    this.onFulfilled(this.value)
                })   
       }
           //此时由于代码还没执行到then并没有被初始化 所以this.then是调用不到的

       }

       const reject = (reason) => {
           if(this.status === PROMISE_STATUS_PENDINGI){
               this.status = PROMISE_STATUS_REJECT
           queueMicrotask(()=>{
               this.reason = reason
               this.onReject(this.reason)
           })   
           }
        }
        executor(resolve,reject)
    }
    then(onFulfilled,onReject){
       this.onFulfilled = onFulfilled
       this.onReject = onReject
    }
}

const promise = new myPromise((resolve,reject)=>{
    reject("123")
})


promise.then(res=>{
console.log(res);
},err=>{
console.log(err);
})

