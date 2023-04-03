function concurRequest(urls,maxNum){
    return new Promise(resolve => {
        if(urls.length === 0){
            resolve([])
            return
        }
        //如果当前下标等于长度说明请求全部结束
        if(index === urls.length){
            return
        }
        //返回的结果数组
        const result = []
        //下一个请求的下标
        let index = 0
        //当前请求的完成数量
        let count = 0
        async function request(){
            let own = index
            let url = urls[index]
            index++
            try {
                //模拟发送请求
                //如果没有错误就将请求结果添加到返回数组里
                const res = await fetch(url)
                result[own] = res
            } catch (err){
                //如果有错误就将错误添加
                result[own] = err
            } finally {
                //判断所有的请求是否都已经完成
                count++
                if (count === urls.length){
                    resolve(result)
                }
                //无论成功还是失败都发送下个请求
                request()
            }
        }
        //计算折中的并发
        const times = Math.min(maxNum, urls.length)
        for (let i = 0; i < times; i++){
            request()
        }
    })
}
