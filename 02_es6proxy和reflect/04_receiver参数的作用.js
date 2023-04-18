

// receiver参数的作用是，如果原对象不可写，或者禁止扩展，这时set方法将不起作用，但是如果设置了receiver，就会创建一个同名属性，从而成功。
const obj = {
  _name: 'age',
  get name() {
    return this._name
  },
  set name(newValue) {
    this._name = newValue
  }
}

const objProxy = new Proxy(obj, {
  //Reflect.set方法的第四个参数receiver，可以指定当前的this
  //Reflect.get方法的第三个参数receiver，可以指定当前的this
  set(target, key, value, receiver) {
    //receiver对象就是被创建出来的代理对象
    Reflect.set(target, key, value, receiver)
  },
  get(target, key, receiver) {
    return Reflect.get(target, key, receiver)
  }
})


