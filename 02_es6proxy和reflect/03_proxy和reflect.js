const obj = {
    name :'1',
    gender:'2',
}

const objProxy = new Proxy(obj,{
    get(target,key,receiver){
     console.log("get-------");
     return Reflect.get(target,key)   
    },
    set(target,key,newValue){
      console.log("set-------");
        const result = Reflect.set(target,key,newValue)
        if(result){} 
    }
})

objProxy.name = '123'