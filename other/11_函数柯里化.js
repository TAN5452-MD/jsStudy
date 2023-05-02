function foo(x){
    return function (y){
        return function (z){
            return function (c){
                return x+y+z+c
            }
        }
    }
}

let result = foo(1)(2)(3)(4)

//柯里化的简写
const sum = x => y => z => s => {
    return x+y+z+s
}

