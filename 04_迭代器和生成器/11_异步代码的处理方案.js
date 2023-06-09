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



//第二种方案
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
/* 
  const co = require('co')
  co(getData)
*/


//第四种方案 async/await

async function getData(){
  const res1 = await requestData("1")
  const res2 = await requestData(res1+"21")
  const res3 = await requestData(res2+"31")
  const res4 = await requestData(res3+"31")
  console.log(res4);
}

getData()

