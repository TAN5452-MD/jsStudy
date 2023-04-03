let data = {
    value:1,
    children:[{
        value:2,
        children:[{
            value: 4,

        },{
            value: 5
        }
        ]
    },
        {value: 3,
            children: [{
            value:6
            },{
                value:7
            }]
        }]
}

//深度优先算法
function walk(data){
    //输入每个节点的value
    console.log(data.value)
    //如果有子节点对子节点进行遍历
    if(data.children){
        //传入每个子节点
        data.children.forEach(item => {
            walk(item)
        })
    }
}
walk(data)

//广度优先算法
let allc = []
data = [data]
function walk2(data){
    allc = []
    data.forEach(item =>{
        console.log(item.value);
        if (item.children){
            allc = allc.concat(item.children)
        }
    })
   if (allc.length) walk2(allc)
}
walk2(data)