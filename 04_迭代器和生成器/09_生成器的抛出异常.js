function* foo(){
  console.log("开始执行");
  console.log("value1");
  //拿到下一段代码的参数
  try{
   yield 123
  }catch(err){
    console.log(err);
  }
  console.log("value2");
  console.log("接收到的参数:");
  yield
  console.log("value3");
  yield
  console.log("会执行最后一段所有代码");
  console.log("finally");
}
 const i = foo()
/* console.log(i.next());
意味着在第一段代码的后面加上return，就会提前终止生成器代码继续执行
console.log(i.return(12));
 */

console.log(i.next());
//如果代码内没有捕捉异常就会终止，如果捕获了就不会终止
console.log(i.throw("error test"));
