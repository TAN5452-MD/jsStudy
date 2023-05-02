const promise = new Promise((resolve,reject)=>{
        resolve("111111")
})


promise.then(res=>{
    console.log(res);
}).catch(err => {
    console.log(err);
}).finally(() => {
    //finally没有参数
    console.log("finally");
    return "finally"
})
