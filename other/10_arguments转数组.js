function foo(a1){
    let newarr = Object.assign([],a1,arguments)
    console.log(newarr);

    //第二种方法
    const res = Array.prototype.slice.call(arguments)
    console.log(res);

    const arrFrom = Array.from(arguments)
    console.log(arrFrom);
}   

foo(123,456,789)
