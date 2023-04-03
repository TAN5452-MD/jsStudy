function myInstanceof(ownobject,constructorFn){
    let ob = Object.getPrototypeOf(ownobject)
    let prototype = constructorFn.prototype
    while(true){
        if(ob === null){
            return false
        }
        if(ob===prototype){
            return true
        }
       ob =  Object.getPrototypeOf(ob)
    }
}
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

const auto = new Car('Honda', 'Accord', 1998);
 console.log(myInstanceof(auto,Object))