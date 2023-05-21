function throttle(fn, delay){
  //第一次进来为0
  lastTime = 0
  const _throttle =  function(){
    const nowTime = Date.now().getTime()
    //如果当前时间减去上一次时间大于延迟时间说明该执行函数了
    const remainTime = delay - (nowTime - lastTime)
    if(remainTime <= 0){
      fn()
      lastTime = nowTime
    }
  }
  return _throttle
}
