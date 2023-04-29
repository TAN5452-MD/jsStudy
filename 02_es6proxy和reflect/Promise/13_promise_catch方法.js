const PROMISE_STATUS_PENDINGI = 'pending'
const PROMISE_STATUS_FULFILLED = 'fulfilled'
const PROMISE_STATUS_REJECT = 'reject'

function execFunctionWithCatchError(fn,value,resolve,reject){
    try {
        const result = fn(value)
        resolve(result)
    }catch(err){
        reject(err)
    }
}

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
                    this.onFulfilledFns.forEach(fn => fn())
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
               this.onRejectFns.forEach(fn => fn())
           })   
           }
        }
        //解决直接抛出异常的情况
        try {
        executor(resolve,reject)
        } catch (error) {
            reject(error)
        }
    }
    then(onFulfilled,onReject){
        //如果为空就手动抛出异常 这样第二个promise就能捕捉到
        onReject = onReject ?? (err => {throw err})

        //为了实现链式调用 需要返回promise
        return new myPromise((resolve,reject) => {
        //如果此时的状态已经确定的话就立即执行
        if(this.status === PROMISE_STATUS_FULFILLED && onFulfilled){
        execFunctionWithCatchError(onFulfilled, this.value, resolve, reject)
        }
        if(this.status === PROMISE_STATUS_REJECT && onReject){
        
        execFunctionWithCatchError(onReject, this.value, resolve, reject)

        }
        //如果状态未确定的时候才添加
        if(this.status === PROMISE_STATUS_PENDINGI){
        //由于需要拿到返回值再reslove 所以这里用回调函数处理一下
       onFulfilled &&  this.onFulfilledFns.push(()=>{
           
            execFunctionWithCatchError(onFulfilled, this.value, resolve, reject)
        }) 
        onReject && this.onRejectFns.push(()=>{
            execFunctionWithCatchError(onReject,this.reason, resolve, reject)
        })
        } 
    })
    }
    catch(onReject){
        return this.then(null,onReject)
    }
    }


const promise = new myPromise((resolve,reject)=>{
   resolve("123")
   // reject("456")
    // throw new Error("789")
})

promise.then(res=>{
    console.log(res);
}).catch(err=>{

})
