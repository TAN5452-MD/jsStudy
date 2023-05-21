class Person{
   go (){
    console.log("go");
  }
}
class Runner{

}

class My extends Person{
  constructor(){
    super()
  }
  
}
class My2 extends My {
    constructor(){
      super()
    }

}
const my = new My2()
my.go()
export {}
