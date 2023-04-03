const nums = [1,2,3,[1,2,[1,2,3,[1,2,3]]]]

const newNums = nums.flat(Infinity)

console.log(newNums);

//2flatMap 相当于map函数 不过扁平层级为1

//将entries转回对象
Object.fromEntries