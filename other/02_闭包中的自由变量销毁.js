function createFnArray(){
    var name = 1
    var age = 2
    return function(){
        //v8引擎做了优化当age没使用时age会自动销毁
        console.log(name)
    }
}

