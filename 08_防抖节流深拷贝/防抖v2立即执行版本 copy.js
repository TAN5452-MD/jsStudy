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
        fn.apply(this, args)
        isInvoke = true
    }else{
      timer = setTimeout(() => {
        fn.apply(this, args)
        timer = null
        isInvoke = false
      }, delay);
    }
  }
}

