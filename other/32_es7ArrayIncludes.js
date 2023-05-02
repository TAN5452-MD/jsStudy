//includes和indexOf很像
//但是includes可以判断Nan indexOf不行
const names= [1,2,3,4,5,NaN]

const r = names.includes(NaN) 
console.log(r);

//指数运算符
const r2 = 2**6
console.log(r2);