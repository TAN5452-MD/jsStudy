function requestData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(url)
    }, 1000)
  })
}

//第一种方案,形成回调地狱
/* requestData("1").then(res=>{
  requestData(res+"2").then(res=>{
    requestData(res+"3").then(res=>{
      console.log(res);
    })
  })
}) */

function* requestGenerator(a,b,c){
  const r1 = yield requestData(a)
  const r2 = yield requestData(r1+b)
  const r3 = yield requestData(r2+c)
  console.log(r3);
}
/* const r = requestGenerator('1','2','3')
r.next().value.then(res=>{
  r.next(res).value.then(res=>{
    r.next(res).value.then(res=>{
      console.log(res);
    })
  })
}) */

function execGenerator(fn){
  const generator = fn('1','2','3')
  function exec(res){
    const result = generator.next(res)
    if(result.done){
      return result.value
    }
    result.value.then(res=>{
      exec(res)
    })
  }
  exec(undefined)
}

execGenerator(requestGenerator)

//类似的库 -- co
