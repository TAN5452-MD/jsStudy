
/*
*   使用new创建后发生的事
*   1.在内部创建一个新的对象{}
*   2.将对象的类型上的原型上的东西放到新建立的对象中
*   3.将this指向新创建的对象
*   4.没有return空对象的情况下，返回新创建的对象
* */
function Person(){

}
let p1 = new Person()
let p2 = new Person()
console.log(p1,p2)
