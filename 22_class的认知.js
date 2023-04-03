class Person {
    constructor(){
        this.name="123"
        return {}
    }
    //普通方法
    //通过p.名字去访问
    put(){
        console.log('put');
    }
    //定义静态方法 static
    //通过类名Person.create()访问
    static create(){
        return new Person()
    }

}
let p = new Person ()
//p.create() // ❎ 静态方法不能被实例化对象调用

console.log(Person.prototype);
console.log(Person.prototype.constructor);
console.log(typeof Person); 

console.log("Person",new Person());//如果手动在构造函数中返回一个空对象则为空对象



//继承以及重写父类方法和调用父类方法
class Human{
    go (){
        console.log("go");
    }
}

class male extends Human{
    //重写父类方法
    go(){
        //当有相同逻辑时可以调用父类方法
        super.go()
        console.log("go2");
    }
}

//!!!为什么要多写纯函数，方便tree-shaking


//继承内置类    
class Myarr extends Array{
    firstItem(){
        return this[0]
    }
    lastItem(){
        return this[this.length - 1]
    }
}

console.log(new Myarr(1,2,3).lastItem());