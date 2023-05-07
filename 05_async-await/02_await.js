//await 跟上表达式
async function fn() {
  //如果这里的await没有等到结果 后面的代码都不会执行
  //await 后面的代码相当于在这个promise的then里面执行
  await  xxx
  console.log("-----");
}


//普通的值会立即返回 也可以用thenable进行重写
async function foo(){
  const res1 = await 123
  console.log("res1",res1);
}

//返回一个promise 也是和之前一样的
async function foo2(){
  const res1 = await new Promise((resolve,reject)=>{
    resolve(123)
  })
}

//3.reject
async function foo3(){
  const res1 = reject //假如表达式的值是一个reject
  //那么这个reject会作为整个函数的返回的promise
}
