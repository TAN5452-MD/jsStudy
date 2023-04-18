const obj = {
    name :'1'
}

//监听函数

//利用全局函数保存依赖函数方便代理收集
let reactiveFns = null
function watchFn(fn){
    reactiveFns = fn
    //此时函数会触发代理的get 我们就成功收集到了依赖
    fn()
    reactiveFns = null
}



function getDepend(target,key){
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
class Depend {
  constructor() {
    this.reactiveFns = new set()
  }

  //收集依赖
  /**
   * addDepend(fn) {
   *   this.reactiveFns.push(fn)
   * }
   */
  depend(){
      //因为会设计到重复添加依赖的问题，所以我们可以利用set来去重
      //this.reactiveFns.push(reactiveFns)
      this.eactiveFns.add(reactiveFns)
  }
  //响应依赖
  notify() {
    this.reactiveFns.forEach(fn => fn())
  }

}

const depend = new Depend()
const objProxy = new Proxy(obj, {
    get(target, key,receiver) {
        //收集依赖
        const depend = getDepend(target,key)
        depend.depend()
        return Reflect.get(target, key, receiver)
    
    }
})
