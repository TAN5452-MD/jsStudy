

//传入的这个函数被称之为executor执行器函数
//resolve 在成功时的回调
//reject 在失败时的回调
const promise = new Promise((
    resolve,
    reject

)=>{
    console.log('promise传入的函数被执行了')
})

//resolve
promise.then(()=>{

})
//reject
promise.catch(()=>{

})

//也可以这样写
promise.then((res)=>{
    console.log(res);
},(err)=>{
    console.log(err);
})
