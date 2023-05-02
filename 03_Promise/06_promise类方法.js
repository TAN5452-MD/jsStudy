//前面的then catch finally 都是属于promise的实例方法都是放到原型上的
//


//如果你想把一个值转为promise
const promise = Promise.resolve({name:"ada"})
promise.then(res=>{
    console.log(res)
})

//对于rejcet来说不分三种情况 所以你runable也不行
const promise2 = Promise.reject("rejected")

promise2.then(res=>{
    console.log("Res",res);
}).catch(err => {
    console.log("err",err);
})

//只会打印这个promise
const promise3 = Promise.reject(new Promise((resolve,rejcet)=>{
}))

promise3.then(res=>{

}).catch(err => {
    console.log(err);
})
