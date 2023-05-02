/*
    yield是暂停执行，return是结束执行
 */
function* foo(){
  console.log("开始执行");
  console.log("value1");
  //yield 后面的值即为返回值
  yield 123
  console.log("value2");
  yield
  console.log("value3");
  yield
  console.log("会执行最后一段所有代码");
  console.log("finally");
}
//每一段yield有自己的返回值

const generator = foo()
console.log("返回值1",generator.next());
