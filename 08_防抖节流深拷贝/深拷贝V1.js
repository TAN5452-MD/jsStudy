function deepClone(originValue){
  if(typeof originValue === 'function'){
    return originValue
  }
  if(!isObject(originValue)){
    return originValue
  }
  const newObj = Array.isArray(originValue) ? [] : {}
  for (const key in originValue) {
    newObj[key] = deepClone(originValue[key])
  }
  return newObj
}

function isObject(obj){
  const objType = typeof obj
  if(obj && objType === 'object' || objType === 'function'){
    return true
  }
}
