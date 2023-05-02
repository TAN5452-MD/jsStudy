function Person(){
    this.name = '111'
}
Person.prototype.eating = function(){
    console.log(this.name+'im eating')
}

function Student(){
    this.sno = '222' 
}

//原型链的继承
Student.prototype = new Person()


//可以访问，因为将原型指向了new p
const s = new Student()
console.log(s.name)
s.eating()

//原型链实现继承的弊端
//1.打印最终对象，有些原型上的属性不会显示
//2.创建2个对象的时候会共用原型链上的属性，本应互相独立
//3.不能传递参数

let s1 = new Student()
let s2 = new Student()
s1.name = 'koko' 
console.log('s2.name',s2.name) //111，并没有改变
