/* 迭代器是 确使用户可在容器对象上便利访问的对象
   迭代器是帮助我们对某个数据结构进行遍历的对象
    1.在js中迭代器也是一个具体的对象，这个对象需要符合迭代器协议
         - 特定的next方法
         next 方法由如下的要求
         一个无参或有一个参数函数，返回一个应当拥有以下2个属性的对象
                - done
                - value
 */

//最简单的迭代器
const iterator  = {
   next: function(){
      return {done:true,value:123}
   }
}

const names = ['abc','cba','bcd']

//当访问完所有元素 最后再执行next的时候 done才会变为true value为undefined
let index = 0
const nameIterator = {
   next:function(){
      if(index < names.length){
         return {done:false,value:names[index++]}
      }else{
         return {done:true,value:undefined}
      }
   }
}

console.log(nameIterator.next());
console.log(nameIterator.next());
console.log(nameIterator.next());
console.log(nameIterator.next());



