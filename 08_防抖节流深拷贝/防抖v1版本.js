function debounce(fn, delay){
  let timer = null  
  return (...args) => {
    if(timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay);
  }
}

function A(){
  console.log(this);
}

const a = debounce(A,100)
a()

