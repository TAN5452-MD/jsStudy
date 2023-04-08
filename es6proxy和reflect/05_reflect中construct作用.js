
function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Teacher() {

}

//有时候会要执行的是一个Person的代码，而创建出来的对象是Teacher的实例
//这时候就可以使用Reflect.construct

const p = new Person('zhangsan', 18);

const teacher = Reflect.construct(Person, ['zhangsan', 20], Teacher)
console.log(teacher)

