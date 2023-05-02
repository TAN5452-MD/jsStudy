function foo(){

}
//普通对象没有显式原型，而函数对象有
console.log(foo.__proto__)//隐式原型


console.log(foo.prototype)//显式原型


const f1 = new foo()
console.log(f1.__proto__ === foo.prototype) // true

//获取对象不可枚举的属性
console.log(Object.getOwnPropertyDescriptors(foo.prototype))

//!!__proto__根据浏览器的实现不同，有一些浏览器可能不存在