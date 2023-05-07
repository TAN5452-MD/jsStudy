//不加await和普通函数没有区别

//异步函数的返回值一定是promise对象
//异步函数抛出的异常视为异步函数的promise的reject
 async function fn() {
    //return 123
    return {
      then:function(resolve,reject){
          reject(123)
      }
    }

  //还可以返回一个promise对象
}

//函数return的时候才会执行then 
fn().then(res => {
  console.log("res",res);
}).catch(err => {
  console.log(err);
})


