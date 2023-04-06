function foo(){

}
const fooProxy = new Proxy(foo,{
    apply(target,thisArg,args){
        // do something
        console.log("调用了foo函数");
        return target.apply(thisArg,args)
    },
    construct(target,args,newtarget){
     console.log("new 调用的"); 
     return new target(...args)  
    }
})

fooProxy()

fooProxy.apply({},[1,2,3])

new fooProxy()