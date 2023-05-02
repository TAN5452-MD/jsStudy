const p1 = new Promise(res=>{

})

const p2 = new Promise(res=>{

})

const p3 = new Promise(res=>{

})

Promise.race([p1,p2,p3,"aaaa"]).then(res=>{
        //只要有一个promise变成fulfilled就结束
        console.log(res);
})

//es12 any方法 至少有一个fulfilled才结束
Promise.any([p1,p2,p3]).then(res=>{
    console.log(res)
    
}).catch(err => {
    //如果所有都是拒绝,会等待所有完成才调用catch
    console.log(err);
})
