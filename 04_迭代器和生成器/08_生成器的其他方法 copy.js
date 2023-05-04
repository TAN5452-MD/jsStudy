function* foo(){
  console.log("开始执行");
  console.log("value1");
  //拿到下一段代码的参数
  const value = yield 123
  console.log("value2");
  console.log("接收到的参数:",value);
  yield
  console.log("value3");
  yield
  console.log("会执行最后一段所有代码");
  console.log("finally");
}
const i = foo()
i.next()
//1.next传递参数
i.next(10)
