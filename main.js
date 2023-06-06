function foo(){
  //this.name = "123"
}

foo.prototype = {
  name:"12sad3"
}
const a = new foo()
console.log(a.name)
