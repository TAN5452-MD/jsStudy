
//封装一个响应式函数
let reactiveFns = []

function watchFn(fn) {
  reactiveFns.push(fn)
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

//循环调用响应式函数
reactiveFns.forEach(fn => fn())
