//proxy是一个类 代理对象可以监听我们想要对原对象进行的操作
//proxy一共有13个捕获器 具体可以看mdn
const obj ={
    name :' age',
    age:18
} 
//第二个参数是一个捕获器
const objProxyj = new Proxy(obj,{
    //设置值时的捕获器
    //target 目标对象， key 属性名
    get(target,key){
        console.log(`获取${key}属性`);
    },
    set(target,key,newValue){
        target[key] = newValue
    },
    //监听in的捕获器 没有receiver
    has(target,key){
        console.log("监听到in操作");
         return key in target
    },
    //删除属性的捕获器
    deleteProperty(target,key){
        console.log("删除属性");
        delete target[key]
    }
})

objProxyj.age = 12 

console.log(objProxyj.name);
console.log(objProxyj.age);

//in操作符
console.log("name" in obj);
