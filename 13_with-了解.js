//严格模式下不允许使用with
function foo(){
    //with语句：可以形成自己的作用域
    with(obj){
        console.log(name)
    }
}
var obj = {name:'t'}
