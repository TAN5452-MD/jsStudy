class Depend{

}
//根据对象 对象的属性进行依赖收集
//obj对象 
//name depend
//age  depeng
const objMap = new Map();
objMap.set("name","objdepend")
objMap.set("age","objdepend")


//info对象
const infoMap = new Map();
infoMap.set("name","infodepend")     


//创建一个弱引用对象保存对对象的引用
const weakMap = new WeakMap();
weakMap.set(obj,objMap)
weakMap.set(info,infoMap)
///当响应式变化的时候，从weakmap中获取到对象，再从对象的map中去获取具体属性对应的响应式函数执行
const depend = weakMap.get(obj).get("name")
//通知depend.notify()执行   


//此时proxy代理里面就不能简单的用depend.notify()了,因为无法准确的知道是哪个对象
function getdepend(target,key){
    const map = weakMap.get(target)
    //如果有map就返回，如果没有代表此时还未创建，所以我们应当创建一个
    if(!map){
        const targetMap = new Map();
        weakMap.set(target,targetMap)
    }
    
    //根据key获取depend对象
    const depend = map.get(key)
    //第一次有可能没有值需要新建一个depend
    if(!depend){
        const depend = new Depend()
        map.set(key,depend)
    }
    return depend

}

//在proxy里面(伪代码)

set(target,key,value){
    const depend = getdepend(target,key)
    depend.notify()
}
