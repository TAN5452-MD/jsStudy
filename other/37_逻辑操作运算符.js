//逻辑赋值运算符
let msg = undefined 

msg ||= "default message"

console.log(msg);

let info = {
    name : "1"
}
let r 
//只能是原对象 不推荐使用
 info &&= info.name

console.log(info);

//逻辑空 必须为undefined或者 null 才会判定为false
let m = ""

m ??= "default message"

console.log(m);