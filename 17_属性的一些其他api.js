let obj = {
    name : 'tom'
}
//禁止对象继续添加新的属性,编译不会报错
Object.preventExtensions(obj)

//禁止对象配置/删除里面的属性
Object.seal(obj)

//让属性不可以修改(writeable:false)
Object.freeze(obj)

function foo(){
    console.log('2')
}
new foo//可以不写括号
