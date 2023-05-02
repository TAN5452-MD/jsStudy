
//显式绑定优先级最高
//显式>>隐式
function foo(){
    console.log(this)
}


var obj = {
    name :'tom'
}

foo() //window
//第一个参数是this指向
//当需要传递参数时，call可以直接写多个参数，apply需要用数组方式传递：
foo.call(obj)
foo.apply(obj)
foo.apply("aaa")



//bind 避免多次重复绑定返回值是一个包装后的函数

let newFoo  = foo().bind("aaa")

newFoo() //aaa
