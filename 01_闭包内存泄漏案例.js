function createFnArray(){
    //创建一个内存为4m的数组
    var arr = new Array(1024*1024).fill(1)

    return function(){
        console.log(arr.length)
    }
}
//如果不置为null会造成内存泄漏
let arr = []
for(let i =1 ; i<100 ;i++){
    arr.push(createFnArray())


}

//
