
//优化依赖收集
class Depend {
  constructor() {
    this.reactiveFns = []
  }

  //收集依赖
  addDepend(fn) {
    this.reactiveFns.push(fn)
  }

  //响应依赖
  notify() {
    this.reactiveFns.forEach(fn => fn())
  }

}

const depend = new Depend()

function watchFn(fn) {
  depend.addDepend(fn)
}

const obj = {
  name: 'a',
  age: 19
}

//实现一个简单的ref函数
function ref(data) {
  //有可能传入一个基本数据类型
  //proxy要代理深层对象必须手动遍历代理
  const proxy = new Proxy(data, {
    get(target, key, reciver) {
      console.log("触发了get")
      return Reflect.get(target, key, reciver)
    },
    set(target, key, value, reciver) {
      console.log("触发了set")
      Reflect.set(target, key, value, reciver)
      //这里去触发响应式
      depend.notify()
    }
  })
  return proxy
}

const objp = ref(obj)

watchFn(() => {
  //一些操作...
  console.log("触发了name的响应式")
})

watchFn(() => {
})


