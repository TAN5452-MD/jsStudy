//普通对象的key只能是字符串和symbol类型
//map允许对象类型作为key
const obj = {
    name : 'age'
}
const map = new Map()
map.set(obj,'seesaw')
console.log(map);

//weakMap
/*
//weakMap不能遍历 
和weakSet一样 weakMap的key只能是对象，weakMap的key是弱引用
 */

const weakMap = new WeakMap()

//weakMap没有size属性 没有clear方法
console.log(weakMap.size());

//应用场景（收集依赖）
//需要做响应式的数据
function obj1Name1 (){

}
function obj2Name2(){

}
const obj1= { 
    name :'1'
}

const obj1Map = new Map()
obj1Map.set("name",[obj1Name1,obj2Name2])
//这样就能保存当数据变化时需要执行的函数
weakMap.set(obj1,obj1Map)
