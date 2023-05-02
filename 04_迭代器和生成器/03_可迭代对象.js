const names = [1,2,3,4,5,6]

//可迭代对象要在对象中实现[Symbol.iterator]这样一个方法他的返回值是一个迭代器

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
//这个对象就是一个可迭代对象
const iterator = iteratorObj[Symbol.iterator]()
console.log(iterator.next());

//for of本质上是借助迭代器来遍历的
for (const iterator of iteratorObj) {
    console.log(iterator);
}
