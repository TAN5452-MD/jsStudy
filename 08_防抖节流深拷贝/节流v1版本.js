function throttle(fn, delay, options = {leading: true, trailing: false, }){
  const {leading, trailing} = options 
  //第一次进来为0
  let lastTime = 0
  let timer = null
  const _throttle = function(...args){
    const nowTime = Date.now().getTime()
    //第一次是否触发
    if(!lastTime && !leading){
      lastTime = nowTime
    }
    //如果当前时间减去上一次执行时间大于延迟时间说明该执行函数了
    const remainTime = delay - (nowTime - lastTime)
    if(remainTime <= 0){
      //如果有正在执行中的定时器需要清除
      if(timer) {
        clearTimeout(timer)
        timer = null
      } 
      fn.apply(this, args)
      lastTime = nowTime
      return 
    }
  }
    if(trailing > 0 && !timer){
      timer = setTimeout(() => {
        fn.apply(this, args)
        timer = null
        //代表下一次开始
        lastTime = !leading ? 0 : Date.now().getTime()
      }, remainTime);
    }
  return _throttle
} 
