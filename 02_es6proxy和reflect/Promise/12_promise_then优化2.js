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
        //为了实现链式调用 需要返回promise
        return new myPromise((resolve,reject) => {
        //如果此时的状态已经确定的话就立即执行
        if(this.status === PROMISE_STATUS_FULFILLED && onFulfilled){
            //拿到返回值并继续执行
            try {
              const result = onFulfilled(this.value)
                resolve(result)
            } catch (error) {
                reject(error)
            }
        }
        if(this.status === PROMISE_STATUS_REJECT && onReject){
            try {
            const result = onReject(this.value)
            resolve(result)
            } catch (error) {
                reject(error)
            }
        }
        //如果状态未确定的时候才添加
        if(this.status === PROMISE_STATUS_PENDINGI){
        //由于需要拿到返回值再reslove 所以这里用回调函数处理一下
        this.onFulfilledFns.push(()=>{
            try{
            const value = onFulfilled(this.value)
            resolve(value)
            }catch(error){
                reject(error)
            }
        }) 
        this.onRejectFns.push(()=>{
            try{
            const reason = onReject(this.reason)
            resolve(reason)
            }catch(error){
            reject(error)
            }
        })
        } 
    })
    }
}

const promise = new myPromise((resolve,reject)=>{
  // resolve("123")
   // reject("456")
    throw new Error("789")
})

promise
.then(res=>{
  console.log(res);
  //return ("11")
 throw new Error("123")
},err=>{
 console.log(err);
    //return 111
})
.then(res=>{
    console.log(res);
},err=>{
    console.log(err);})
    

55:19
