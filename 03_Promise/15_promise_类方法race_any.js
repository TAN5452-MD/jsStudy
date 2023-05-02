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
        onReject = onReject || (err => {throw err})
        
        onFulfilled = onFulfilled || (value => {return value})

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
        //catch也是返回一个promise 所以需要return
        return this.then(null,onReject)
    }
    finally(onFinally){
         this.then(onFinally,onFinally)

    }
    static resolve(value){
        return new myPromise((resolve,reject)=>{
          return resolve(value)
        })
    }

    static reject(reason){
        return new myPromise((resolve,reject)=>{
           return reject(reason)
        })
    }
    //有reject就返回reject的值
    static all(promises){
        return new myPromise((resolve,reject)=>{
            const value = []
            promises.forEach(promise => {
               promise.then(res=>{
                   value.push(res)
                   if(value.length === promises.length){
                       resolve(value)
                   }
               },err => {
                   reject(err)
               }) 
            })
        })
    }
    //拿到所有结果再返回
    static allSettled(promises){
          return new myPromise((resolve,reject)=>{
            const results = []
            promises.forEach(promise => {
               promise.then(res=>{
                   results.push({
                       status:PROMISE_STATUS_FULFILLED,
                       value:res
                   })
                   if(results.length === promises.length){
                       resolve(value)
                   }
               },err => {
                   results.push({
                       status:PROMISE_STATUS_REJECT,
                       value:res
                   })
                   if(results.length === promises.length){
                       resolve(value)
                   }
               }) 
            })
        })
    }
    static race(promises){
          return new myPromise((resolve,reject)=>{
              promises.forEach(promise => {
                  promise.then(resolve,reject)
              })
          })
    }
    static any(promises){
        //等到有一个成功的结果就resolve
        //所有都失败才返回reject
        const error = []
        return new myPromise((resolve,reject)=>{
            promises.forEach(promise => {
                promise.then(resolve,err => {
                    error.push(err)
                    if(error.length === promises.length){
                        reject(error)
                    }
                })
            })
        })
    }
}


const promise = new myPromise((resolve,reject)=>{
   //resolve("123")
    reject("456")
    // throw new Error("789")
})

promise.then(res=>{
    console.log(res);
}).catch(err=>{
    console.log(err);
}).finally(()=>{
    console.log("finally");
})
