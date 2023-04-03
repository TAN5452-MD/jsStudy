function foo(){
    console.log(this)
}

let bar = foo.apply(null) //window

let bar2 = foo.apply(undefined) //window