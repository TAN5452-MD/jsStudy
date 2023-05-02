//call函数的实现
Function.prototype.myCall = function (thisArg,...rest){
    //1.获取被执行的函数
    let fn = this
    //2. 将this进行转化 防止传入的是非对象类型
    if(thisArg === 0 ){
        thisArg = Object(0)
    }
    //利用三元处理null和undefined情况
    thisArg = thisArg ? Object(thisArg) : window
    //3. 调用函数并获取返回值
    thisArg.fn = fn
    let result = thisArg.fn(...rest)
    delete thisArg.fn

    return result
}

var num = 123
//借用Object转类型
console.log(Object(num));

//apply函数的实现
Function.prototype.myApply = function (thisArg, argArray){
    let fn = this

    thisArg = thisArg ? Object(thisArg) : window
    //3. 调用函数并获取返回值
    thisArg.fn = fn

    //判断是否有传参
    argArray = argArray ? argArray : []
    let result = thisArg.fn(...argArray)
    delete thisArg.fn

    return result
}
