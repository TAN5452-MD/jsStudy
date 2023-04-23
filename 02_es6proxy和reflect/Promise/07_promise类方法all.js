const p1 = new Promise(res=>{

})

const p2 = new Promise(res=>{

})

const p3 = new Promise(res=>{

})

Promise.all([p1,p2,p3,"aaaa"]).then(res=>{
    //此时会等待所有promise fulfilled后按传入的顺序返回结果
    console.log(res);
})

//意外 在拿到结果之前 有promise变成了reject 那么整个promise是reject
//那么可以是哟你allSettled方法

//不会调用到catch
Promise.allSettled([p1,p2,p3]).then(res => {
    console.log(res);
})
