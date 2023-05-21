//拿到返回值可以选择2种方式，第一种是选择以回调的形式返回，第二种是选择返回一个Promise对象

//1 回调方案
function debounce(fn, delay, immeiate = false, callback){
  let timer = null  
  let isInvoke = false
  debounce.cancel = () => {
    if(timer)clearTimeout(timer)
    timer = null
    isInvoke = false 
  }
  return (...args) => {
    if(timer) clearTimeout(timer)
    
    if(immeiate && !isInvoke){
      let result = fn.apply(this, args)
      if(callback) callback(result)
        isInvoke = true
    }else{
      timer = setTimeout(() => {
        let result = fn.apply(this, args)
        if(callback) callback(result)
        timer = null
        isInvoke = false
      }, delay);
    }
  }
}

//2 Promise方案
function debounce(fn, delay, immeiate = false){
  let timer = null  
  let isInvoke = false
  debounce.cancel = () => {
    if(timer)clearTimeout(timer)
    timer = null
    isInvoke = false 
  }
  return (...args) => {
    if(timer) clearTimeout(timer)
    
    if(immeiate && !isInvoke){
      let result = fn.apply(this, args)
      return new Promise((resolve, rejecet) => {
          resolve(result)
      })
        isInvoke = true
    }else{
      return new Promise((resolve,rejecet) => {
        timer = setTimeout(() => {
          let result = fn.apply(this, args)
          resolve(result)
          timer = null
          isInvoke = false
        }, delay);
      })
    }
  }
}
