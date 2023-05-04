function* createArrayIterator(arr) {
  /*  第一种写法  
 for(let i = 0;i < arr.length; i++){
    yield arr[i]
  } */
  //第二种写法
  yield* arr
}

const a = createArrayIterator([1, 2, 3, 4])
console.log(a.next())
console.log(a.next())
console.log(a.next())
console.log(a.next())

//2.创建一个函数，可以迭代一个范围内的数字
function* numberIterator(num1,num2){
    for(let start = num1; start <= num2 ; start++){
        yield start
    } 
}
const b = numberIterator(10,20)
console.log(b.next());
console.log(b.next());

class Test {
  constructor(names){
    this.names = names
  }
  *[Symbol.iterator] (){
      //传入一个可迭代对象，也可以自己实现
      yeild* this.names
  }
}
