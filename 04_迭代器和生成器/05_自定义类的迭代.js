class className {
  constructor(address,name,student){
    this.address = address
    this.name = name
    this.student = student
  }
  entry(newStudent){
    this.student.push(newStudent)
  }
  [Symbol.iterator](){
    let index = 0
    return {
      //由于this指向问题这里只能用箭头函数
      next:() => {
        if(index < this.student.length){
          return {done:false,value:this.student[index++]}
        }else{
          return {done:true,value:undefined}
        }
      },
      //可以结束迭代器，js会监听帮我们调用到return这个方法
      return:()=>{
        console.log("迭代器提前中止了");
        //这里也要求返回一个对象
        return {done:true,value:undefined}
      }
    }
  }
}

const student = new className('北京','班级1',['小明','小红','小花'])
for (const iterator of student) {
  console.log(iterator);
}
