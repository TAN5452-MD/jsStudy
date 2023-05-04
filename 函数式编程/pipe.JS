//初识reduce
function add(sum ,current){
    console.log(sum);
    return  current + sum 
}

const arr = [1,7,3]

//reduce会将本次计算的结果传入到下一次函数的参数中
//console.log(arr.reduce(add,0));

//在js中函数是一等公民 那么函数也可以作为参数传递，这样我们便能完成函数组合pipe
function pipe(...fns){
    //接收一个函数数组
    function callback(input,fn){
        //回调负责执行函数
       return fn(input)
    }
    return  (param) => fns.reduce(callback,param)
}

function add4(num) {
    return num + 4
  }  
  
  function multiply3(num) {
    return num*3
  }  
  
  function divide2(num) {
    return num/2
  }
const computed = pipe(add4,multiply3,divide2)
console.log(computed(0));



//主要作用:减少计算中间态 摆脱回调地域 构造声明式的数据流