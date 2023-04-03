//js只支持单继承 TS也是 只有单继承语法
class Person{
    go (){
      
    }
  }
  class Runner{
    run(){

    }
  }
  function mixin(base){
    return class extends base{
        
    }
  }

  class My extends Person{
    
  }
  export {}