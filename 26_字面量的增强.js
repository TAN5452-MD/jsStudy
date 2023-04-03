
//计算属性名
var name = 'code'
var obj = {
    [name+123]:'haha'
}
//es6数组的结构是按照顺序结构
//解构的元素放到数组
var [item,...items] = [1,2,3]
//解构的时候也可以设置默认值
let[item=1] = [1,2,3]

//对象解构重命名
const {name:newName} = name
console.log(newName)