//传统面向对象多态
//！！！针对不同的数据类型在执行同一个操作的时候表现出来不同的行为
/*
    1.必须有继承
    2.必须有重写
    3.必须有父类引用指向子类对象
* */

function  calc(foo){
    foo.get()
}
var p = {
    name:'123',
    get(){
        return 100
    }
}

class Person {
    get(){
        return 200
    }
}
calc(p)
calc(new Person())
//js的多态不需要以上条件

function sum(a,b){
 return a+b
}
sum(1,2)
sum('123','456')
//不同的数据类型,不同的行为