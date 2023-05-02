const names = ['ac','bc','cc']
const name = 'tha'

function foo(x,y,z){
    console.log(x,y,z)
}

//foo.apply(null,names)
foo(...names)
//还可以展开字符串
foo(...name)

//3.ES2018(es9)
//展开运算符是浅拷贝
   