//promise 有三个状态状态一旦确定就不能更改

//pending 执行中 

//fulfilled,resolved(已固定)

//reject 已拒绝

new Promise((resolve,reject)=>{

    resolve()

    reject()

    console.log("++++++++++++++++")
    //状态更改函数总是最后执行

})

//此时状态已经resolve了并不会改变为reject


/*
    resolve（参数）
   1.普通的值或者对象
   2.传入一个promise
        那么当前的promise的状态会由传入的promise来决定
   3.传入一个对象，并且这个对象由实现then方法（thenable）
        那么也会执行该then方法 并且由改then方法决定后续状态      
*/

new Promise((resolve,reject)=>{
    const obj = {
        then:function(resolve,reject){
            reject("aaa")
        }
    }
    resolve("vv")
}).then(res=>{
    console.log(res);
}).catch(err=>{
    console.log(err);
})
