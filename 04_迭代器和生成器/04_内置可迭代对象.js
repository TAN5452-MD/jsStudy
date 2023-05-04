const names = ["av","sad","sd"]

console.log(names[Symbol.iterator]);


const iteratorObj =  {
    names,
    [Symbol.iterator]:function(){
        let index = 0
        return {
            next:()=>{
               if(index < this.names.length){
                  return {done:false,value:this.names[index++]}
               }else{
                  return {done:true,value:undefined}
               }
            }
         }
    }
}
//展开运算符的原理也是迭代器
console.log([...iteratorObj]);


const obj = {
    name:1,
    age:2
}
/* es9 [2018]中新增的一个特性，不是使用迭代器
const newObj = {...obj}
const {name,age} = obj
 */


//解构语法
const [name1,name2] = names

//创建一些可迭代对象时
const set1 = new Set(iteratorObj)

const arr = Array.from(iteratorObj)



