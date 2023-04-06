const obj = {
    name : '1'
}
//es12中可以监听对象销毁
const fina = new FinalizationRegistry((key) => {{console.log(key)}})

//可以传入2个参数 第二个为key 回调时会传入你就知道是哪个对象销毁了
fina.register(obj,"2")

//想要使用弱引用在之前可以使用weakSet 但是比较麻烦，现在可以使用weakRef
const info = new WeakRef(obj)

//如果对象没有销毁就会返回对象 如果销毁了就会返回undefined
console.log(info.deref())