function Person(name, age, gender){
    //通用的抽出来
    this.name = name
    this.age = age 
    this.gender = gender
}

function Student(name, age, gender, sno){
    //传递给上层构造函数
    //想想new操作的时候会发生什么 this是怎样绑定的
    Person.call(this,name,age,gender)
    this.sno = sno
}

let  s1 = new Student('ko',19,'1',123)
let  s2 = new Student('so',12,'2',456)
console.log(s1);
s1.name = 'sd'
console.log(s2)
//借用构造函数的弊端
//Person函数会被调用多次
//实例化对象的原型上会多出一些没有必要的属性