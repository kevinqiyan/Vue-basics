const http = require('http')
const serve = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain')
    red.send('hello world')
})
serve.listen('3500',()=>{
    console.log('3500');
})
// 通过定时器自动终止服务器
setTimeout(() => {
    console.log('退出node环境');
    process.exit()
}, 10000);
// 告知停止服务器信息
process.on('SIGTERM',()=>{
    serve.close(()=>{
        console.log('服务器通过消息控制已经终止');
    })
})

// 发送消息-终止服务器
//  process.kill(process.id,'SIGTERM')

// 读取环境变量
// process.env.NODE_ENV

// 导出文件
// 1. const arr = {
//     a:'a',
//     b:'b'
// }
/* 2. exports.arr = {
    a:'a',
    b:'b'
}


*/
// module.exports = arr

// 导入文件
// const arr = require('./arr')

/* 
process.nextTick()
process.nextTick(()=>{
    1.保证事件执行采用nextTick
    2.函数回调会在事件循环的当前迭代中被执行(当前操作结束之后)
    3.会早于setImmediate,setTimeout 之前执行
})

异步执行
setImmediate(()=>{
    1.和setTimeout()回调函数相似,执行的顺序取决于各种因素,但是它们都会在事件循环的下一个迭代中运行.
    
})


Promise
.all
    处理两个及以上的异步处理,所有的promise返回数据后执行后续输出
.race
    两个及以上的异步处理,哪一个先返回数据就返回哪一个数据,无论结果是成功还是失败的状态

async/await
1.在任何函数之前加上 async 关键字说明该函数会返回 promise;即使没有显示但是会在内部返回promise
2.相比较promise来说查看更简单

event事件监听 http://nodejs.cn/api/events.html#events_emitter_addlistener_eventname_listener


*/ 
