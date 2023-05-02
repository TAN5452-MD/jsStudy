//symbol每次创建的值都是唯一的
const a = Symbol('a')
//console.log(a);

const obj = {
    [Symbol.for('s1')]:'test',
    [Symbol.for('s2')]:'test2',
}

//只能通过obj[X] 来获取 不能通过obj.X来获取
const keys = Object.getOwnPropertySymbols(obj);
for (const key of keys) {
    console.log(obj[key]);
}

//使用symbol作为key的属性名，在遍历/object.keys等中是获取不到key的
console.log(Object.keys(obj));

//如果需要创建一样的符号需要使用Symbol.for