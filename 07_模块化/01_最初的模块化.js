//最早的模块化是使用自执行函数来产生函数作用域分割模块
/* 
      缺点：模块名字冲突 记名字不好记  

*/

//为什么能用exports导出(node源码)
module.exports  = {
}

exports = module.exports


//require细节
/* 
      require(xxx)
      1. 如果是一个核心模块，比如path http  ---- 直接返回核心模块并且停止查找
      2. 如果是一个路径 ./ ../ 如果有后缀名，按照后缀名的格式查找对应文件，如果没有后缀名查找文件xxx 然后是.js .json .node
            -如果没有查找到对应的文件，将xxx作为一个目录 查找目录下的index.js .json .node
      3. 如果不是路径也不是核心模块，就去module.path里面按照顺序查找
      4. 如果都没找到报not found
*/


/* 
      在require第一次引用的时候，模块中的js代码会被执行一次
      模块被多次引入会缓存，只加载一次(每个module文件都有一个loaded 根据这个布尔值查看是否加载过)
      加载顺序为深度优先 
*/




/* 
            import 引入里面的内容解析完之前后续的代码都不会执行。
            也可以采用不阻塞的写法 把improt写成一个函数 也就是懒加载

*/

//如果是函数的话返回的是一个promise
import('./a.js').then(data=>{})

//es11新增特性
console.log(import.meta.url); //当前模块所在的路径
