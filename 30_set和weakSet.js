//set 类似于数组 但是和数组的区别是数据不能重复
//set 只能通过构造函数创建
const set = new Set()
set.add(1)
set.add(2)
set.add(3)
set.add(2)
console.log(set);

//添加引用类型时，内存地址不同，所以可以添加
//原来的数组去重
const arr = [1,2,2,3,4,5,6]
const newArr = []
for (const iterator of arr) {
    if(newArr.indexOf(iterator) === -1){
        newArr.push(iterator)
    }
}
//利用set去重 new的时候可以传入一个可迭代对象
const set2 = new Set(arr)
console.log(set2);

//将set转回数组
const arr2 = [...set2]
const arr3 = Array.from(set2)

//set的常见方法
console.log(set.size());

set.add()
//没有索引，传入要删除的元素
set.delete(2)
//包含
set.has(100)
//清空
set.clear()

//weakSet
/*
    weakSet只能存放对象数据类型，不能存放基本数据类型
    对元素的引用是弱引用，如果没有其他引用对某个对象进行引用，那么gc可以回收该对象进行回收
    普通对象和set是强引用，弱应用不影响gc回收
    weakSet不能遍历，没有迭代器。没有clear方法
 */

const weakSet = new WeakSet()

weakSet.add(10)//会报错 只能存放对象类型

weakSet.add({name:'cook'})


//weakSet的应用场景
const PersonSet = new weakSet()
class Person{
    constructor(){
        //每次实例化时传入当前生成的this
        PersonSet.add(this)
    }
    running(){
        if(!PersonSet.has(this)){
            //如果不是实例化的对象调用
            throw new Error('不是实例化对象调用')
        }
        console.log("running");
    }
}

const p = new Person()

p.running()

p.running.call({name:'age'})