const obj = {
    name:1,
    value:2
}
console.log(Object.values(obj));
console.log(Object.values("abc"));


//如果是字符串或者数组的话会使用索引作为key
console.log(Object.entries(obj));

//填充字符串
const msg = "hello world"
const newMsg = msg.padStart(15,"a").padEnd(20,"-")
console.log(newMsg);


