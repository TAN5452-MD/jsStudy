const names = [1,2,3,4]

//生成迭代器的工厂函数
function createArrayIterator(arr){
let index = 0
return {
   next:function(){
      if(index < arr.length){
         return {done:false,value:arr[index++]}
      }else{
         return {done:true,value:undefined}
      }
   }
}
}

//无限迭代器
function createArrayIterator(arr){
    let index = 0
    return {
       next:function(){
             return {done:false,value:arr[index++]}
       }
    }
}


const namesIterator = createArrayIterator(names)

console.log(namesIterator.next());