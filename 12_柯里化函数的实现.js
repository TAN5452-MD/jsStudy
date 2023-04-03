//柯里化函数的实现
function currying(fn){
    const x = (...arg) => {
        //判断已经接受的参数，和函数本身需要的参数个数是否一致
        //console.log(arguments.length);
        if (arg.length >= fn.length){
            //如果参数已经传递完成的情况
            return fn.apply(this, arg)
        }else{
            //没有传递完成的情况，继续拼接参数
            return (...arg2)=>{
                return x.apply(this,arg.concat(arg2))
            }
        }
    }
    return x
}


function add(x,t,y){
    return x+t+y
}
//小技巧：此时拿到的是参数的个数
//console.log(add.length);

let adder = currying(add)
console.log(adder(1,3,6))
console.log(adder(10,20)(30))
