var obj = {
    //JS中没有严格意义的私有属性
    _age: 12
}
Object.defineProperties(obj,{
    age:{
        configurable:false,
        enumerable:false,
        get(){
            return this._age
        },
        set(value){
            this._age = value
        }

    }
})

var obj2 = {
    _age : 14,
    set age(value){
        this._age = value
    },
    get age(){
        return this._age
    }
}

//获取属性描述符
Object.getOwnPropertyDescriptor(obj, "age")
Object.getOwnPropertyDescriptors(obj)
