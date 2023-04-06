const obj = {
    name : '1',
    age:12,
    gender:"男"
}
Object.keys(obj).forEach(key=>{
    //此处是为了防止return obj[key]会一直重复调用栈导致溢出
    let value = obj[key]

    Object.defineProperty(obj,key,{
    
        set(newValue){
        console.log("name属性被修改了");
        value = newValue 
    },    
        get(){
        return value
    }

})
})
//Objcect.keys()可以获取到所有的key
//obj.name = "2"

console.log(obj.name);

/*
    缺点：
    新增或者删除属性的时候就监听不到了(因为没有重新遍历) 这就是vue2数组不能很好响应式的bug原因之一所在

 */
