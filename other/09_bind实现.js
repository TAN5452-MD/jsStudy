Function.prototype.myBind = function (thisArg, ...argArray){
    console.log("this",this)
    let fn = this
    thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : window
    return (...arg) => {
        console.log(this);
        //解决参数问题
        let arr = [...argArray, ...arg]
        thisArg.fn = fn
        let result = thisArg.fn(...arr)
        delete thisArg.fn
        return result
    }

}
function foo(){
    console.log("foo",this);
}
let result = foo.myBind("abc")
result()
