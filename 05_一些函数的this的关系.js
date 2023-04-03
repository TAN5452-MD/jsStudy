setTimeout(() => {
   console.log(this) //window 
}, 2000);

// const div = document.getElementById(xxx) 
// div.onClick = function (){} //this是拿到的元素

let arr1 = [1,2,3]
//foreach默认的this是window 第二个参数绑定this

arr1.forEach((item) => {
    console.log(this)
},"abc") // this是abc

foo.bind('adc').call('123') //abc bind的优先级大于call和apply
/* 
*默认绑定的优先级最低
*new > 显式 > 隐式
* new 不能和call和apply一起使用
* 箭头函数不能进行显示绑定
 */