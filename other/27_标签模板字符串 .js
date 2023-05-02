//暂时性死区，使用let const 声明的变量在声明之前都是不可访问的

//标签模板字符串

function foo(m,n){
console.log(arguments);
}
foo(1,2)

//另外调用函数的方式
const name = 'why'
const age = 18
//[ 'hello ', ' ,you are ', ' years old', ] why
foo`hello ${name} ,you are ${age} years old`

//有默认值的形参最好放到最后