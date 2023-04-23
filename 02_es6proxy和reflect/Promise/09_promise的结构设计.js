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
           this.status = PROMISE_STATUS_FULFILLED
           this.value = value
       }

       }

       const reject = (reason) => {
           if(this.status === PROMISE_STATUS_PENDINGI){
               this.status = PROMISE_STATUS_REJECT
               this.reason = reason
           }

        }
        executor(resolve,reject)
    }
}

const promise = new myPromise((resolve,reject)=>{

})
