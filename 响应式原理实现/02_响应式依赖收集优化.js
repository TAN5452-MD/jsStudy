
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

watchFn(() => {
  //一些操作...
  console.log(obj.name)
  console.log("假装是响应式")
})

watchFn(() => {
  console.log("假装是响应式")
  console.log(obj.age)
})

//触发响应式
obj.name = 'b'
obj.age = 20
depend.notify()
