 //生成器是es6中新增的一种函数控制，使用的方案，他可以让我们更加灵活的控制函数什么时候继续执行，暂停执行
/*
    生成器函数的返回值是一个Generator(生成器)  
 */

//*的位置没有规定
function* foo(){
  console.log("开始执行");
  console.log("value1");
  yield
  console.log("value2");
  yield
  console.log("value3");
  yield
  console.log("会执行最后一段所有代码");
  console.log("finally");
}
//返回的生成器对象
const generator = foo()

i.next()
i.next()
i.next()
