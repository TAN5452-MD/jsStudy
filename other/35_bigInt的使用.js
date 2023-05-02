console.log(Number.MAX_SAFE_INTEGER); //9007199254740991
//并不是说超过最大的数字就不能表示，但是有可能不安全

//es11之后 要表示bigInt必须加n不能省略
const bigInt = 9007199254740991n
console.log(bigInt+100n);

const num = 100
console.log(bigInt + BigInt(num));

//bigint转成小数 不一定安全
const small = Number(bigInt)


//空值合并运算
const foo = undefined
//只有前面的为undefined和null的时候才会出发 空字符串的时候不会（但如果使用 ｜｜ 会判定为0 因为空字符串==0）
const bar = foo ?? "default value"

//获取全局对象
//在不同的环境下会有不同的全局对象
console.log(globalThis);